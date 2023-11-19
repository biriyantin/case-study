// @ts-nocheck

"use client";
import React, { useState, useEffect } from "react";

import styles from "./basket.module.css";

import { useSelector, useDispatch, selectContent, getContent, basketSlice } from "@/lib/redux";

import { Card, Typography } from "antd";

const { Title } = Typography;

export default function Payment() {
  const content: string = useSelector(selectContent);
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const decodeHtml = (content) => {
    let decodedText = decodeURIComponent(content);
    decodedText = decodedText.replace(/(<([^>]+)>)/gi, "");
    return decodedText;
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContent());
  }, []);

  const handleCardHolderChange = (e) => {
    const formattedCardHolder = e.target.value.toUpperCase();
    setCardHolder(formattedCardHolder);
    dispatch(basketSlice.actions.setCardHolder(formattedCardHolder));
  };

  const handleCardNumberChange = (e) => {
    const formattedCardNumber = e.target.value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardNumber(formattedCardNumber);
    dispatch(basketSlice.actions.setCardNumber(formattedCardNumber));
  };

  const handleExpiryDateChange = (e) => {
    const inputDate = e.target.value.replace(/\D/g, "");
    if (inputDate.length <= 4) {
      const formattedExpiryDate = inputDate.replace(/(\d{2})(\d{0,2})/, "$1/$2").trim();
      setExpiryDate(formattedExpiryDate);
      dispatch(basketSlice.actions.setExpiryDate(formattedExpiryDate));
    }
  };

  const handleCvcChange = (e) => {
    const formattedCvc = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvc(formattedCvc);
    dispatch(basketSlice.actions.setCvc(formattedCvc));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { cardHolder, cardNumber, expiryDate, cvc });
  };

  const left = {
    width: "726px",
  };

  const innerStyle = {
    width: "auto",
    height: "195px",
  };

  return (
    <Card bodyStyle={left}>
      <Title level={3}>Kart Bilgileri</Title>
      <Card bodyStyle={innerStyle}>
        <form onSubmit={handleSubmit}>
          <div className={styles.cardInfoTop}>
            <span className={styles.label}>Kart Üzerindeki İsim Soyisim</span>
            <input className={styles.input} type="text" id="cardHolder" value={cardHolder} onChange={handleCardHolderChange} required />
          </div>
          <div className={styles.cardInfoBottom}>
            <section className={styles.numberWrapper}>
              <span className={styles.label}>Kart Numarası</span>
              <input
                className={styles.input}
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength="19"
                pattern="\d*"
                placeholder="XXXX XXXX XXXX XXXX"
                required
              />
            </section>
            <section className={styles.dateWrapper}>
              <span className={styles.label}>Son Kul. Tar.</span>
              <input
                className={styles.input}
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                maxLength="5"
                pattern="\d*"
                placeholder="MM/YY"
                required
              />
            </section>
            <section className={styles.cvcWrapper}>
              <span className={styles.label}>CVV/CVC</span>
              <input className={styles.input} type="password" id="cvc" value={cvc} onChange={handleCvcChange} maxLength="3" pattern="\d*" required />
            </section>
          </div>
        </form>
      </Card>
      <div className={styles.detailHeader}>
        <span className={styles.left}>Sözleşme</span>
      </div>
      <Card>{decodeHtml(content)}</Card>
    </Card>
  );
}
