import React from "react";

import styles from "./styles/layout.module.css";

import Form from "./components/Form/Form";

export default function IndexPage() {
  return (
    <div className={styles.center}>
      <Form />
    </div>
  );
}
