import { Grid, Container,Box } from '@mui/material'; 
import { BlogPost } from '@/components/Blog/BlogPost';
import { blogPosts } from '@/utils/data/data';
import Link from 'next/link';
import styles from './blog.module.scss';

export const metadata = {
  title: "Our Blog | Insights on Cybersecurity",
  description: "Description: Stay informed about the latest cybersecurity trends, threats, and best practices. Read our informative blog articles, written by industry experts, covering topics such as data breaches, ransomware attacks, cloud security, and more. Gain valuable insights and tips to protect your organization from cyber threats. Our blog features articles on red team, blue team, and purple team strategies, as well as hands-on tips for cybersecurity professionals. ",
  keywords: "cybersecurity, blog, security trends",
};

const BlogPage = () => {
  return (
    <Box className={styles.styledContainer}>
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link href={`blog/${post.id}`} passHref>
              <BlogPost post={post} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogPage;
