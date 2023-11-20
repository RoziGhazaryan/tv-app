import TitleImage from "../../../../assets/images/FeaturedTitleImage.png";

import "./styles.scss";

function HeroSection() {
	return (
		<div className="hero-section">
			<div className="hero-section__main-content">
				<div className="hero-section__main-content__container">
					<h4 className="hero-section__main-content--show-type">Movie</h4>
					<img
						src={TitleImage}
						alt="Title"
						className="hero-section__main-content--show-image"
					/>
					<div className="hero-section__main-content--show-info">
						<span>2021</span>
						<span>18+</span>
						<span>1h 48m</span>
					</div>
					<p className="hero-section__main-content--show-description">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s.
					</p>
					<div className="hero-section__main-content--show-buttons d_flex">
						<button className="hero-section__main-content--show-buttons--button play">
							<span>
								<span className="arrow"></span>
								Play
							</span>
						</button>
						<button className="hero-section__main-content--show-buttons--button more-info">
							<span>More Info</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
