import "./style.css";
import airbnblogo from "../../assets/images/Airbnb Logo.svg";
import hubspotlogo from "../../assets/images/Hubspot Logo.svg";
import microsoftlogo from "../../assets/images/Microsoft Logo.svg";
import googlelogo from "../../assets/images/Google Logo.svg";
import woman from "../../assets/images/Woman.svg";
import ellipse1 from "../../assets/images/Ellipse 1.svg";
import ellipse2 from "../../assets/images/Ellipse 2.svg";

export default function Hero() {
	return (
		<>
			<section className="hero">
				<div className="new">
					<span>New</span>
					<p>Stay connected to the upcoming & Recent jobs</p>
				</div>

				<section className="hero-title">
					<div className="informations">
						<h1>Your Solution Legal Consultacy</h1>
						<p>
							We are here to help you take care of your legality with the best
							service especially for you.
						</p>
						<a href="#">GET STARTED</a>
						<div className="company">
							<span>Trusted by 10+ companies in indonesia</span>
							<figure>
								<img
									src={airbnblogo}
									alt="Airbnb Logo"
								/>
								<img
									src={hubspotlogo}
									alt="Hubspot Logo"
								/>
								<img
									src={microsoftlogo}
									alt="Microsoft Logo"
								/>
								<img
									src={googlelogo}
									alt="Google Logo"
								/>
							</figure>
						</div>
					</div>
					<div className="hero-image">
						<div className="elipse">
							<img
								className="elipse1"
								src={ellipse1}
								alt=""
							/>
							<img
								className="elipse2"
								src={ellipse2}
								alt=""
							/>
							<img
								src={woman}
								alt="Woman"
							/>
							<article className="name-professional">
								<h3>Tiara Andini</h3>
								<span>-Laywer</span>
							</article>
						</div>
					</div>
				</section>
			</section>
		</>
	);
}
