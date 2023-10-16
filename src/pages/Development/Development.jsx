import HeadMeta from "../../components/HeadMeta/HeadMeta";
import PreContentItems from "../../components/PreContentItems/PreContentItems";
import toTop from "../../functions/toTop/toTop";
import { ContentBlockLeftImg } from "../../components/ContentBlock/ContentBlock";
import { CV } from "./CV/CV";

function Development(props) {
  toTop();
  return (
    <div>
      <HeadMeta page={props.page} />

      <h2 className="alignCenter" style={{ marginTop: 50 + "px", marginBottom: 30 + "px" }}>
        Posts:
      </h2>
      {props.devPosts.map((item) => {
        return <ContentBlockLeftImg data={item} key={item.title} />;
      })}

      <CV />
      <h2 className="alignCenter" style={{ marginTop: 50 + "px", marginBottom: 0 }}>
        Fast download links:
      </h2>
      <PreContentItems forDevPage={props.forDevPage} />
    </div>
  );
}

export default Development;
