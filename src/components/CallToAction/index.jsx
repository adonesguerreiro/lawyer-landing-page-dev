import "./style.css";
import call from "../../assets/images/Call.svg";
import man from "../../assets/images/Man.svg";

export default function CallToAction() {
	return (
		<section className="cta">
			<div className="call-to-action">
				<h1>Complex Questions?</h1>
				<p>
					Request for a personalized budget for your legal problem. We will send
					you a coupe options in 24 hours. You can have free consult , if a our
					first customer
				</p>
				<div className="call-now">
					<img
						src={call}
						alt="Call"
						loading="lazy"
					/>
					<a href="#">Call now</a>
				</div>
			</div>
			<div className="man-image">
				<img
					className="man"
					src={man}
					alt="man"
					loading="lazy"
				/>
			</div>
		</section>
	);
}
