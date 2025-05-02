import { Link } from "react-router-dom";
import s from './navigation.module.css';

export const Navigation = () => {
	return (
		<nav className={s.navigation}>
			<Link to="/generate" className={s.navLink}>Генерировать QR</Link>
			<Link to="/scan" className={s.navLink}>Сканировать QR</Link>
			<Link to="/scanHistory" className={s.navLink}>История сканирования</Link>
			<Link to="/generateHistory" className={s.navLink}>История генерирования</Link>
		</nav>
	);
};