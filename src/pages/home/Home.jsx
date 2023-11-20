import Sidebar from "../../components/sidebar/Sidebar";
import HeroSection from "./components/hero-section/HeroSection";

import "./styles.scss";

function Home() {
	return (
		<div className="home-page">
			<Sidebar />
			<HeroSection />
		</div>
	);
}

export default Home;
