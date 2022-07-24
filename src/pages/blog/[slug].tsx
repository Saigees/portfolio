// This isnt next.js i still use the whole [param].tsx thingy
import "../../styles/pages/blogSlug.css";
import { useParams } from "react-router-dom";
import { posts } from "../../blog/Index";
import Page404 from "../Page404";
import { formatShortDate } from "../../lib/formatShortDate";
import Dash from "../../components/Dash";

export default function BlogSlug() {
  const { slug } = useParams();
  const post = posts.find(
    (f) => f.slug.toLowerCase().split(" ").join("-") === slug?.toLowerCase()
  );

  if (!post) return <Page404 />;
  return (
    <div className="blog">
      <div className="info">
        <div className="author">
          <p>{post.author}</p>
          <p>•</p>
          <p>{formatShortDate(post.date)}</p>
        </div>
        <div className="post">
          <h1>{post.name}</h1>
          <p>{post.description}</p>
        </div>
        <Dash width={30} />
      </div>
      <div className="main">{post.render()}</div>
    </div>
  );
}
