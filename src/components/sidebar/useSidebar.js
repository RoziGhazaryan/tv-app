import { useState } from "react";

const useSidebar = () => {
	// useState
	const [isOpen, setIsOpen] = useState(false);

	// constants
	const menuItems = [
		{
			key: "search",
			title: "Search",
			iconSrc: "/assets/icons/search.png",
			isActive: false,
		},
		{
			key: "home",
			title: "Home",
			iconSrc: "/assets/icons/home.png",
			isActive: true,
		},
		{
			key: "tvShows",
			title: "TV Shows",
			iconSrc: "/assets/icons/tv-shows.png",
			isActive: false,
		},
		{
			key: "movies",
			title: "Movies",
			iconSrc: "/assets/icons/movies.png",
			isActive: false,
		},
		{
			key: "genres",
			title: "Genres",
			iconSrc: "/assets/icons/genres.png",
			isActive: false,
		},
		{
			key: "watchLater",
			title: "Watch Later",
			iconSrc: "/assets/icons/watch-later.png",
			isActive: false,
		},
	];

	const bottomMenuItems = [
		{
			key: "language",
			title: "Language",
		},
		{
			key: "getHelp",
			title: "Get Help",
		},
		{
			key: "exit",
			title: "Exit",
		},
	];

	return {
		isOpen,
		setIsOpen,
		menuItems,
		bottomMenuItems,
	};
};

export default useSidebar;
