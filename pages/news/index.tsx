import { Filters } from '@/components/News/Filters/Filters';
import ArticleItem from '@/components/News/ArticleItem/ArticleItem';
import Pagination from '@/components/News/Pagination/Pagination';
import { INewsResponse } from '@/types';
import Head from 'next/head';
import NewsService from '@/services/news.service';
import {
  Wrapper,
  ArticlesWrapper,
  FiltersContainer,
  Container,
  NoDataFound,
  Item,
} from '@/pages/news/styles';

export const getServerSideProps = (context: any) =>
  NewsService.getNews(context.query);

interface INewsProps {
  data: INewsResponse;
  page: number;
  perPage: number;
  removedCategories: string[] | undefined;
}

export default function News({
  data,
  page,
  perPage,
  removedCategories,
}: INewsProps) {
  const { articles, count } = data;

  return (
    <Wrapper>
      <Head>
        <title>News application | News</title>
      </Head>
      <FiltersContainer>
        <Filters removedCategories={removedCategories} />
      </FiltersContainer>
      <ArticlesWrapper>
        <Pagination
          totalResults={count}
          page={page}
          perPage={perPage}
          removedCategories={removedCategories}
        />
        <Container>
          {articles.map((article: any) => {
            return (
              <Item key={article._id}>
                <ArticleItem article={article} />
              </Item>
            );
          })}
          {articles.length === 0 && <NoDataFound>No data found</NoDataFound>}
        </Container>
      </ArticlesWrapper>
    </Wrapper>
  );
}
