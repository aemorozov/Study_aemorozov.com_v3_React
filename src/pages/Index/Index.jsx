import HeadMeta from "../../components/HeadMeta/HeadMeta";
import { ContentBlockLeftImg } from "../../components/ContentBlock/ContentBlock";
import toTop from "../../functions/toTop/toTop";

function Index(props) {
  toTop();
  return (
    <>
      <HeadMeta page={props.page} />
      {props.forIndexPage.map((data) => {
        return <ContentBlockLeftImg data={data} key={data.title} />;
      })}
    </>
  );
}

export default Index;
