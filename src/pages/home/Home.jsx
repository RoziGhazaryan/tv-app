import useHome from "./useHome";
import Sidebar from "../../components/sidebar/Sidebar";
import HeroSection from "./components/hero-section/HeroSection";
import MoviesCarousel from "./components/movies-carousel/MoviesCarousel";

import "./styles.scss";

function Home() {
	const { trendingData, featured, selectedItem, setSelectedItem } = useHome();

	// functions
	const selectShow = (id) => {
		const item = trendingData?.find((item) => item.Id === id);
		setSelectedItem(item);

		const trendingItems = sessionStorage.getItem("trending");
		if (trendingItems) {
			const trendingItemsArr = JSON.parse(trendingItems);
			const index = trendingItemsArr.indexOf(id);

			if (index !== -1) {
				console.log(index);
				trendingItemsArr.splice(index, 1);
			}

			trendingItemsArr.unshift(id);
			sessionStorage.setItem("trending", JSON.stringify(trendingItemsArr));
		} else {
			sessionStorage.setItem("trending", JSON.stringify([id]));
		}
	};

	return (
		<div className="home-page">
			<Sidebar />
			<div className="home-page__main-content">
				<HeroSection data={selectedItem || featured} />
				<MoviesCarousel
					data={trendingData}
					selectShow={selectShow}
				/>
			</div>
		</div>
	);
}

export default Home;
