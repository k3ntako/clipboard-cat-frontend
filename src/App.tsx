import React, { useReducer } from "react";
import { RoomPage } from "./pages/RoomPage";
import { Toast, ToastProps, ToastType } from "./components/Toast";
import * as textRequests from "./utilities/textRequests";

function App() {
  const toastReducer = (_state: ToastProps, action: ToastProps): ToastProps => {
    return {
      message: action.message,
      type: action.type,
    };
  };

  const [state, dispatch] = useReducer(toastReducer, {
    message: null,
    type: null,
  });

  const displayToast = (type: ToastType, message: string) => {
    dispatch({ type, message });
  };

  return (
    <>
      <Toast {...state} />
      <RoomPage textRequests={textRequests} displayToast={displayToast} />
    </>
  );
}

export default App;
