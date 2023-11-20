import useHeroSection from "./useHeroSection";

import "./styles.scss";

function HeroSection({ data }) {
	const { duration } = useHeroSection({ data });

	return (
		<div
            className="hero-section"
            style={{ backgroundImage: `url(/assets/${data?.CoverImage})` }}
        >
			{data && (
				<div className="hero-section__main-content">
					<div className="hero-section__main-content__container">
						<h4 className="hero-section__main-content--show-category">
							{data.Category}
						</h4>
						<img
							src="/assets/FeaturedTitleImage.png"
							alt="Title"
							className="hero-section__main-content--show-image"
						/>
						<div className="hero-section__main-content--show-info">
							<span>{data.ReleaseYear}</span>
							<span>{data.MpaRating}</span>
							<span>{duration}</span>
						</div>
						<p className="hero-section__main-content--show-description">
							{data.Description}
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
			)}
		</div>
	);
}

export default HeroSection;
