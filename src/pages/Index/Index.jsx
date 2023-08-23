import classes from "./Index.module.css";

function Index(props) {
  return (
    <div>
      <h1 className="h1 alignCenter">{props.pageName}</h1>
    </div>
  );
}

export default Index;
