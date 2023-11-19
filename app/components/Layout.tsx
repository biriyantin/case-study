"use client";
import React from "react";
import { usePathname } from "next/navigation";

import { Topbar } from "./Topbar";

/* Instruments */
import styles from "../styles/layout.module.css";
import "../styles/globals.css";

export default function Layout(props: React.PropsWithChildren<{}>) {
  const pathname = usePathname();
  return (
    <section className={styles.container}>
      {pathname !== "/" && <Topbar />}
      <main className={styles.main}>{props.children}</main>
    </section>
  );
}
