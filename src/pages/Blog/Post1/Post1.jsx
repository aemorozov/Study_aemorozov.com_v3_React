import toTop from "../../../functions/toTop/toTop";

function Post1(props) {
  toTop();
  return (
    <div>
      {/* <HeadMeta page={props.page} /> */}
      {/* <h1 className="h1 alignCenter">{props.page.name}</h1> */}
      {/* <p className="alignCenter">Content is in developing</p> */}
      <h1 className="h1 alignCenter">Post 1</h1>
    </div>
  );
}

export default Post1;
