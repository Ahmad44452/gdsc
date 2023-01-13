import TeamCard from "./TeamCard";
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const cardAnimation = {
  initial: {
    opacity: 0,
    y: 300
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.2, 0.6, 0.51, 1],
      duration: 1
    }
  }
}


const Team = () => {
  return (
    <section id="team" className="team">
      <motion.h1 className="team__heading" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .7 }} transition={{ duration: 1 }}>
        Core Team
      </motion.h1>

      <motion.div className="team__cards" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .7 }} transition={{ duration: 1 }}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1360
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 750,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1360,
                min: 750
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >

          <TeamCard
            pfp='https://i.imgur.com/ShOgZDa.jpg'
            name='Abdul Raheem'
            role='GDSC Lead'
            linkedin='null'
            github='null'
            twitter='null'
          />

          <TeamCard
            pfp='https://i.imgur.com/k9lZGMG.jpg'
            name='Ahmad Raza'
            role='Web Development Lead'
            linkedin='https://www.linkedin.com/in/ahmadraza365/'
            github='empty'
            twitter='https://twitter.com/ahmadraza365'
          />

          <TeamCard
            pfp='https://i.imgur.com/h16C25W.jpg'
            name='Ahmad Chaudhary'
            role='Event Management Lead'
            linkedin='https://www.linkedin.com/in/muhammad-ahmad-662835153'
            github='null'
            twitter='https://twitter.com/M_Ahmad_9'
          />

          <TeamCard
            pfp='https://i.imgur.com/RQZBPAP.jpg'
            name='Arslan Khalid'
            role='Graphics Lead'
            linkedin='https://www.linkedin.com/in/arslan4real/'
            github='null'
            twitter='https://twitter.com/arslaann44'
          />

          <TeamCard
            pfp='https://i.imgur.com/3Tr8YX8.png'
            name='Habib ur Rehman'
            role='Public Relation Lead'
            linkedin='https://www.linkedin.com/in/hafiz-habib-ur-rehman-021637205'
            github='null'
            twitter='https://twitter.com/thehabiburrehma'
          />

          <TeamCard
            pfp='https://i.imgur.com/iu0RWTg.jpg'
            name='Hamza Ghafoor'
            role='Creative Lead'
            linkedin='https://www.linkedin.com/in/hamza-ghafoor-a2247022a'
            github='null'
            twitter='https://twitter.com/HZG4H?t=RPNohD9N4W58BkvQTpepBQ&s=08'
          />

          <TeamCard
            pfp='https://i.imgur.com/yqNQMRf.jpg'
            name='Iqra Mahmood'
            role='Machine Learning Lead'
            linkedin='https://www.linkedin.com/in/hafiza-iqra-mahmood/'
            github='null'
            twitter='https://twitter.com/Iqra_Multaji'
          />

          <TeamCard
            pfp='https://i.imgur.com/ixpMm3y.jpg'
            name='Nabeel Ahmad'
            role='Competative Programming Lead'
            linkedin='https://www.linkedin.com/in/nabeelahmedjh/'
            github='null'
            twitter='https://twitter.com/nabeelahmedjh'
          />

          <TeamCard
            pfp='https://i.imgur.com/EWeaadR.jpg'
            name='Eatsam Ul Haq'
            role='Technical Lead'
            linkedin='null'
            github='null'
            twitter='null'
          />

        </Carousel>
      </motion.div>
    </section>
  )
}

export default Team;