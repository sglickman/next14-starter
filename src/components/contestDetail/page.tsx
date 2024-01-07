import styles from "./contestDetail.module.css";

const ContestDetail = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailTitle}>{title}</div>
      <div className={styles.detailValue}>{value}</div>
    </div>
  );
};

export default ContestDetail;
