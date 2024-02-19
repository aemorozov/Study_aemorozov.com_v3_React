import HeadMeta from "../../components/HeadMeta/HeadMeta";
import { ContentBlockLeftImg } from "../../components/ContentBlock/ContentBlock";
import toTop from "../../functions/toTop/toTop";
import { CV } from "../../components/CV/CV";
import PreContentItems from "../../components/PreContentItems/PreContentItems";

function Index(props) {
  // console.log(props);
  toTop();
  return (
    <>
      <HeadMeta page={props.page} />
      {props.forIndexPage.map((data) => {
        return <ContentBlockLeftImg data={data} key={data.title} />;
      })}
      <CV />
      <PreContentItems forDevPage={props.forDevPage} />
    </>
  );
}

export default Index;
