import React from 'react';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import mainStyles from '@src/styles/main.module.scss';
import { motion } from 'framer-motion';
import SkillsSection from '@src/sections/SkillsSection';
import { ProjectSection } from '@src/sections/ProjectsSection';
import SocialLinks from '@src/data/SocialLinks';
import Image from 'next/image';
import SEO from '@src/components/SEO';

const Index: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Home"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home',
        }}
      />
      <SEO
        description="Home page"
        title="Home"
        keywords={['Projects, Blog posts, About']}
        url="https://lhowsam.com"
      />
      <main className={mainStyles.main} id="about">
        <div className={mainStyles.mainTitle}>
          <h1>Hey, I'm Luke 👋</h1>
          <div className={mainStyles.image}>
            <Image
              src="/images/luke.jpeg"
              width={320}
              height={400}
              blurDataURL="/images/luke.jpeg"
              placeholder="blur"
              alt="profile picture"
              quality="100"
              priority
            />
          </div>
        </div>
        <p className={mainStyles.mainText}>
          Hey I'm Luke, I currently work as a software tester where I do a
          mixture of manual & automated testing in an agile environment. I'm
          also a developer who likes working with React & Node.js.
          {/* <Link href="/about">
            <a>Read More</a>
          </Link> */}
        </p>
        <div className={mainStyles.btnContainer}>
          {SocialLinks
            && SocialLinks.map((link) => (
              <motion.a
                key={link.id}
                initial={{
                  opacity: 0,
                  translateY: -10,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{ duration: 0.3, delay: 0.1 * link.id }}
                className="btn btn__light btn__icon"
                href={link.href}
              >
                <link.Icon />
                {link.name}
              </motion.a>
            ))}
        </div>
      </main>
      <SkillsSection />
      <ProjectSection />
    </>
  );
};
export default Index;
