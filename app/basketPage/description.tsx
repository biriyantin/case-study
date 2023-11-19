// @ts-nocheck

"use client";
import React from "react";

import styles from "./basket.module.css";

import { useSelector, selectSelectedProduct } from "@/lib/redux";

import { Card, Typography, Tag } from "antd";

const { Title } = Typography;

export default function Description() {
  const selectedProduct: object = useSelector(selectSelectedProduct);

  const left = {
    width: "726px",
  };

  const innerStyle = {
    width: "auto",
    height: "195px",
    padding: "0px",
  };

  return (
    <Card bodyStyle={left}>
      <Title level={5}>
        Paket Detay | {selectedProduct?.amount}
        {selectedProduct?.currency}{" "}
      </Title>
      <Card bodyStyle={innerStyle}>
        <img className={styles.image} src={selectedProduct?.imagePath || "https://picsum.photos/658/195"} alt="image" />
      </Card>
      <div className={styles.detailHeader}>
        <p className={styles.left}>Detay Açıklama</p>
        <section className={styles.right}>
          {selectedProduct?.tags.map((tag: string) => (
            <Tag>{tag}</Tag>
          ))}
        </section>
      </div>
      <Card>
        <p className={styles.decs}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu ultricies, hendrerit turpis ac, semper justo. Nam orci odio, semper
          id mauris nec, ornare luctus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu justo
          sapien. Nullam turpis magna, laoreet at finibus sit amet, ultrices et dolor. Suspendisse vestibulum gravida quam, nec interdum justo
          pulvinar nec. Aenean quam mauris, fermentum eu iaculis non, egestas a lorem.
        </p>
        <br />
        <p className={styles.decs}>
          Sed ante justo, pulvinar dapibus enim id, euismod feugiat arcu. Mauris dictum sed tortor ut placerat. Sed leo ante, laoreet at egestas ut,
          dapibus et turpis. Duis non enim sed ante aliquet maximus eu et dui. Sed consequat iaculis libero, id pharetra purus blandit vitae. Etiam ut
          lobortis tortor, sed efficitur tortor. Duis facilisis quam sem, quis pulvinar erat aliquet sit amet. Aliquam velit orci, pellentesque eget
          varius finibus, sodales quis dolor.
        </p>
      </Card>
    </Card>
  );
}
