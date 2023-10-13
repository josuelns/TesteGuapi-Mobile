import { useEffect } from "react";
import { useSelector } from "react-redux";
import ToastService from "../domains/toast/ToastService";
const ToastProvider = () => {
    const toastData = useSelector((state: any) => state.toast);
  
    useEffect(() => {
      if (toastData) {
        ToastService.showToast(toastData);
      }
    }, [toastData]);
  

    return <></>
  };
  
  export default ToastProvider;