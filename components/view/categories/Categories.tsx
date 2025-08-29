"use client";

import CategoryCard from "./CategoryCard";
import useCategoriesStore from "@/store/useCategoriesStore";
import { useEffect } from "react";
import "@/style/ingredients-selector.css";

const Categories = () => {
  const { categories, fetchCategories } = useCategoriesStore();
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  console.log(categories);
  return (
    <aside className='slidebar-wrapper'>
      <div className='media-scroller'>
        {categories.map((category) => (
          <div className='media-element' key={category.id}>
            <CategoryCard
              title={category.title}
              imgUrl={category?.imgUrl || ""}
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Categories;
