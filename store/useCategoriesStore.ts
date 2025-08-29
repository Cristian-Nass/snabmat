import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface Category {
  id: number;
  title: string;
  value: string;
}

interface CategoriesStore {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  fetchCategories: () => Promise<void>;
}

const useCategoriesStore = create<CategoriesStore>()(
  devtools((set) => ({
    categories: [],
    setCategories: (categories) => set({ categories }),
    fetchCategories: async () => {
      try {
        const response = await fetch("/api/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const categories = await response.json();
        set({ categories });
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
  }))
);

export default useCategoriesStore;
