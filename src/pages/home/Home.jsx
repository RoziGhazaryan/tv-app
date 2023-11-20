import useHome from "./useHome";
import Sidebar from "../../components/sidebar/Sidebar";
import HeroSection from "./components/hero-section/HeroSection";
import MoviesCarousel from "./components/movies-carousel/MoviesCarousel";

import "./styles.scss";

function Home() {
	const { data } = useHome();

	return (
		<div className="home-page">
			<Sidebar />
			<div className="home-page__main-content">
				<HeroSection data={data?.Featured} />
				<MoviesCarousel data={data} />
			</div>
		</div>
	);
}

export default Home;
