import { Helmet, HelmetProvider } from "react-helmet-async";

function HeadMeta(props) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>aemorozov.com | {props.page.name}</title>
      </Helmet>
    </HelmetProvider>
  );
}

export default HeadMeta;
