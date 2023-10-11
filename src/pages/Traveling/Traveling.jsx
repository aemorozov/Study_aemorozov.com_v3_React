import HeadMeta from "../../components/HeadMeta/HeadMeta";
import toTop from "../../functions/toTop/toTop";

function Traveling(props) {
  toTop();
  return (
    <div>
      <HeadMeta page={props.page} />
      <p className="alignCenter">Content is in developing</p>
    </div>
  );
}

export default Traveling;
