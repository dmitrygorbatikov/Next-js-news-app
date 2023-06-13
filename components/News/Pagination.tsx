'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { styled } from '@/stitches.config';
import { createQuery } from '@/utils';
import MobileFilters from '@/components/News/MobileFilters';
import DialogComponent from '@/components/DIalog/DialogComponent';

interface PaginationProps {
  totalResults: number;
  page: number;
  perPage: number;
  removedCategories: string[] | undefined;
}

const PaginationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1rem 0',
  position: 'fixed',
  zIndex: 99999,
  backgroundColor: '#E7EBF0',
  width: 'calc(100% - 250px)',
  top: 66,
  paddingTop: 10,
  paddingBottom: 10,
  '@media (max-width: 770px)': {
    width: '100%',
  },
});

const PageButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  margin: '0 0.5rem',
  border: 'none',
  borderRadius: '50%',
  backgroundColor: '#eee',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#ddd',
  },
});

const CurrentPage = styled('span', {
  fontSize: '1rem',
  fontWeight: 'bold',
  margin: '0 0.5rem',
});

const PageCount = styled('span', {
  fontSize: '1rem',
  margin: '0 0.5rem',
  '@media (max-width: 430px)': {
    fontSize: '0.8rem',
  },
});

const TotalResults = styled('span', {
  fontSize: '1rem',
  margin: '0 0.5rem',
  '@media (max-width: 430px)': {
    fontSize: '0.8rem',
  },
});

const PageInput = styled('input', {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: 40,
  '&:focus': {
    outline: 'none',
  },
  '@media (max-width: 770px)': {
    display: 'none',
  },
});

const Pagination: React.FC<PaginationProps> = ({
  totalResults,
  page,
  perPage,
  removedCategories,
}) => {
  const { query, push } = useRouter();
  const totalPages = Math.ceil(totalResults / perPage);

  const [pageInput, setPageInput] = useState('');
  const [openFilters, setOpenFilters] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.match(/^\d+$/) || inputValue === '') {
      setPageInput(inputValue);
    }
  };
  const onClickLeftArrow = async () => {
    if (page > 0) {
      const params = {
        ...query,
        page: (page - 1).toString(),
      };
      await push(`/news${createQuery(params)}`);
    }
  };
  const onClickRightArrow = async () => {
    if (page !== totalPages) {
      const params = {
        ...query,
        page: (page + 1).toString(),
      };
      await push(`/news${createQuery(params)}`);
    }
  };

  const onEnterPage = async () => {
    const params = {
      ...query,
      page: pageInput.toString(),
    };

    await push(`/news${createQuery(params)}`);
  };

  const onClickMobileFilters = () => {
    setOpenFilters(true);
  };

  return (
    <PaginationContainer>
      <PageInput
        value={pageInput}
        onChange={handleChange}
        placeholder={'page'}
        maxLength={10}
        onKeyPress={async (e) => {
          if (e.key === 'Enter') {
            await onEnterPage();
          }
        }}
      />
      <PageButton onClick={onClickLeftArrow} disabled={page === 0}>
        <Image
          src="/assets/images/left-arrow.svg"
          alt="left-arrow"
          width={22}
          height={22}
        />
      </PageButton>
      <CurrentPage>{page + 1}</CurrentPage>
      <PageButton
        onClick={onClickRightArrow}
        disabled={page + 1 === totalPages}
      >
        <Image
          src="/assets/images/right-arrow.svg"
          alt="right-arrow"
          width={16}
          height={16}
        />
      </PageButton>
      <PageCount>
        Page {page + 1} of {totalPages}
      </PageCount>
      <TotalResults>{totalResults} Total Results</TotalResults>
      <MobileFilters onClick={onClickMobileFilters} />
      <DialogComponent
        open={openFilters}
        setOpen={setOpenFilters}
        removedCategories={removedCategories}
      />
    </PaginationContainer>
  );
};

export default Pagination;
