import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

// TODO: Add responsiveness to Header.

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image
              src="/assets/icons/logo.svg"
              alt="Ícone de um globo feito de linhas finas vermelhas"
              width={27}
              height={27}
            />
            <span className={styles.title}>OptimusTech</span>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <Link href="/home">
                  <a className={styles.link}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/produtos">
                  <a className={styles.link}>Produtos</a>
                </Link>
              </li>
              <li>
                <Link href="/recursos">
                  <a className={styles.link}>Recursos</a>
                </Link>
              </li>
              <li>
                <Link href="/sobre-nos">
                  <a className={styles.link}>Sobre nós</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.button_container}>
          <button type="button" className={styles.link_button}>
            Entrar
          </button>
          <button type="button" className={styles.button}>
            Cadastrar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
