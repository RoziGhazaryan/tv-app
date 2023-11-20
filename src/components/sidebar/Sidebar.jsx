import Search from '../../assets/images/icons/search.png';
import Home from '../../assets/images/icons/home.png';
import TvShows from '../../assets/images/icons/tv-shows.png';
import Movies from '../../assets/images/icons/movies.png';
import Genres from '../../assets/images/icons/genres.png';
import WatchLater from '../../assets/images/icons/watch-later.png';

import "./styles.scss";

function Sidebar() {
    const menuItems = [
        {
            key: 'search',
            title: 'Search',
            iconSrc: Search,
        },
        {
            key: 'home',
            title: 'Home',
            iconSrc: Home,
        },
        {
            key: 'tvShows',
            title: 'TV Shows',
            iconSrc: TvShows,
        },
        {
            key: 'movies',
            title: 'Movies',
            iconSrc: Movies,
        },
        {
            key: 'genres',
            title: 'Genres',
            iconSrc: Genres,
        },
        {
            key: 'watchLater',
            title: 'Watch Later',
            iconSrc: WatchLater,
        },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-menu">
                {menuItems.map((item) => (
                    <div key={item.key} className="sidebar-menu_item d_flex a_items_center">
                        <div className="sidebar-menu_item--icon">
                            <img src={item.iconSrc} alt={item.key} className="sidebar-menu_item--icon__image" />
                        </div>
                        <div className="sidebar-menu_item--title">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Sidebar;