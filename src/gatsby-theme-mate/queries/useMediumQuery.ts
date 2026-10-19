import { MediumAuthor, MediumPost } from 'gatsby-theme-mate/src/types';

type Response = {
  posts: MediumPost[];
  author: MediumAuthor | null;
};

export const useMediumQuery = (): Response => ({ posts: [], author: null });
