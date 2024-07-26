import "./style.css";
import photo from "../../assets/images/Photo.svg";

export default function Testimonial() {
	return (
		<section className="testimonial">
			<h1>Clients Testimonial</h1>
			<div className="testimonials">
				<div className="cards">
					<blockquote className="card">
						<h2>Incredible Experience</h2>
						<p>
							We had an incredible experience working with Landify and were
							impressed they made such a big difference in only three weeks. Our
							team is so grateful for the wonderful improvements they made and
							their ability to get familiar with the concept so quickly.
						</p>
					</blockquote>
					<figure className="client-details">
						<img
							src={photo}
							alt="photo"
							loading="lazy"
						/>
						<div className="person-details">
							<h3>Anya Tailor Joy</h3>
							<span>CEO, SF Industires</span>
						</div>
					</figure>
				</div>
				<div className="cards">
					<blockquote className="card">
						<h2>Dependable, Responsive, Professional Partner</h2>
						<p>
							Fermin Apps has collaborated with Landify team for several
							projects such as Photo Sharing Apps and Custom Social Networking
							Apps. The experience has been pleasant, professional and exceeding
							our expectations.
						</p>
					</blockquote>
					<figure className="client-details">
						<img
							src={photo}
							alt="photo"
							loading="lazy"
						/>
						<div className="person-details">
							<h3>Sri Alam</h3>
							<span>CEO, Membagongkan GROUP</span>
						</div>
					</figure>
				</div>
			</div>
		</section>
	);
}
