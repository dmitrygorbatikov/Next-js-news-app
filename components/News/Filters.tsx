'use client';

import { css, styled } from '@/stitches.config';
import CustomButton from '@/components/Button/Button';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Autocomplete from '@/components/Autocomplete/Autocomplete';
import { newsCategory } from '@/constants/common';
import { createQuery, formatCategories } from '@/utils';
import Button from '@/components/Button/Button';
import CustomInput from '@/components/CustomInput/CustomInput';

const Wrapper = styled('div', {
  minWidth: 250,
  maxWidth: 250,
  height: '100%',
  background: '#fff',
  position: 'fixed',
  zIndex: 89999,
});

const Container = styled('div', {
  margin: '1rem',
});

const Title = styled('p', {
  fontWeight: 'bold',
});

const RefreshContainer = styled('div', {
  marginTop: 10,
});

const FiltersHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

interface IFiltersProps {
  isMobile?: boolean;
  setOpen?: (value: boolean) => void;
  removedCategories: string[] | undefined;
}
const FiltersComponent: FC<IFiltersProps> = ({
  isMobile,
  setOpen,
  removedCategories,
}) => {
  const router = useRouter();

  const [showRefresh, setShowRefresh] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | null>(null);

  const handleSelectCategory = async (item: string | null) => {
    setCategory(item);

    const params: any = {
      ...router.query,
      category: item,
    };

    if (search.length < 3) {
      delete params.search;
    }

    if (!isMobile) {
      await router.push(`/news${createQuery(params)}`);
    }
  };

  const searchHandler = async () => {
    const params: any = {
      ...router.query,
      search,
      category,
    };

    if (search.length < 3) {
      delete params.search;
    }

    await router.push(`/news${createQuery(params)}`);

    setOpen && setOpen(false);
  };

  const onClickRefresh = async () => {
    const params = router.query;
    delete params.removeArticles;
    delete params.removedCategories;
    await router.push(`/news${createQuery(params)}`);
    setOpen && setOpen(false);
  };

  useEffect(() => {
    if (router.query.removeArticles || router.query.removedCategories) {
      setShowRefresh(true);
    } else {
      setShowRefresh(false);
    }
  }, [router.query.removeArticles, router.query.removedCategories]);

  useEffect(() => {
    if (router.query.search) {
      setSearch(router.query.search.toString());
    }
    if (router.query.category) {
      setCategory(router.query.category.toString());
    }
  }, []);

  return (
    <Container>
      <FiltersHeader>
        <Title>Filters</Title>
        {isMobile && (
          <Button
            icon={'/assets/images/filter-filled.svg'}
            onClick={searchHandler}
            label={'Apply'}
          />
        )}
      </FiltersHeader>
      <CustomInput
        label={'Search'}
        onKeyPress={async (e) => {
          if (e.key === 'Enter') {
            await searchHandler();
            setOpen && setOpen(false);
          }
        }}
        value={search}
        onChange={setSearch}
      />

      <Autocomplete
        initValue={category}
        label={'Category'}
        options={formatCategories(removedCategories)}
        onSelect={handleSelectCategory}
      />

      {showRefresh && (
        <RefreshContainer>
          <CustomButton
            onClick={onClickRefresh}
            label={'Refresh'}
            icon={'/assets/images/arrow-repeat.svg'}
          />
        </RefreshContainer>
      )}
    </Container>
  );
};

export const Filters: FC<IFiltersProps> = ({
  isMobile,
  setOpen,
  removedCategories,
}) => {
  return (
    <Wrapper>
      <FiltersComponent
        isMobile={isMobile}
        setOpen={setOpen}
        removedCategories={removedCategories}
      />
    </Wrapper>
  );
};
