'use client'
import {FC, useState } from 'react';
import styles from '@/style/Blog/BlogPost.module.scss';
import { Card, Typography, Chip, IconButton, TextField, Button, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

export interface IComment {
  author: string;
  text: string;
  date: string;
}

export interface IBlogPost {
  id: number;
  title: string;
  subtitle: string;
  author: {
    name: string;
    profileImage: string;
    bio: string;
  };
  date: string;
  coverImage: string;
  content: string;
  tags: string[];
  readingTime: string;
  likes: number;
  comments: IComment[];
}

export interface BlogPostProps {
  post: IBlogPost;
}

export const AuthorSection: FC<{ author: IBlogPost['author'] }> = ({ author }) => (
  <div className={styles.AuthorSection}>
      <Typography variant="body2">{author.name}</Typography>
      <Typography variant="body2">{author.bio}</Typography>
  </div>
);

export const InteractionSection: FC<{ likes: number; commentsCount: number; onToggleComments?: () => void }> = ({ likes, commentsCount, onToggleComments }) => (
  <div className={styles.InteractionSection}>
    <div className={styles.LikeButton}>
      <IconButton color="secondary" aria-label="like post">
        <FavoriteIcon />
      </IconButton>
      <Typography variant="body2">{likes} Likes</Typography>
    </div>
    <div className={styles.CommentButton}>
      <IconButton color="primary" aria-label="comment on post" onClick={onToggleComments}>
        <CommentIcon />
      </IconButton>
      <Typography variant="body2">{commentsCount} Comments</Typography>
    </div>
  </div>
);

export const BlogPost: FC<BlogPostProps> = ({ post }) => {
  const [commentsOpen, setCommentsOpen] = useState(false);

  const toggleComments = () => {
    setCommentsOpen(!commentsOpen);
  };

  return (
    <Card className={styles.BlogContainer} sx={{backgroundColor:"transparent"}}>
      <Box className={styles.upper}>
      <img className={styles.CoverImage} src={post.coverImage} alt={post.title} />
      <Typography variant="h4" className={styles.BlogTitle}>{post.title}</Typography>
      </Box>
      <Box className={styles.lower}>
      <Typography variant="h5" gutterBottom>{post.subtitle}</Typography>
      <Typography variant="subtitle1" className={styles.BlogDate}>{post.date} · {post.readingTime} read</Typography>
      <Typography variant="body1" className={styles.BlogContent}>{post.content}</Typography>
      
      <AuthorSection author={post.author} />

      <div className={styles.TagsSection}>
        {post.tags.map((tag, index) => (
          <Chip key={index} label={tag} />
        ))}
      </div>

      <InteractionSection
        likes={post.likes}
        commentsCount={post.comments.length}
        onToggleComments={toggleComments}
      />

      {commentsOpen && (
        <div className={styles.CommentSection}>
          {post.comments.map((comment, index) => (
            <div key={index} className={styles.Comment}>
              <Typography variant="body2">
                <strong>{comment.author}</strong> · {comment.date}
              </Typography>
              <Typography variant="body1">{comment.text}</Typography>
            </div>
          ))}

          <TextField
            label="Add a comment"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary">Post Comment</Button>
        </div>
      )}
</Box>
    </Card>
  );
};
