import axios from 'axios';
import { Filters } from '@/components/News/Filters';
import ArticleItem from '@/components/News/ArticleItem';
import { styled } from '@/stitches.config';
import Pagination from '@/components/News/Pagination';
import { createQuery } from '@/utils';
import { IArticle, INewsResponse } from '@/types';
import Head from 'next/head';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  marginTop: 65,
});

const Item = styled('div', {
  width: '500px',
  margin: '0.5rem',
  '@media (max-width: 510px)': {
    width: '100%',
  },
});

const Wrapper = styled('div', {
  display: 'flex',
  width: '100%',
  position: 'relative',
});

const ArticlesWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 250,
  position: 'relative',
  '@media (max-width: 770px)': {
    marginLeft: 0,
  },
});

const FiltersContainer = styled('div', {
  display: 'block',
  '@media (max-width: 770px)': {
    display: 'none',
  },
});

const NoDataFound = styled('div', {
  background: '#fff',
  minWidth: '82vw',
  padding: 20,
  color: '#ff4d4d',
  marginLeft: 20,
});

export const getServerSideProps = async (context: any) => {
  const { query } = context;
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
    `http://localhost:4001/news${createQuery(params)}`,
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
};

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
