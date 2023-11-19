// @ts-nocheck
"use client";
import React from "react";
import { useRouter } from "next/navigation";

import styles from "./products.module.css";

import { useSelector, useDispatch, selectProducts, selectTotalPrice, getProducts } from "@/lib/redux";

import ProductCard from "../components/productCard/ProductCard";

import { Card, Row, Col, Layout, Button, Divider } from "antd";
const { Footer } = Layout;

export default function ProductPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);
  const style = {
    width: "1120px",
  };
  const footerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  };

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className={styles.productsContainer}>
      <Card bodyStyle={style}>
        <Row gutter={[75, 52]}>
          {products?.map((product: object) => (
            <Col className="gutter-row" span={12} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        <Divider />
        <Footer style={footerStyle}>
          <span className={styles.total}>
            Seçilen Paket Tutarı:{" "}
            <b>
              {totalPrice}
              {products[0]?.currency}
            </b>
          </span>
          <Button type="primary" onClick={() => router.push("/basketPage")}>
            Devam Et
          </Button>
        </Footer>
      </Card>
    </div>
  );
}
