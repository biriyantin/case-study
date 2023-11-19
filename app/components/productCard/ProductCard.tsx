"use client";

import React from "react";

import { productsSlice, useSelector, useDispatch, selectSelectedProducts } from "@/lib/redux";

import styles from "./productCard.module.css";

import { Badge, Tag, Divider } from "antd";

type Product = {
  id: number;
  name: string;
  amount: number;
  imagePath: string;
  currency: string;
  details: string[];
  tags: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const selectedProducts: object[] = useSelector(selectSelectedProducts);
  const isSelected = selectedProducts.includes(product);

  const hanleClick = () => {
    if (isSelected) {
      dispatch(productsSlice.actions.changeSelectedProducts(selectedProducts.filter((selectedProduct: object) => selectedProduct !== product)));
      dispatch(productsSlice.actions.descToTotalPrice(product.amount));
    } else {
      dispatch(productsSlice.actions.changeSelectedProducts([...selectedProducts, product]));
      dispatch(productsSlice.actions.addToTotalPrice(product.amount));
    }
  };
  return (
    <div className={`${styles.productCard} ${isSelected ? styles.selected : ""}`} onClick={hanleClick}>
      <span className={styles.imageWrapper}>
        <img className={styles.image} src={product.imagePath || "https://picsum.photos/200/300"} alt="image" />
      </span>
      <section className={styles.aside}>
        <header className={styles.top}>
          <span>{product.name}</span>
          <span>
            {product.amount}
            {product.currency}
          </span>
        </header>
        <section className={styles.center}>
          {product.details.map((detail: string) => (
            <Badge status="default" text={detail} />
          ))}
        </section>
        <Divider className={styles.divider} />
        <footer className={styles.bottom}>
          {product.tags.map((tag: string) => (
            <Tag>{tag}</Tag>
          ))}
        </footer>
      </section>
    </div>
  );
}
