import { MetricItem } from "components";
import { metricItems } from "contents";
import styles from "./styles.module.scss";

const AboutUsArea = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Sobre nós</h1>
          <h2 className={styles.subtitle}>Por que somos diferentes?</h2>
          <p className={styles.description}>
            Nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as
            empresas de todo o mundo a se concentrarem naquilo que é realmente
            importante para elas.
          </p>
        </div>
        <div className={styles.metrics}>
          {metricItems.map(({ count, title, description }, i) => (
            <MetricItem
              count={count}
              title={title}
              description={description}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsArea;
