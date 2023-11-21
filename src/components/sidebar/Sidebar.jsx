import useSidebar from "./useSidebar";

import "./styles.scss";
import "./responsive.scss";

function Sidebar() {
	const { isOpen, setIsOpen, menuItems, bottomMenuItems } = useSidebar();

	return (
		<div className={`sidebar-container ${isOpen ? "opened" : ""}`}>
			<div
				className="sidebar"
				onMouseOver={() => setIsOpen(true)}
				onMouseLeave={() => setIsOpen(false)}
			>
				<div>
					<div className="sidebar-user d_flex a_items_center">
						<div className="sidebar-user__avatar">
							<img
								src="/assets/avatar.jpg"
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
