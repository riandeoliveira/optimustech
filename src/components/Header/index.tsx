import { Navbar } from "components";
import Image from "next/image";
import styles from "./styles.module.scss";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <Image
            src="/assets/icons/logo.svg"
            alt="Ícone de um globo feito de linhas finas vermelhas"
            width={27.5}
            height={27.5}
          />
          <span className={styles.title}>OptimusTech</span>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
