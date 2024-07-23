import "./style.css";
import background from "../../assets/images/BG.svg";
import { listAchievementData } from "../data/listAchievementData";

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
					{listAchievementData.map((item, index) => (
						<>
							<div
								key={index}
								className="details">
								<span>{item.title}</span>
								<p>{item.description}</p>
							</div>
							<span className="divider" />
						</>
					))}
				</div>
			</div>
		</section>
	);
}
