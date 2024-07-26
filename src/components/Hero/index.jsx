import "./style.css";
import woman from "../../assets/images/Woman.svg";
import ellipse1 from "../../assets/images/Ellipse 1.svg";
import ellipse2 from "../../assets/images/Ellipse 2.svg";
import { listHeroData } from "../data/listHeroData";

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
								{listHeroData.map((item) => (
									<img
										key={`hero-${item.id}`}
										src={item.logo}
										alt={item.alt}
										loading="lazy"
									/>
								))}
							</figure>
						</div>
					</div>
					<div className="hero-image">
						<div className="elipse">
							<img
								className="elipse1"
								src={ellipse1}
								alt=""
								loading="lazy"
							/>
							<img
								className="elipse2"
								src={ellipse2}
								alt=""
								loading="lazy"
							/>
							<img
								src={woman}
								alt="Woman"
								loading="lazy"
							/>
							<article className="name-professional">
								<h2>Tiara Andini</h2>
								<span>-Laywer</span>
							</article>
						</div>
					</div>
				</section>
			</section>
		</>
	);
}
