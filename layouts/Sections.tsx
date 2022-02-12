import React from 'react';
import styles from '@/styles/Home.module.scss';
import components from '@/styles/Components.module.scss';
import Image from 'next/image';
import discordSS from '@/images/screenshots/discord.png';
import ThirdSectionBlur from '@/images/blur-effects/SectionThree.png';
import {
  FirstSectionCircle,
  Body,
  AddToDiscord,
  HorizontalSpaceBetween,
  FeaturesGrid,
  Feature,
} from './Components';

export const FirstSection = function FirstSection() {
  return (
    <>
      <FirstSectionCircle />
      <Body>
        <div className={styles.firstSectionContainer}>
          <h1 style={{ margin: '0rem' }} className={components.smallHeading}>Get your Discord Server powered with a</h1>
          <h1 style={{ marginTop: '1rem', marginBottom: '0rem' }} className={components.gradientHeading}>Secured Crypto Wallet</h1>
          <p style={{ marginTop: '3rem', marginBottom: '5rem' }} className={components.bigSubHeading}>
            {`DisWallet makes it easier to do secured transactions
            with your fellow Discord Members in just a few simple commands.`}
          </p>
          <AddToDiscord overrideHeight="5.8rem" overrideWidth="21.8rem" />
        </div>
      </Body>
    </>
  );
};

export const SecondSection = function SecondSection() {
  return (
    <div className={styles.secondSectionContainer}>
      <HorizontalSpaceBetween>
        <div>
          <Image src={discordSS} alt="" />
        </div>
        <div className={styles.secondSectionText}>
          <h1 className={components.smallHeading}>
            {`We are bringing the next phase of
            Community transactions in motion`}
          </h1>
          <p className={components.smallSubHeading}>
            {`Some subtext about how this is beneficial for DAOs
            and other web communities. Can also mention how this can be
            used in personal and professional use.`}
          </p>
        </div>
      </HorizontalSpaceBetween>
    </div>
  );
};

const Features = [
  {}, {}, {}, {},
];

export const ThirdSection = function ThirdSection() {
  return (
    <div className={styles.thirdSectionContainer}>
      <img alt="" src={ThirdSectionBlur.src} className={styles.thirdSectionBlur} />
      <h1
        className={components.smallHeading}
        style={{
          marginTop: '17rem',
          marginBottom: '0rem',
        }}
      >
        Discord 🤝 Crypto Wallet is the best partnership ever
      </h1>
      <p
        className={components.bigSubHeading}
        style={{
          marginTop: '2.4rem',
        }}
      >
        A short sub-heading of max 50 character goes in here
      </p>
      <FeaturesGrid>
        {Features.map((feature, index) => (
          <Feature key={index} />
        ))}
      </FeaturesGrid>
    </div>
  );
};
