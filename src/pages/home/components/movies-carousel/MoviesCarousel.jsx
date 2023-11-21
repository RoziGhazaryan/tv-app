import { useEffect } from "react";
import useMoviesCarousel from "./useMoviesCarousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./styles.scss";

function MoviesCarousel({ data, selectShow }) {
	const { items, setItems, responsive } = useMoviesCarousel();

	// useEffect
	useEffect(() => {
		data?.map((item) =>
			items.push(
				<div
					onClick={() => selectShow(item.Id)}
					className="item"
					data-value={item.Id}
					style={{
						width: 200,
						height: 278,
						backgroundImage: `url(/assets/${item.CoverImage})`,
					}}
				/>
			)
		);

		setItems(items);
	}, [data]);

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
