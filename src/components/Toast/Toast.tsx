import { useEffect, useState } from "react";
import "./Toast.css";

export enum ToastType {
  Error = "toastError",
  Success = "toastSuccess",
}

interface ToastProps {
  message: string;
  type: ToastType;
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
  }, [message]);

  if (!isDisplayed) {
    return null;
  }

  return <div className={`toast ${type}`}>{message}</div>;
};
