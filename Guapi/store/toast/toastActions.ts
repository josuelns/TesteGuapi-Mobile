import { Action } from 'redux';
import { SHOW_TOAST } from './toastEnum';
import Toast from '../../domains/toast/ToastTypes';

export interface ShowToastAction extends Action<typeof SHOW_TOAST> {
  type: typeof SHOW_TOAST;
  payload: {
    toast: Toast;
  };
}

export const showToast = (toast: Toast): ShowToastAction => ({
  type: SHOW_TOAST,
  payload: { toast },
});

