import useHeroSection from "./useHeroSection";
import { useEffect, useRef } from "react";

import "./styles.scss";

function HeroSection({ data }) {
	const { duration } = useHeroSection({ data });
	const videoRef = useRef();

	useEffect(() => {
		videoRef.current?.load();
	}, [data?.VideoUrl]);

	return (
		<div
			className="hero-section"
			style={{ backgroundImage: `url(/assets/${data?.CoverImage})` }}
		>
			{data && (
				<div className="hero-section__main-content">
					{data.VideoUrl && (
						<video
							ref={videoRef}
							className="hero-section__main-content--video"
							autoPlay
							muted
							loop
						>
							<source
								src={data.VideoUrl}
								type="video/mp4"
							/>
						</video>
					)}
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
