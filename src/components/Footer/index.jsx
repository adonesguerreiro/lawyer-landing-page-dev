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
				<span>Product</span>
				<div className="list-items">
					<ul className="product">
						<li>
							<a href="#">Overview</a>
						</li>
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">Tutorials</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li>
							<a href="#">Releases</a>
						</li>
					</ul>
				</div>
			</nav>
			<nav className="links">
				<span>Company</span>
				<div className="list-items">
					<ul className="company-footer">
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Press</a>
						</li>
						<li>
							<a href="#">Careers</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
						<li>
							<a href="#">Partners</a>
						</li>
					</ul>
				</div>
			</nav>
			<nav className="links">
				<span>Support</span>
				<div className="list-items">
					<ul className="support">
						<li>
							<a href="#">Help Center</a>
						</li>
						<li>
							<a href="#">Terms of service</a>
						</li>
						<li>
							<a href="#">Legal</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Status</a>
						</li>
					</ul>
				</div>
			</nav>
		</footer>
	);
}
