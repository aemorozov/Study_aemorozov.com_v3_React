import { Helmet, HelmetProvider } from "react-helmet-async";

function HeadMeta(props) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>aemorozov.com | {props.page.name}</title>
        <meta name="description" content={"Aleksei Morozov Frontend Developer - " + props.page.name} />
      </Helmet>
    </HelmetProvider>
  );
}

export default HeadMeta;
