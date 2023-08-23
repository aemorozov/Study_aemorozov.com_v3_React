import HeadMeta from "../../components/HeadMeta/HeadMeta";

function Portfolio(props) {
  return (
    <div>
      <HeadMeta page={props.page} />
      <h1 className="h1 alignCenter">{props.page.name}</h1>
    </div>
  );
}

export default Portfolio;
