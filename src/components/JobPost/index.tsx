import { JobOpportunity } from "components";
import type { IJobPost } from "interfaces";
import styles from "./styles.module.scss";

interface JobPostProps extends IJobPost {}

const JobPost = ({ occupation, opportunities }: JobPostProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <span className={styles.occupation}>{occupation}</span>
      <div className={styles.opportunities}>
        {opportunities.map(({ job, type, salary }, i) => (
          <JobOpportunity job={job} type={type} salary={salary} key={i} />
        ))}
      </div>
    </div>
  );
};

export default JobPost;
