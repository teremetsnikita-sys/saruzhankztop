import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { LocalizedString } from "../types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLocalized(text: LocalizedString | undefined, lang: string): string {
  if (!text) return "";
  if (typeof text === "string") return text;
  
  // Normalize language code
  const langKey = (lang.toUpperCase() === 'KZ' || lang.toUpperCase() === 'KK') ? 'kk' : lang.toLowerCase().split('-')[0];
  
  const localized = (text as any)[langKey] || (text as any)['ru'];
  return localized || "";
}
