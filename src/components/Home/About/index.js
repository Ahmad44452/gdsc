import { motion } from 'framer-motion';
import { useState } from 'react';

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

  const [color, setColor] = useState(null);

  return (
    <section id="about" className={`about about__${color}`}>
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .7 }} transition={{ duration: 1 }}
        className="about__heading">What we do?
      </motion.h1>
      <motion.div className="about__cards" variants={parentAnim} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }}>


        <motion.div
          onMouseEnter={() => setColor('blue')} onMouseLeave={() => setColor('null')}
          className="about__card about__card--blue" variants={cardAnimation}>
          <div>
            <div className="about__card--image">
              <img src={connectImg} alt="connect for card" />
            </div>
          </div>

          <h3 className="about__card--heading">Teach and grow the community</h3>

        </motion.div>

        <motion.div
          onMouseEnter={() => setColor('red')} onMouseLeave={() => setColor('null')}
          className="about__card about__card--red" variants={cardAnimation}>
          <div>
            <div className="about__card--image">
              <img src={communityImg} alt="community for card" />
            </div>
          </div>

          <h3 className="about__card--heading">Connect like minded people</h3>
        </motion.div>



        <motion.div
          onMouseEnter={() => setColor('yellow')} onMouseLeave={() => setColor('null')}
          className="about__card about__card--yellow" variants={cardAnimation}>
          <div>
            <div className="about__card--image">
              <img src={swagsImg} alt="swags for card" />
            </div>
          </div>

          <h3 className="about__card--heading">Give away swag and incentives</h3>

        </motion.div>


        <motion.div
          onMouseEnter={() => setColor('green')} onMouseLeave={() => setColor('null')}
          className="about__card about__card--green" variants={cardAnimation}>
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