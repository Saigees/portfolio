import { posts } from "../blog/Index";
import "../styles/components/recentPosts.css";

interface Props {
  maxAmount?: number;
}

export default function RecentPosts({ maxAmount }: Props) {
  let recentPosts = posts.sort((a, b) => b.date - a.date);
  if (maxAmount) {
    recentPosts = recentPosts.slice(0, maxAmount);
    }
    

  return (
      <div className="posts">
      <h1>{maxAmount ? `Recent `: ""}Blog Posts</h1>
      <div className="list">
        {recentPosts.map((p) => {
          return (
            <a
              className="no-turn"
              href={`/blog/${p.slug.toLowerCase().split(" ").join("-")}`}
            >
              {p.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
