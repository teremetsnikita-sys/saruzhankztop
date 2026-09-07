/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import { RFQItem } from "../types";

interface RFQContextType {
  items: RFQItem[];
  addItem: (item: Omit<RFQItem, "quantity">, quantity?: number) => void;
  removeItem: (skuId: string) => void;
  updateQuantity: (skuId: string, quantity: number) => void;
  clear: () => void;
}

const RFQContext = createContext<RFQContextType | undefined>(undefined);

export const RFQProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<RFQItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("saruzhan_rfq");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse RFQ from local storage", e);
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("saruzhan_rfq", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: Omit<RFQItem, "quantity">, quantity: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.skuId === newItem.skuId);
      if (existing) {
        return prev.map((i) =>
          i.skuId === newItem.skuId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...newItem, quantity }];
    });
  };

  const removeItem = (skuId: string) => {
    setItems((prev) => prev.filter((i) => i.skuId !== skuId));
  };

  const updateQuantity = (skuId: string, quantity: number) => {
    setItems((prev) =>
      prev.map((i) => (i.skuId === skuId ? { ...i, quantity: Math.max(1, quantity) } : i))
    );
  };

  const clear = () => setItems([]);

  return (
    <RFQContext.Provider value={{ items, addItem, removeItem, updateQuantity, clear }}>
      {children}
    </RFQContext.Provider>
  );
};

export const useRFQ = () => {
  const context = useContext(RFQContext);
  if (!context) throw new Error("useRFQ must be used within RFQProvider");
  return context;
};
