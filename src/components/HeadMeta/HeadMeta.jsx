import { Helmet } from "react-helmet";

function HeadMeta(props) {
  return (
    <Helmet>
      <title>{props.page.name}</title>
    </Helmet>
  );
}

export default HeadMeta;
