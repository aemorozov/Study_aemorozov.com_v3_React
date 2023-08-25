import { Link } from "react-router-dom";
import HeadMeta from "../../components/HeadMeta/HeadMeta";
import toTop from "../../functions/toTop/toTop";

function Blog(props) {
  toTop();
  return (
    <div>
      <HeadMeta page={props.page} />
      <h1 className="h1 alignCenter">{props.page.name}</h1>
      <p className="alignCenter">Content is in developing</p>
      <Link to="/blog/post1">
        <p className="alignCenter h1" style={{ color: "red" }}>
          Post 1
        </p>
      </Link>
    </div>
  );
}

export default Blog;
