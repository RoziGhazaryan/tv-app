import { useState } from "react";

const useMoviesCarousel = () => {
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

	return {
		items,
        setItems,
		responsive,
	};
};

export default useMoviesCarousel;
