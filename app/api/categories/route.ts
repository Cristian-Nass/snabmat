import { NextResponse } from "next/server";

const categoriesData = [
  {
    title: "Sylt & Marmelad",
    value: "sylt-&-marmelad",
  },
  {
    title: "Te & Nabat",
    value: "te-&-nabat",
  },
  {
    title: "Nötter & Torkad Frukt",
    value: "notter-&-torkad-frukt",
  },
  {
    title: "Oliver & Inlagda grönsaker",
    value: "oliver-&-inlagda-gronsaker",
  },
  {
    title: "Torkade örter & baljväxter",
    value: "torkade-orter-&-baljvaxter",
  },
  {
    title: "Ris & Reshte",
    value: "ris-&-reshte",
  },
  {
    title: "Dryck & Smaksättare",
    value: "dryck-&-smaksattare",
  },
  {
    title: "Färdiga rätter på burk",
    value: "fardiga-ratter-pa-burk",
  },
  {
    title: "Saffran",
    value: "saffran",
  },
  {
    title: "Korv & Pålägg",
    value: "korv-&-palagg",
  },
];

const categories = categoriesData
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((category, index) => ({
    ...category,
    id: index + 1,
  }));

export async function GET(request: Request) {
  return NextResponse.json(categories);
}
