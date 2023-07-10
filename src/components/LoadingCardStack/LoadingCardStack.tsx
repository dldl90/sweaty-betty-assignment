import LoadingCard from "@/components/LoadingCard";
import styles from "./LoadingCardStack.module.scss";

const LoadingCardStack = () => {
  return (
    <div className={styles.loading}>
      <LoadingCard className={styles.loading__card} />
      <LoadingCard className={styles.loading__card} />
      <LoadingCard className={styles.loading__card} />
      <LoadingCard className={styles.loading__card} />
      <LoadingCard className={styles.loading__card} />
      <LoadingCard className={styles.loading__card} />
    </div>
  );
};

export default LoadingCardStack;
