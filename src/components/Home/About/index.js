import { motion } from 'framer-motion';

import communityImg from "../../../images/cards/communityImg.svg";
import connectImg from "../../../images/cards/connectImg.svg";
import solutionsImg from "../../../images/cards/solutionsImg.svg";
import swagsImg from "../../../images/cards/swagsImg.svg";

const parentAnim = {
  animate: {
    transition: {
      // delayChildren: 0.4,
      staggerChildren: 0.2
    }
  }
}

const cardAnimation = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.2, 0.6, 0.51, 1],
      duration: .5
    }
  }
}


const About = () => {
  return (
    <section id="about" className="about">
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .7 }} transition={{ duration: 1 }}
        className="about__heading">What we do?</motion.h1>
      <motion.div className="about__cards" variants={parentAnim} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}>


        <motion.div className="about__card" variants={cardAnimation}>
          <div>
            <div className="about__card--image">
              <img src={connectImg} alt="connect for card" />
            </div>
          </div>

          <h3 className="about__card--heading">Teach and grow the community</h3>

        </motion.div>

        <motion.div className="about__card" variants={cardAnimation}>
          <div>
            <div className="about__card--image">
              <img src={communityImg} alt="community for card" />
            </div>
          </div>

          <h3 className="about__card--heading">Connect like minded people</h3>
        </motion.div>



        <motion.div className="about__card" variants={cardAnimation}>
          <div>
            <div className="about__card--image">
              <img src={swagsImg} alt="swags for card" />
            </div>
          </div>

          <h3 className="about__card--heading">Give away swag and incentives</h3>

        </motion.div>


        <motion.div className="about__card" variants={cardAnimation}>
          <div>
            <div className="about__card--image">
              <img src={solutionsImg} alt="solutions for card" />
            </div>
          </div>

          <h3 className="about__card--heading">Build solutions for local and global community</h3>

        </motion.div>

      </motion.div>
    </section >
  )
}

export default About;