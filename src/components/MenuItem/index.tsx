import type { IMenuItem } from "interfaces";
import Link from "next/link";
import styles from "./styles.module.scss";

interface MenuItemProps extends IMenuItem {}

const MenuItem = ({ path, title }: MenuItemProps): JSX.Element => {
  return (
    <li className={styles.item}>
      <Link href={path}>
        <a className={styles.link}>{title}</a>
      </Link>
    </li>
  );
};

export default MenuItem;
