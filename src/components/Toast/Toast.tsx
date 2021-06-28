import { useEffect, useState } from "react";
import "./Toast.css";

export enum ToastType {
  Error = "toastError",
  Success = "toastSuccess",
}

export interface ToastProps {
  message: string | null;
  type: ToastType | null;
  timeInMs?: number;
}

export const Toast = ({ message, type, timeInMs }: ToastProps) => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);

  const startTimer = () => {
    setTimeout(() => {
      setIsDisplayed(false);
    }, timeInMs || 5000);
  };

  useEffect(() => {
    const nowDisplayed = !!message;
    setIsDisplayed(nowDisplayed);

    if (nowDisplayed) {
      startTimer();
    }
  }, [message, startTimer]);

  if (!isDisplayed) {
    return null;
  }

  return <div className={`toast ${type}`}>{message}</div>;
};
