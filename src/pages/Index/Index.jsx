import styles from "./Index.module.css";
import HeadMeta from "../../components/HeadMeta/HeadMeta";
import { ContentBlockLeftImg, ContentBlockRightImg } from "../../components/ContentBlock/ContentBlock";

function Index(props) {
  return (
    <>
      <HeadMeta page={props.page} />
      {/* <h1 className="h1 alignCenter">Welcome, my friend!</h1> */}
      <ContentBlockLeftImg />
      <ContentBlockRightImg />
    </>
  );
}

export default Index;
