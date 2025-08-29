"use client";

import useCategoriesStore from "@/store/useCategoriesStore";
import { useEffect } from "react";

const Categories = () => {
  const { categories, fetchCategories } = useCategoriesStore();
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  console.log(categories);
  return (
    <div
      style={{
        height: "100px",
        width: "70%",
        backgroundColor: "salmon",
      }}
    ></div>
  );
};

export default Categories;
