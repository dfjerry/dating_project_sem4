import _ from 'lodash';
import fp from 'lodash/fp';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { ITEM_TYPES, SKIP_TYPES } from './constans';
import moment from "moment";

const SMOOTHY_DELAY = Platform.OS === 'android' ? 100 : 0;

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const OSVersion = parseFloat(Platform.Version);

export const isPromise = (value) => {
  return value instanceof Promise;
}

export const delay = (period) => new Promise((resolve, reject) => {
  setTimeout(resolve, period);
});

export const execute = (object, path, ...args) => {
  if (typeof object === 'function' && !path) {
    return object(...args);
  }
  if (typeof _.get(object, path) !== 'function') {
    return;
  }
  return _.invoke(object, path, ...args);
}

export const executeLater = (func, period = SMOOTHY_DELAY) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(func());
      } catch (error) {
        resolve(null);
      }
    }, period);
  })
}




export const formatPhone = (phone) => {
  if (!phone || typeof phone !== 'string') {
    return phone;
  }
  let formatedPhone = phone;
  if (formatedPhone.indexOf('+84') === 0) {
    formatedPhone = formatedPhone.replace('+84', '');
  }
  return '0' + Number(formatedPhone);
};

export const convertArrayToMySqlConcatenation = (value) => {
  if (!Array.isArray(value)) {
    return;
  }
  return fp.compose(
    _.toString,
    _.uniq,
    _.reject(item => !item),
  )(value);
};

export const trimAll = (data) => {
  if (typeof data === 'string') {
    return _.trim(data);
  }
  if (!data || typeof data !== 'object') {
    return data;
  }
  return _.entries(data).reduce((newData, [key, value]) => {
    return {
      ...newData,
      [key]: trimAll(value),
    };
  }, {});
};

export const removeVietnameseTones = (str) => {
  if (!str) {
    return '';
  }
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

export const filterResourcesByText = (resources, key) => {
  resources = _.reject(resources, _.isEmpty);
  return text => {
    text = normalizeString(text);
    return _.filter(resources, item => {
      const field = key ? _.get(item, key) : item;
      return normalizeString(field).includes(text);
    });
  }
}

export const normalizeString = (str) => {
  return removeVietnameseTones(str).toLowerCase().trim();
}


export const getItemId = (item) => {
  const { job_id, course_id, id, _id } = item || {};
  return job_id || course_id || id || _id;
}

export const formatAMPM = (date) => {
    if (!date){
      return ""
    }
    return moment(date).fromNow();
}