import styles from "../styles/utils.module.scss";

export default function Layout({ children }) {
	return <div className={styles.Container}>{children}</div>;
}
