import HeadMeta from "../../components/HeadMeta/HeadMeta";
import toTop from "../../functions/toTop/toTop";
import { ContentBlockLeftImg } from "../../components/ContentBlock/ContentBlock";

function Development(props) {
  toTop();
  return (
    <div>
      <HeadMeta page={props.page} />

      {props.devPosts
        .slice(0)
        .reverse()
        .map((item) => {
          return <ContentBlockLeftImg data={item} key={item.title} />;
        })}
    </div>
  );
}

export default Development;
