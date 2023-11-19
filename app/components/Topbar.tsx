"use client";

/* Core */
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "../styles/layout.module.css";

import UserBadge from "./userBadge/UserBadge";

export const Topbar = () => {
  const pathname = useRouter();

  const handleClick = () => {
    pathname.push("/");
  };

  return (
    <nav className={styles.topbar}>
      <Image src="/Frame.svg" alt="Company Logo" width={218} height={25} onClick={handleClick} />
      <UserBadge />
    </nav>
  );
};
