const useHeroSection = ({ data }) => {
	const toHoursAndMinutes = (totalSeconds) => {
		const totalMinutes = Math.floor(totalSeconds / 60);

		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;

		return `${hours}h ${minutes}m`;
	};

	const duration = toHoursAndMinutes(data?.Duration) ?? "-";

	return { duration };
};

export default useHeroSection;
