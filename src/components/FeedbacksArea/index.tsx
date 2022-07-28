import Image from "next/image";
import styles from "./styles.module.scss";

const FeedbacksArea = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.heading}>
          <h1 className={styles.title}>
            Veja o que nossos colaboradores falam sobre nós
          </h1>
          <h2 className={styles.subtitle}>
            OptimusTech se importa com a saúde dos seus colaboradores e sempre
            procura nos dar todo tipo de auxílio possível.
          </h2>
        </div>
        <div className={styles.profile}>
          <div className={styles.profile_container}>
            <Image
              src="/assets/icons/avatar.svg"
              alt=""
              width={56}
              height={56}
            />
            <span className={styles.user}>Júlia Castro</span>
            <span className={styles.job}>Desenvolvedora Web</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbacksArea;
