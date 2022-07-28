import { JobPost } from "components";
import { jobPosts } from "contents";
import Image from "next/image";
import styles from "./styles.module.scss";

const JobsArea = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Vagas abertas!</h1>
          <h2 className={styles.subtitle}>Estamos procurando por talentos</h2>
          <p className={styles.description}>
            Somos uma equipe 100% remota com pessoas do Brasil inteiro.
          </p>
        </div>
        <Image
          src="/assets/images/workspace.png"
          alt="Colegas de trabalho em uma reunião"
          width={1216}
          height={400}
        />
        <div className={styles.posts}>
          <div className={styles.posts_container}>
            {jobPosts.map(({ occupation, opportunities }, i) => (
              <JobPost
                occupation={occupation}
                opportunities={opportunities}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsArea;
