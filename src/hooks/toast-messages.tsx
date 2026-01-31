import { toast } from "react-hot-toast";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";

export type ToastType = 'success' | 'error' | 'loading' | 'custom';

export interface ToastOptions {
    type?: ToastType;
    duration?: number;
    position?: 'bottom-right';
  }

  export function useToastMessages() {
    const t = useTranslations("Common");

    const showToast = (message: string, options: ToastOptions = {}) => {
      const { type = 'custom' } = options;
  
  
      switch (type) {
        case 'success':
          return toast.success(message);
          
        case 'error':
          return toast((toastId) => (
            <span className="text-red-500 flex items-center gap-2">
              {message}
              <button 
                className="text-red-500 hover:text-red-600" 
                onClick={() => toast.dismiss(toastId.id)}
              >
                <X className="w-4 h-4" />
                {t("close")}
              </button>
            </span>
          ));
          
        case 'loading':
          return toast.loading(message);
          
        default:
          return toast((toastId) => (
            <span className="flex items-center gap-2">
              {message}
              <button 
                className="text-gray-500 hover:text-gray-600" 
                onClick={() => toast.dismiss(toastId.id)}
              >
                <X className="w-4 h-4" />
                {t("close")}
              </button>
            </span>
          ));
      }
    };
  
    // Dinamik mesaj oluşturucular
    const createSuccessMessage = (action: string, entity?: string) => {
      if (entity) {
        return `${t(entity)} ${action} ${t('success').toLowerCase()}`;
      }
      return `${action} ${t('success').toLowerCase()}`;
    };
  
    const createErrorMessage = (action: string) => {
      return `${action} ${t('error').toLowerCase()}`;
    };
  
    // Hazır fonksiyonlar
    const showSuccess = (message: string, duration?: number) => 
      showToast(message, { type: 'success', duration });
      
    const showError = (message: string, duration?: number) => 
      showToast(message, { type: 'error', duration });
      
    const showLoading = (message: string) => 
      showToast(message, { type: 'loading' });
  
    // Login için özel fonksiyonlar
    const loginSuccess = (userType: 'user' | 'hotel' | 'admin' | 'support') => {
      const message = createSuccessMessage(t('login'), userType);
      showSuccess(message);
    };
  
    const loginError = () => {
      showError(t('invalidCredentials'));
    };
  
    // Register için özel fonksiyonlar  
    const registerSuccess = () => {
      const message = createSuccessMessage(t('register'));
      showSuccess(message);
    };
  
    const registerError = () => {
      const message = createErrorMessage(t('register'));
      showError(message);
    };
    return {
        showToast,
        showSuccess,
        showError,
        showLoading,
        loginSuccess,
        loginError,
        registerSuccess,
        registerError
    }
  }