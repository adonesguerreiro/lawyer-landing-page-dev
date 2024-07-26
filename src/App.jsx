import "./App.css";
import Achievement from "./components/Achievement";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SubFooter from "./components/SubFooter";
import Testimonial from "./components/Testimonial";
import Why from "./components/Why";

function App() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Why />
			<Achievement />
			<Testimonial />
			<CallToAction />
			<Footer />
			<SubFooter />
		</main>
	);
}

export default App;
