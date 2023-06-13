import { useState } from 'react';
import { styled } from '@/stitches.config';
import { IArticle } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { createQuery } from '@/utils';

interface ArticleCardProps {
  article: IArticle;
}

const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '450px',
  padding: '1rem',
  borderRadius: '4px',
  backgroundColor: '#fff',
  height: 450,
  transition: 'transform 0.2s',
  position: 'relative',
  '&:active': {
    transform: 'scale(0.95)',
  },
  '@media (max-width: 770px)': {
    height: 'auto',
    paddingBottom: 10,
    maxWidth: '100%',
  },
});

const CardActionArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  cursor: 'pointer',
});

const CardTitle = styled('h3', {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  '@media (max-width: 770px)': {
    paddingBottom: 10,
    maxWidth: '100%',
    fontSize: '1rem',
  },
});

const CardContent = styled('p', {
  fontSize: '1rem',
  marginBottom: '1rem',
  textOverflow: 'ellipsis',
  '@media (max-width: 770px)': {
    fontSize: '0.8rem',
  },
});

const CardLink = styled('a', {
  fontSize: '0.9rem',
  color: 'blue',
  textDecoration: 'underline',
});

const CardImage = styled('img', {
  backgroundSize: '100%',
  maxHeight: '100%',
  maxWidth: '100%',
  objectFit: 'contain',
});

const ImageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 250,
});

const RemoveButton = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 30,
  background: '#ff4d4d',
  top: 10,
  right: 10,
  borderRadius: 5,
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
});

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
