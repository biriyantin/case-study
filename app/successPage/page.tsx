"use client";
import React from "react";
import Image from "next/image";

import styles from "./success.module.css";

import { Card } from "antd";

export default function ProductPage() {
  const style = {
    width: "505px",
    height: "307px",
    display: "flex",
    flexDirection: "column" as const, // Specify the valid value for flexDirection
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className={styles.container}>
      <Card bodyStyle={style}>
        <Image src="/Check.svg" alt="Company Logo" width={120} height={120} />
        <p className={styles.text}>Başarıyla Tamamlandı!</p>
      </Card>
    </div>
  );
}
