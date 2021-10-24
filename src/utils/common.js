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

export const parseJSON = (json) => {
  try {
    const data = JSON.parse(json);
    return data;
  } catch (error) {
    return {};
  }
}

export const isAbsoluteUrl = (url) => {
  return /^https?:\/\//.test(url);
};

export const getAbsoluteUrl = (endpoint, root) => {
  if (isAbsoluteUrl(endpoint)) {
    return endpoint;
  }
  return `${root}/${endpoint}`;
};

export const getHostname = (url) => {
  if (isAbsoluteUrl(url)) {
    url = _.split(url, '//')[1];
  }
  url = _.split(url, '/')[0];
  url = _.split(url, ':')[0];
  return url || '';
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

export const convertMySqlConcatenationToArray = (concatenation) => {
  if (_.isNil(concatenation)) {
    return [];
  }
  return _.reject(
    _.split(concatenation, ','),
    value => !value
  );
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

export function mergePagination(oldItems, newItems, options = {}) {
  const { skip, forcedToMerge } = options;
  if (!skip && !forcedToMerge) {
    return newItems;
  }
  return _.uniq(_.concat(oldItems, newItems).filter(item => item));
}

export function isOldAppVersion(targetAppVersion) {
  if (!targetAppVersion) {
    return false;
  }
  const currentAppVersion = Constants.nativeAppVersion;
  const currentDigits = _.split(currentAppVersion, '.');
  const targetDigits = _.split(targetAppVersion, '.');
  for (const index of [0, 1, 2]) {
    if (currentDigits[index] < targetDigits[index]) {
      return true;
    } else if (currentDigits[index] > targetDigits[index]) {
      return false;
    }
  }
  return false;
}

export const getItemType = (item) => {
  const { job_id, course_id, type } = item || {};
  if (job_id) {
    return ITEM_TYPES.JOB;
  }
  if (course_id) {
    return ITEM_TYPES.COURSE;
  }
  return ITEM_TYPES[type];
}

export const getItemId = (item) => {
  const { job_id, course_id, id, _id } = item || {};
  return job_id || course_id || id || _id;
}

export function getCompositeId(item) {
  const itemId = getItemId(item);
  const itemType = getItemType(item);
  if (fp.isNil(itemId) || fp.isNil(itemType)) {
    return;
  }
  return `${itemType}_${itemId}`;
}

export const getSkipByCompositeIds = (ids, options) => {
  const { skipType = SKIP_TYPES.IDS } = options || {};
  switch (skipType) {
    case SKIP_TYPES.OFFSET:
      return _.size(ids);
    case SKIP_TYPES.IDS:
      return fp.compose(
        String,
        fp.reject(fp.isNil),
        fp.map(id => fp.split('_')(id)[1])
      )(ids);
  }
}

export const formatAMPM = (date) => {
    return moment(date).fromNow();
}