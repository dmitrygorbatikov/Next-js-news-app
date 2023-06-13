import { newsCategory } from '@/constants/common';

export const createQuery = (data: any) => {
  let result = '';
  if (!data || !Object.keys(data).length) {
    return '';
  } else {
    Object.keys(data).map((key) => {
      if (result === '' && !!data[key] && data[key] !== '') {
        result += `?${key}=${data[key]}`;
      } else if (result !== '' && !!data[key] && data[key] !== '') {
        result += `&${key}=${data[key]}`;
      }
    });
  }

  return result;
};

export const formatCategories = (removedCategories: string[] | undefined) => {
  if (removedCategories === undefined) {
    return newsCategory;
  }
  return newsCategory.filter(
    (item) => item.value === null || !removedCategories.includes(item.value),
  );
};
