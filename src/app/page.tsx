"use client";

import userApi from "@/apis/userApi";
import { Hero } from "@/components/Hero";
import ProductReel from "@/components/ProductReel";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { useUser } from "@/store/useUser";
import { useEffect } from "react";

const data: Product[] = [
  {
    id: "id1",
    name: "Product 1",
    description: "desciption",
    imageUrls: ["", "", "", ""],
    quantity: 10,
    sku: "PR1",
    category: {
      id: "id1",
      name: "Category 1",
      imageUrl: "",
    },
    brand: {
      id: "id1",
      name: "Brand 1",
      imageUrl: "",
    },
    price: 100,
  },
  {
    id: "id1",
    name: "Product 1",
    description: "desciption",
    imageUrls: ["", "", "", ""],
    quantity: 10,
    sku: "PR1",
    category: {
      id: "id1",
      name: "Category 1",
      imageUrl: "",
    },
    brand: {
      id: "id1",
      name: "Brand 1",
      imageUrl: "",
    },
    price: 100,
  },
  {
    id: "id1",
    name: "Product 1",
    description: "desciption",
    imageUrls: ["", "", "", ""],
    quantity: 10,
    sku: "PR1",
    category: {
      id: "id1",
      name: "Category 1",
      imageUrl: "",
    },
    brand: {
      id: "id1",
      name: "Brand 1",
      imageUrl: "",
    },
    price: 100,
  },
];

const heroData: string[] = ["", "", ""];

export default function Home() {
  const { getCurrentUser } = useUser();

  useEffect(() => {
    getCurrentUser;
  }, []);

  return (
    <>
      <MaxWidthWrapper>
        <Hero urls={heroData} />
        <ProductReel
          title="Featured Products"
          href="/collections/featured"
          products={data}
        />
      </MaxWidthWrapper>
    </>
  );
}
