import React, {useRef} from 'react';
import DropdownAlert from 'react-native-dropdownalert';

const ToastContext = React.createContext();

export const ToastProvider = ({children}) => {
  const toastRef = useRef();
  const showAlert = (title = 'Scare Me', message) => {
    toastRef?.current.alertWithType('warn', title, message);
  };
  const showSuccess = (message, title = 'Scare Me') => {
    toastRef?.current.alertWithType('success', title, message);
  };
  const showError = (message, title = 'Scare Me') => {
    toastRef?.current.alertWithType('error', title, message);
  };

  const value = React.useMemo(() => ({showAlert, showSuccess, showError}), [toastRef]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <DropdownAlert ref={toastRef} />
    </ToastContext.Provider>
  );
};

export const useToastAlert = () => React.useContext(ToastContext);
