import { Typography } from '@mui/material';
import { AuthorSection, IBlogPost, InteractionSection } from './BlogPost';
import styles from '@/style/Blog/BlogPostDetails.module.scss';
import { FC } from 'react';

const BlogPostDetails: FC<IBlogPost> = ({
  title,
  author,
  date,
  readingTime,
  likes,
  comments,
  content,
}) => {
  return (
    <div className={styles.StyledContainer} style={{ height: "100%" }}>
      <div className={styles.Header}>
        <Typography variant="h2" className="title">{title}</Typography>
        <div className={styles.metaSection}>
          <AuthorSection author={author} />
          <div className={styles.MetaData}>
            <Typography variant="body2" className={styles.dateTime}>
              {date} · {readingTime} read
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.ContentSection}>
        <Typography variant="body1" className="content">{content}</Typography>
      </div>

      <InteractionSection
        likes={likes}
        commentsCount={comments.length}
      />
    </div>
  );
};

export default BlogPostDetails;
