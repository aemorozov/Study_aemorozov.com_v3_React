import ContentItem from "../ContentItem/ContentItem";
import styles from "./PreContentItems.module.css";

const PreContentItems = (props) => {
  return (
    <div className={styles.items}>
      {props.forDevPage.map((item) => {
        return <ContentItem item={item} key={item.alt} />;
      })}
    </div>
  );
};

export default PreContentItems;
