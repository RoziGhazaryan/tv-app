import { useEffect, useState } from "react";

const useHome = () => {
	// useState
	const [data, setData] = useState(null);

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
				setData(data);
			});
	};

	// useEffect
	useEffect(() => {
		getData();
	}, []);

	return { data };
};

export default useHome;
