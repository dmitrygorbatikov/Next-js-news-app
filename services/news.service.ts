import axios from 'axios';
import { createQuery } from '@/utils';
import { IArticle } from '@/types';

class NewsService {
  private baseUrl = process.env.API_BASE_URL || 'http://localhost:4001';
  async getNews(query: any) {
    const params: any = {
      page: '0',
    };
    if (query.search) {
      params.search = query.search;
    }
    if (query.page && !isNaN(query.page)) {
      params.page = Number(query.page);
    }
    if (query.country) {
      params.country = query.country;
    }
    if (query.category) {
      params.category = query.category;
    }

    if (query.removeArticles) {
      params.removeArticles = query.removeArticles;
    }

    if (query.removedCategories) {
      params.removedCategories = query.removedCategories;
    }
    const response = await axios.get(
      `${this.baseUrl}/news${createQuery(params)}`,
    );
    if (!response.data) {
      return {
        notFound: true,
      };
    }
    const data = response.data;

    if (query.removeArticles) {
      const removeArticles = query.removeArticles.split(',');
      data.articles = data.articles.filter(
        (item: IArticle) => !removeArticles.includes(item._id),
      );
    }

    const props = {
      data,
      page: Number(params.page),
      perPage: 100,
      removedCategories: undefined,
    };

    if (query.removedCategories) {
      props.removedCategories = query.removedCategories.split(',');
    }
    return { props };
  }
}

export default new NewsService();
