import HeadMeta from "../../components/HeadMeta/HeadMeta";
import PreContentItems from "../../components/PreContentItems/PreContentItems";
import toTop from "../../functions/toTop/toTop";
import { ContentBlockLeftImg } from "../../components/ContentBlock/ContentBlock";
import { CV } from "../../components/CV/CV";

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
