import logo from "../../assets/images/Logo.svg";
import search from "../../assets/images/SearchOutline.svg";
import "./style.css";

export default function Navbar() {
	const navbarOptions = [
		{
			href: "#",
			option: "CONTACT",
		},
		{
			href: "#",
			option: "TESTIMONIALS",
		},
		{
			href: "#",
			option: "ABOUT",
		},
		{
			href: "#",
			option: "TERMS",
		},
	];

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img
					src={logo}
					alt="logo"
				/>
				<a href="#">Lawliet</a>
			</div>
			<ul>
				{navbarOptions.map((item, index) => (
					<li key={index}>
						<a href="#">{item.option}</a>
					</li>
				))}
			</ul>
			<div className="navbar-search">
				<img
					src={search}
					alt="search"
				/>
			</div>
		</nav>
	);
}
