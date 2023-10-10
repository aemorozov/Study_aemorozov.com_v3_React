import HeadMeta from "../../components/HeadMeta/HeadMeta";
import PreContentItems from "../../components/PreContentItems/PreContentItems";
import toTop from "../../functions/toTop/toTop";

function Development(props) {
  toTop();
  return (
    <div>
      <HeadMeta page={props.page} />
      <h1 className="h1 alignCenter">{props.page.name}</h1>
      <h2 className="alignCenter" style={{ marginTop: 50 + "px", marginBottom: 0 }}>
        Useful apps
      </h2>
      <PreContentItems forDevPage={props.forDevPage} />
    </div>
  );
}

export default Development;
