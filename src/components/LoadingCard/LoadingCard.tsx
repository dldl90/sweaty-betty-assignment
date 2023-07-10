import styles from "./LoadingCard.module.scss";

const LoadingCard = ({ alt, className }) => {
  return (
    <div className={`${styles.container} ${className}`} role="img" alt={alt}>
      <span className={`${styles.skeletonBox} ${styles.skeletonBox__image}`} style={{ width: "100%" }} />
      <span className={styles.skeletonBox} style={{ width: "60%" }} />
      <span className={styles.skeletonBox} style={{ width: "60%" }} />
      <span className={styles.skeletonBox} style={{ width: "100%" }} />
    </div>
  );
};

LoadingCard.defaultProps = {
  alt: "Loading animation skeleton of product card",
  className: "",
};

export default LoadingCard;
