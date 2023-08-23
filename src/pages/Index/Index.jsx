import classes from "./Index.module.css";
import HeadMeta from "../../components/HeadMeta/HeadMeta";

function Index(props) {
  return (
    <div>
      <HeadMeta page={props.page} />
      <h1 className="h1 alignCenter">{props.page.name}</h1>
    </div>
  );
}

export default Index;
