import ContentItem from "../ContentItem/ContentItem";
import styles from "./PreContentItems.module.css";

const PreContentItems = (props) => {
  return (
    <>
      {/* <h2 className="alignCenter" style={{ marginTop: 50 + "px", marginBottom: 0 }}>
        Fast download links
      </h2> */}
      <div className={styles.items}>
        {props.forDevPage.map((item) => {
          return <ContentItem item={item} key={item.alt} />;
        })}
      </div>
    </>
  );
};

export default PreContentItems;
