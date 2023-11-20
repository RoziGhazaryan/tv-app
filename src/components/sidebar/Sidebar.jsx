import { useState } from "react";
import Avatar from "../../assets/images/avatar.jpg";
import Search from "../../assets/images/icons/search.png";
import Home from "../../assets/images/icons/home.png";
import TvShows from "../../assets/images/icons/tv-shows.png";
import Movies from "../../assets/images/icons/movies.png";
import Genres from "../../assets/images/icons/genres.png";
import WatchLater from "../../assets/images/icons/watch-later.png";

import "./styles.scss";

function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{
			key: "search",
			title: "Search",
			iconSrc: Search,
			isActive: false,
		},
		{
			key: "home",
			title: "Home",
			iconSrc: Home,
			isActive: true,
		},
		{
			key: "tvShows",
			title: "TV Shows",
			iconSrc: TvShows,
			isActive: false,
		},
		{
			key: "movies",
			title: "Movies",
			iconSrc: Movies,
			isActive: false,
		},
		{
			key: "genres",
			title: "Genres",
			iconSrc: Genres,
			isActive: false,
		},
		{
			key: "watchLater",
			title: "Watch Later",
			iconSrc: WatchLater,
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

	return (
		<div className={`sidebar-container ${isOpen ? "opened" : "closed"}`}>
			<div
				className="sidebar"
				onMouseOver={() => setIsOpen(true)}
				onMouseLeave={() => setIsOpen(false)}
			>
				<div>
					<div className="sidebar-user d_flex a_items_center">
						<div className="sidebar-user__avatar">
							<img
								src={Avatar}
								alt="avatar"
							/>
						</div>
						<div className="sidebar-user__name">
							<h3>Daniel</h3>
						</div>
					</div>
					<div className="sidebar-menu">
						{menuItems.map((item) => (
							<div
								key={item.key}
								className={`sidebar-menu__item d_flex a_items_center ${
									item.isActive ? "isActive" : ""
								}`}
							>
								<div className="sidebar-menu__item--icon">
									<img
										src={item.iconSrc}
										alt={item.key}
										className="sidebar-menu__item--icon__image"
									/>
								</div>
								<div className="sidebar-menu__item--title">
									<span>{item.title}</span>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="sidebar-menu__bottom">
					{bottomMenuItems.map((item) => (
						<div
							key={item.key}
							className="sidebar-menu__bottom--item"
						>
							<div className="sidebar-menu__bottom--item_title">
								<span>{item.title}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
