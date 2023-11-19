"use client";

import { useSelector, selectFullName } from "@/lib/redux";

import styles from "./userBadge.module.css";

import { Avatar } from "antd";

export default function UserBadge() {
  const fullName = useSelector(selectFullName);
  const letter = fullName.charAt(0);
  return (
    <div className={styles.userBadge}>
      <Avatar size="large">{letter}</Avatar>
      <span style={{ marginLeft: 10 }}>{fullName}</span>
    </div>
  );
}
