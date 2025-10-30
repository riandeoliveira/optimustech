import type { IJobOpportunity } from "interfaces";
import styles from "./styles.module.scss";

interface JobOpportunityProps extends IJobOpportunity {}

const JobOpportunity = ({
  job,
  type,
  salary,
}: JobOpportunityProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <span className={styles.job}>{job}</span>
      <div className={styles.data}>
        <span>{type}</span>
        <span>Faixa salarial: R${salary.toLocaleString("pt-BR")}</span>
      </div>
    </div>
  );
};

export default JobOpportunity;
