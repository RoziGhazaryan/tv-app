import { useEffect, useRef } from "react";

const useHeroSection = ({ data }) => {
	// useRef
	const videoRef = useRef();

	// useEffect
	useEffect(() => {
		videoRef.current?.load();
	}, [data?.VideoUrl]);

	// functions
	const toHoursAndMinutes = (totalSeconds) => {
		const totalMinutes = Math.floor(totalSeconds / 60);

		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;

		return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
	};

	const duration = toHoursAndMinutes(data?.Duration) ?? "-";

	return { videoRef, duration };
};

export default useHeroSection;
