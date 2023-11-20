import useMoviesCarousel from "./useMoviesCarousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./styles.scss";

function MoviesCarousel({ data }) {
	const { items, responsive } = useMoviesCarousel({ data });

	return (
		<AliceCarousel
			keyboardNavigation
			disableDotsControls
			disableButtonsControls
			mouseTracking
			items={items}
			responsive={responsive}
			infinite
			stagePadding={{ paddingLeft: 10, paddingRight: 10 }}
		/>
	);
}

export default MoviesCarousel;
