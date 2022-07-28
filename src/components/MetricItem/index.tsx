import type { IMetricItem } from "interfaces";
import styles from "./styles.module.scss";

interface MetricItemProps extends IMetricItem {}

const MetricItem = ({
  count,
  title,
  description,
}: MetricItemProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <span className={styles.data}>
        {count >= 1000 ? `${count.toString().slice(0, 2)}k` : `${count}+`}
      </span>
      <span className={styles.title}>{title}</span>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default MetricItem;
