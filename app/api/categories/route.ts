import { NextResponse } from "next/server";

const categoriesData = [
  {
    title: "Sylt & Marmelad",
    value: "sylt-&-marmelad",
    imgUrl: "assets/jam.svg",
  },
  {
    title: "Te & Nabat",
    value: "te-&-nabat",
    imgUrl: "assets/jam.svg",
  },
  {
    title: "Nötter & Torkad Frukt",
    value: "notter-&-torkad-frukt",
    imgUrl: "assets/jam.svg",
  },
  {
    title: "Oliver & Inlagda grönsaker",
    value: "oliver-&-inlagda-gronsaker",
    imgUrl: "assets/jam.svg",
  },
  {
    title: "Torkade örter & baljväxter",
    value: "torkade-orter-&-baljvaxter",
    imgUrl: "assets/jam.svg",
  },
  {
    title: "Ris & Reshte",
    value: "ris-&-reshte",
    imgUrl: "assets/jam.svg",
  },
  {
    title: "Dryck & Smaksättare",
    value: "dryck-&-smaksattare",
    imgUrl: "assets/jam.svg",
  },
  {
    title: "Färdiga rätter på burk",
    value: "fardiga-ratter-pa-burk",
    imgUrl: "assets/jam.svg",
  },
  {
    title: "Saffran",
    value: "saffran",
    imgUrl: "assets/jam.svg",
  },
  {
    title: "Korv & Pålägg",
    value: "korv-&-palagg",
    imgUrl: "assets/jam.svg",
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
