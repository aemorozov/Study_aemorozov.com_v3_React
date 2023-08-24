import HeadMeta from "../../components/HeadMeta/HeadMeta";
import toTop from "../../functions/toTop/toTop";

function Development(props) {
  toTop();
  return (
    <div>
      <HeadMeta page={props.page} />
      <h1 className="h1 alignCenter">{props.page.name}</h1>
      <p className="alignCenter">Content is in developing</p>
    </div>
  );
}

export default Development;
