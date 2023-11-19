// @ts-nocheck

"use client";
import React from "react";
import { useRouter } from "next/navigation";

import styles from "./basket.module.css";

import {
  useSelector,
  useDispatch,
  selectSelectedProducts,
  productsSlice,
  selectCardHolder,
  selectCardNumber,
  selectExpiryDate,
  selectCvc,
  selectTotalPrice,
  postCardInfo,
} from "@/lib/redux";

import Description from "./description";
import Payment from "./payment";

import { Typography, Button } from "antd";

const { Title } = Typography;

export default function BasketPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedProducts: object[] = useSelector(selectSelectedProducts);
  const totalPrice: number = useSelector(selectTotalPrice);
  const cardHolder: string = useSelector(selectCardHolder);
  const cardNumber: string = useSelector(selectCardNumber);
  const expiryDate: string = useSelector(selectExpiryDate);
  const cvc: string = useSelector(selectCvc);
  const selectedProductIds = selectedProducts.map((product: object) => product.id);
  const [step, setStep] = React.useState(0);

  dispatch(productsSlice.actions.changeSelectedProduct(selectedProducts[0]));

  const handleCheckout = () => {
    console.log(step);

    dispatch(
      postCardInfo({
        cardHolderName: cardHolder,
        cardNumber: cardNumber,
        expireDate: expiryDate,
        cvv: cvc,
        packageIds: selectedProductIds,
        totalAmount: totalPrice,
      })
    );
    router.push("/successPage");
  };

  return (
    <div className={styles.basketContainer}>
      {step === 0 ? <Description /> : <Payment />}
      <div className={styles.basketItems}>
        <Title level={5}>Sepetteki Paketler</Title>
        {selectedProducts.map((product: object) => (
          <div className={styles.productLine}>
            <span className={styles.productName}>{product.name}</span>
            <span className={styles.price}>
              {product?.amount}
              {product?.currency}
            </span>
          </div>
        ))}
        <Button type="primary" size="large" block onClick={step === 0 ? setStep(1) : handleCheckout}>
          Ödeme Yap
        </Button>
      </div>
    </div>
  );
}
