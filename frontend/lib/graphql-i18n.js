const LANG = 'es';
const FALLBACK_LANG = 'en';

function I18nKey(key) {
  return `${key}_${LANG}`;
}

function FallbackI18nKey(key) {
  return `${key}_${FALLBACK_LANG}`;
}

export function I18nKeys(key) {
  if (LANG === FALLBACK_LANG) {
    return I18nKey(key);
  }

  return `${I18nKey(key)},${FallbackI18nKey(key)}`;
}

export const getI18nValue = (pathArray) => (data) => {
  return pathArray.reduce((currentValue, curKey) => {
    if (!currentValue) {
      return undefined;
    }

    if (I18nKey(curKey) in currentValue) {
      return currentValue[I18nKey(curKey)];
    }

    if (FallbackI18nKey(curKey) in currentValue) {
      return currentValue[FallbackI18nKey(curKey)];
    }

    if (curKey in currentValue) {
      return currentValue[curKey];
    }

    return undefined;
  }, data);
};
