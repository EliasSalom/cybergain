import BlogPostDetails from '@/components/Blog/BlogPostDetails';
import { blogPosts } from '@/utils/data/data';
import { Container } from '@mui/material';
import styles from '../blog.module.scss';
import { FC } from 'react';

interface BlogPostProps {
  params: {
    blogId: string;
  };
}

// Metadata for SEO
export const generateMetadata = ({ params }: BlogPostProps) => {
  const blogId = params.blogId;
  const blog = blogPosts.find(post => post.id === +blogId);

  if (!blog) return { title: "Blog Post Not Found", description: "No blog post available for the given ID" };

  return {
    title: blog.title,
    description: blog.subtitle || "Read our insightful blog post on the latest cybersecurity topics.",
    keywords: blog.tags.join(", "),
  };
};

const BlogPost: FC<BlogPostProps> = ({ params }) => {
  const { blogId } = params;
  const blog = blogPosts.find(post => post.id === +blogId);

  if (!blog) {
    return (
      <Container className={styles.styledContainer}>
        <h1>Blog Post Not Found</h1>
      </Container>
    );
  }

  return (
    <Container className={styles.styledContainer}>
      <BlogPostDetails {...blog} />
    </Container>
  );
};

export default BlogPost;
