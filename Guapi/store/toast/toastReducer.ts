import ToastService from "../../domains/toast/ToastService";
import { ShowToastAction } from "./toastActions";
import { SHOW_TOAST } from "./toastEnum";

const initialState = {};

const toastReducer = (state = initialState, action: ShowToastAction) => {
  switch (action.type) {
    case SHOW_TOAST:
      const { toast } = action.payload;
      return toast;
    default:
      return state;
  }
};

export default toastReducer;