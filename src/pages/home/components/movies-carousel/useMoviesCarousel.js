import { useEffect, useState } from "react";

const useMoviesCarousel = ({ data }) => {
	// useState
	const [items, setItems] = useState([]);

	// configs
	const responsive = {
		0: {
			items: 1,
		},
		568: {
			items: 2,
		},
		1024: {
			items: 8,
		},
	};

	// functions
	const selectShow = (id) => {
		console.log(id);
	};

	// useEffect
	useEffect(() => {
		if (data?.TrendingNow?.length) {
			data.TrendingNow.map((item) =>
				items.push(
					<div
						onClick={() => selectShow(item.Id)}
						className="item"
						data-value={item.Id}
						style={{
							backgroundImage: `url(/assets/${item.CoverImage})`,
							width: 200,
							height: 278,
						}}
					/>
				)
			);

			setItems(items);
		}
	}, [data]);

	return {
		items,
		responsive,
	};
};

export default useMoviesCarousel;
