
import { SKU, Series } from '../types';

export const SPREADSHEET_ID = '1A5wPfzx3NlMbI7oLfpyAAPzv4AycFInlC3Wf7caX20c';

export interface SheetData {
  values: string[][];
}

export const fetchSheetValues = async (accessToken: string, range: string): Promise<SheetData> => {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to fetch sheet values');
  }

  return response.json();
};

/**
 * Parses the horizontal block structure from the spreadsheet.
 * Each block is 2 columns: SKU and Description.
 * Row 2: General Categories (Main Sections)
 * Row 3: Product Types
 * Row 4: Series Name (Detailed)
 * Row 6: Headers (SKU, Description)
 * Rows 7+: Data
 */
export const parseCatalogData = (rows: string[][]) => {
  if (rows.length < 7) return [];

  const catalog: any[] = [];
  const row2 = rows[1] || []; // General Category
  const row3 = rows[2] || []; // Product Type
  const row4 = rows[3] || []; // Series
  const row6 = rows[5] || []; // Headers
  const dataRows = rows.slice(6); // Data starts from row 7

  // Iterate through row 6 to find "Артикул" columns
  for (let col = 0; col < row6.length; col++) {
    const headerValue = (row6[col] || '').trim().toLowerCase();
    
    // Only process columns that are explicitly marked as SKU starts
    if (headerValue === 'артикул' || headerValue === 'sku') {
      const mainCategory = findPreviousValue(row2, col);
      const subCategory = findPreviousValue(row3, col);
      // For series name, we sometimes have it in row 4 of the current column OR the previous one if merged
      const seriesFull = findPreviousValue(row4, col + 1).replace(/\n/g, ' ');

      if (!seriesFull) continue;

      dataRows.forEach((row) => {
        const sku = row[col]?.trim();
        const description = row[col + 1]?.trim();

        if (sku && sku !== 'Артикул' && sku.length > 2) {
          catalog.push({
            sku,
            description: description || '',
            mainCategory: mainCategory || 'Общий раздел',
            subCategory: subCategory || '',
            series: seriesFull,
          });
        }
      });
    }
  }

  return catalog;
};

// Helper to find the "merged" header value by looking left
const findPreviousValue = (row: string[], index: number): string => {
  for (let i = index; i >= 0; i--) {
    if (row[i] && row[i].trim()) return row[i].trim();
  }
  return '';
};
