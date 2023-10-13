import toTop from "../../../functions/toTop/toTop";
import { Link } from "react-router-dom";

export const FixTildaBugs = () => {
  toTop();
  return (
    <>
      <p style={{ textAlign: "center" }}>
        Oops, page is not ready yet. Please go to the{" "}
        <Link to={"/"} style={{ color: "black", fontSize: "16px", paddingTop: "4px" }}>
          <span>main screen</span>
        </Link>
      </p>
    </>
  );
};
