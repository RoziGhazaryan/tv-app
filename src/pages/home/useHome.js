import { useEffect, useState } from "react";

const useHome = () => {
	// useState
	const [trendingData, setTrendingData] = useState(null);
	const [featured, setFeatured] = useState(null);
	const [selectedItem, setSelectedItem] = useState(null);

	// functions
	const getData = () => {
		fetch("data.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				if (data.TrendingNow?.length && data.Featured) {
					if (data.TrendingNow.length > 50) {
						data.TrendingNow.length = 50;
					}
					sortItems(data.TrendingNow, data.Featured);
				}
			});
	};

	const sortItems = (trendingNow, featuredItem) => {
		const trendingIds = sessionStorage.getItem("trending");
		const trendingNowFetchedData = [...trendingNow];

		if (trendingIds) {
			const trendingIdsArr = JSON.parse(trendingIds);

			for (let i = trendingIdsArr.length - 1; i >= 0; i--) {
				const eachItem = trendingNowFetchedData.find(
					(item) => trendingIdsArr[i] === item.Id
				);
				const index = trendingNowFetchedData.indexOf(eachItem);

				if (eachItem && index !== -1) {
					trendingNowFetchedData.splice(index, 1);
					trendingNowFetchedData.unshift(eachItem);
				}
			}

			setTrendingData(trendingNowFetchedData);
			setFeatured(trendingNowFetchedData[0]);
		} else {
			setTrendingData(trendingNow);
			setFeatured(featuredItem);
		}
	};

	// useEffect
	useEffect(() => {
		getData();
	}, []);

	return { trendingData, featured, selectedItem, setSelectedItem };
};

export default useHome;
