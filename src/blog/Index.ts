import { ensure } from '../types/blog';
import { Post } from './Post';
import HowIWouldLearnToCodeIfICouldStartOver from './posts/HowIWouldLearnToCodeIfICouldStartOver';

const ensurePosts = ensure<readonly Post[] | Post[]>();

export const posts = ensurePosts([
  new HowIWouldLearnToCodeIfICouldStartOver()
]);
