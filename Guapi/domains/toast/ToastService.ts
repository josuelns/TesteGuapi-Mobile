import ToastRepository from './ToastRepository'; // Certifique-se de que o caminho está correto
import Toast from './ToastTypes';

class ToastService {
    constructor(private toastRepository: ToastRepository) { }
    
    showToast(toast: Toast) {
        this.toastRepository.callToast(toast);
    }
}

export default new ToastService(new ToastRepository());