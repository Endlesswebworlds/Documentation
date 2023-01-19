import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: "About",
    img: "img/learn.png",
    description: (
      <>Learn about the basic architecture and features of EWW</>
    ),
    route: '/docs/About/Overview'
  },
  {
    title: "Tutorials",
    img: "/img/tutorial.png",
    description: <>Learn how to build interactive worlds, host a server and to code</>,
    route: '/docs/Tutorials/Overview'
  }
  ,
  {
    title: "$EWW",
    img: "/img/util.png",
    description: <>Learn about the utility & tokenomics of the EWW token</>,
    route: '/docs/EWW-token/Tokenomics'
  }
];

function Feature({ img, title, description, route }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img style={{ width: "128px", borderRadius: "50%" }} src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
          className="button button--secondary button--lg"
          to={route}>
          Go →
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
