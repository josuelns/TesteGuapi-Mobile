import ToastType from './ToastTypes'; 
import ToastMessage from 'react-native-toast-message'; 

class ToastRepository {
    constructor() {}

    callToast(toast: ToastType) {
        console.log('executando toast');
        if(!toast.type) return
 
        ToastMessage.show({
            type: toast.type,
            text1: toast.title,
            text2: toast.message,
            autoHide: true,
            visibilityTime: toast.duration ?? 4000,
            position:'top'
        })

    }   
}

export default ToastRepository;
