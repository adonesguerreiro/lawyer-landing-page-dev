import { listNavbarData } from "../data/listNavbarData";
import logo from "../../assets/images/Logo.svg";
import search from "../../assets/images/SearchOutline.svg";
import "./style.css";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img
					src={logo}
					alt="logo"
					loading="lazy"
				/>
				<a href="#">Lawliet</a>
			</div>
			<ul>
				{listNavbarData.map((item) => (
					<li key={`navbar-${item.id}`}>
						<a href="#">{item.option}</a>
					</li>
				))}
			</ul>
			<div className="navbar-search">
				<img
					src={search}
					alt="search"
					loading="lazy"
				/>
			</div>
		</nav>
	);
}
