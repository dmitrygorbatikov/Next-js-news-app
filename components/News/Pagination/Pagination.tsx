'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { createQuery } from '@/utils';
import MobileFilters from '@/components/News/MobileFilters/MobileFilters';
import DialogComponent from '@/components/Dialog/DialogComponent';
import {
  PaginationContainer,
  PageButton,
  PageCount,
  PageInput,
  CurrentPage,
  TotalResults,
} from '@/components/News/Pagination/styles';

interface PaginationProps {
  totalResults: number;
  page: number;
  perPage: number;
  removedCategories: string[] | undefined;
}

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
