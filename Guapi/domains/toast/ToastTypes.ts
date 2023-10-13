interface Toast {
  title: string;
  message: string;
  duration?: number;
  type: 'success'| 'error'| 'info'
}

export default Toast;