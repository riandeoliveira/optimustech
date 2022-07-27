import styles from "./styles.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Acompanhe as nossas oportunidades</h1>
          <p className={styles.description}>
            Seja o primeiro a saber quando novas vagas serão abertas!
          </p>
        </div>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Seu e-mail"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
        </form>
        <p className={styles.copyright}>
          © 2022 OptimusTech. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
