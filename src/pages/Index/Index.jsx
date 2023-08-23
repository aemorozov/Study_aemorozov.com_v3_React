import styles from "./Index.module.css";
import HeadMeta from "../../components/HeadMeta/HeadMeta";
import ContentBlock from "../../components/ContentBlock/ContentBlock";

function Index(props) {
  return (
    <div>
      <HeadMeta page={props.page} />
      <h1 className="h1 alignCenter">aemorozov.com</h1>
      <ContentBlock />
    </div>
  );
}

export default Index;
