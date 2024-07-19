import "./style.css";
import logo from "../../assets/images/Logo Footer.svg";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="logo">
				<img
					src={logo}
					alt="logo"
				/>
				<span>Lawliet</span>
			</div>
			<nav className="links">
				<ul className="product">
					<span>Product</span>
					<div className="list-items">
						<a href="#">Overview</a>
						<a href="#">Features</a>
						<a href="#">Tutorials</a>
						<a href="#">Pricing</a>
						<a href="#">Releases</a>
					</div>
				</ul>
				<ul className="company-footer">
					<span>Company</span>
					<div className="list-items">
						<a href="#">About</a>
						<a href="#">Press</a>
						<a href="#">Careers</a>
						<a href="#">Contact</a>
						<a href="#">Partners</a>
					</div>
				</ul>
				<ul className="support">
					<span>Support</span>
					<div className="list-items">
						<a href="#">Help Center</a>
						<a href="#">Terms of service</a>
						<a href="#">Legal</a>
						<a href="#">Privacy Policy</a>
						<a href="#">Status</a>
					</div>
				</ul>
			</nav>
		</footer>
	);
}
