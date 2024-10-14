/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable default-param-last */
import Reactotron from 'reactotron-react-native';
import {Alert} from 'react-native';
import {useStoreState} from 'easy-peasy';
import {Config} from './config';

const displayLog = (message, key = 'CONSOLE') => {
  if (Config.DEBUG) {
    Reactotron.display({
      name: key,
      value: message,
      preview: message,
    });
  }
};

const writeConsole = (message, key = 'CONSOLE') => {
  if (Config.DEBUG) {
    console.log(key, message);
  }
};

const showAlert = (title, message) => {
  Alert.alert(title, message);
};

const showAlertWithButtons = (
  title,
  message,
  negativeButtonText = '',
  positiveButtonText = '',
  onAction,
  onReject
) => {
  const buttons = [
    {
      text: negativeButtonText,
      onPress: () => (onReject ? onReject() : null),
    },
    {
      text: positiveButtonText,
      onPress: () => onAction(),
    },
  ];
  Alert.alert(title, message, buttons);
};

const getFileNameFromURL = (filePath) => {
  const fileName = `${new Date().getTime()}${`.`}${filePath.split('.').pop()}`;
  return fileName;
};

const setName = (displayName) => {
  if (displayName) {
    return displayName;
  }
  return 'Unnamed';
};

const getFileNameFromURI = (filePath) => {
  const fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
  return fileName;
};

const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '');
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? '+1 ' : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return phoneNumberString;
};

const formatNumber = (num) => num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const Utils = {
  displayLog,
  getFileNameFromURL,
  getFileNameFromURI,
  showAlert,
  showAlertWithButtons,
  formatNumber,
  formatPhoneNumber,
  setName,
};
