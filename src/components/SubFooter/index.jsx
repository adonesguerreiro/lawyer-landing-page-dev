import { listSubFooterData } from "../data/listSubFooterData";
import "./style.css";

export default function SubFooter() {
	return (
		<section className="subfooter">
			<span>© 2021 Lawliet. All rights reserved</span>
			<div className="social-links">
				{listSubFooterData.map((item) => (
					<a
						key={`subfooter-${item.id}`}
						href="#">
						<img
							src={item.image}
							alt={item.alt}
							loading="lazy"
						/>
					</a>
				))}
			</div>
		</section>
	);
}
