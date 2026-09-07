/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type LocalizedString = string | {
  ru: string;
  en: string;
  kk: string;
};

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  description?: LocalizedString;
  fullDescription?: LocalizedString;
  founded?: string;
  headquarters?: LocalizedString;
  specialization?: LocalizedString[];
  image?: string;
}

export interface Family {
  id: string;
  name: LocalizedString;
  slug: string;
  description: LocalizedString;
  image?: string;
}

export interface ProductType {
  id: string;
  familyId: string;
  name: LocalizedString;
  slug: string;
  description: LocalizedString;
  image?: string;
}

export interface Series {
  id: string;
  productTypeId: string;
  brandId: string;
  name: LocalizedString;
  slug: string;
  descriptionHtml: LocalizedString;
  images: string[];
  datasheetUrl?: string;
  specRange?: {
    [key: string]: LocalizedString;
  };
  features?: LocalizedString[];
  benefits?: LocalizedString[];
  applications?: LocalizedString[];
  markets?: LocalizedString[];
}

export interface SKU {
  id: string;
  seriesId: string;
  articleCode: string;
  description: LocalizedString;
  attributes?: {
    [key: string]: string | number;
  };
  availability: "in_stock" | "on_request" | "out_of_stock";
  technicalSpecs?: {
    pressure?: number;
    thread?: string;
    material?: string;
    temperature?: string;
  };
}

export interface Service {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon?: string;
  image?: string;
}

export interface Industry {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  image: string;
  equipment: LocalizedString[];
}

export interface RFQItem {
  skuId: string;
  articleCode: string;
  seriesName: string;
  quantity: number;
  category?: string;
  image?: string;
}
