import { useState } from 'react';
import { IArticle } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { createQuery } from '@/utils';
import {
  CardContainer,
  CardContent,
  CardActionArea,
  CardLink,
  CardImage,
  ImageContainer,
  CardTitle,
  RemoveButton,
} from '@/components/News/ArticleItem/styles';

interface ArticleCardProps {
  article: IArticle;
}

const formatString = (text: string, length: number) => {
  return text && text.length && text.length > length
    ? text.substring(0, length) + '...'
    : text;
};

const ArticleItem = ({ article }: ArticleCardProps) => {
  const { query, push } = useRouter();
  const [showDelete, setShowDelete] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleClick = () => {
    window.open(article.link, '_blank');
  };

  const handleRemoveClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const params = {
      ...query,
      removeArticles: query.removeArticles
        ? [query.removeArticles, article._id.toString()].join(',')
        : article._id.toString(),
    };

    await push(`/news${createQuery(params)}`);
  };

  return (
    <CardContainer
      onMouseMove={() => setShowDelete(true)}
      onMouseOut={() => setShowDelete(false)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={isPressed ? 'active' : ''}
    >
      {showDelete && (
        <RemoveButton onClick={handleRemoveClick}>
          <Image
            width={16}
            height={16}
            src={'/assets/images/trash-fill.svg'}
            alt={`remove-button-${article._id}`}
          />
        </RemoveButton>
      )}
      <CardActionArea onClick={handleClick}>
        {article.media && (
          <ImageContainer>
            <CardImage
              src={article.media}
              alt={article.title}
              placeholder="blur"
            />
          </ImageContainer>
        )}
        <CardTitle>{formatString(article.title, 80)}</CardTitle>
        <CardContent>{formatString(article.description, 120)}</CardContent>
      </CardActionArea>
      <CardLink href={article.link} target="_blank" rel="noopener noreferrer">
        Read More
      </CardLink>
    </CardContainer>
  );
};

export default ArticleItem;
