import "./style.css";
import { listWhyData } from "../data/listWhyData";

export default function Why() {
	return (
		<section className="why">
			<div className="title">
				<h1>Why do we help with legalization?</h1>
				<span>
					We are here for UMKM in Indonesia to carry out the legalization
					process, which is sometimes complicated.
				</span>
			</div>
			<article className="our-feature">
				{listWhyData.map((item, index) => (
					<div
						key={index}
						className="feature">
						<img
							src={item.image}
							alt={item.alt}
						/>
						<h2>{item.title}</h2>
						<span>{item.description}</span>
					</div>
				))}
			</article>
		</section>
	);
}
