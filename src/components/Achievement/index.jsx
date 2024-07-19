import "./style.css";
import background from "../../assets/images/BG.svg";

export default function Achievement() {
	return (
		<section className="achievement">
			<img
				src={background}
				alt="background"
			/>
			<div className="heading">
				<h1>Some count that matters</h1>
				<span>Our achievement in the journey depicted in numbers</span>
				<div className="counts">
					<div className="details">
						<span>30</span>
						<p>Clients</p>
					</div>
					<span className="divider" />
					<div className="details">
						<span>300+</span>
						<p>Taken business legalities</p>
					</div>
					<span className="divider" />
					<div className="details">
						<span>8</span>
						<p>Years of Journey</p>
					</div>
				</div>
			</div>
		</section>
	);
}
