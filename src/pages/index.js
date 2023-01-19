import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<img
					className={styles.heroImg}
					src="https://www.endless-web-worlds.com/assets/img/Endless%20Web%20Worlds.png"
				/>
				<p className="hero__subtitle mb-4">{siteConfig.tagline}</p>
				<br />
				<br />
				<section className='my-4'>
					<div className='container'>
						<div className='row'>
							<div className='col col--4 text-center'>
								<h2>Gamers</h2>
								<p>
									Discover thrilling worlds created by the community.
									<br />Play games, earn tokens or NFTs and have fun!
								</p>
							</div>
							<div className='col col--4 text-center'>
								<h2>Artists</h2>
								<p>
									Design your own worlds and share them with the members of the community.<br />
									Create and sell your world or assets on the marketplace.
								</p>
							</div>
							<div className='col col--4 text-center'>
								<h2>Developers</h2>
								<p>
									Create exciting AI-powered missions and interactions for your worlds.
									<br /> Sell or give away your code / world.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`Eww docs`} description="Endless web worlds documentation">
			<HomepageHeader />

			<main>
				<HomepageFeatures />

			</main>
		</Layout>
	);
}
