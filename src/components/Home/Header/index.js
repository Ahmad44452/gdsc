import { motion } from 'framer-motion';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  }
}

const letterAnimation = {
  initial: {
    y: 400
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1
    }
  }
}


const Header = () => {

  const lottieRef = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../images/networkGlobe.json')
    })
  }, [])


  return (
    <section id="header" className="header">

      <div className="header__container">
        <div className="header__container--left">
          <div className="header__heading">
            <motion.h1 className="header__heading--main" variants={banner} >
              <motion.div className="header__heading--main-1" variants={banner} initial='initial' animate='animate' >
                {[...'Google'].map((letter, index) => (
                  <motion.span style={{ display: 'inline-block' }} key={index} variants={letterAnimation}>{letter}</motion.span>
                ))}
              </motion.div>
              <motion.div className="header__heading--main-2" variants={banner} initial='initial' animate='animate'>
                {[...'Developers'].map((letter, index) => (
                  <motion.span style={{ display: 'inline-block' }} key={index} variants={letterAnimation}>{letter}</motion.span>
                ))}
              </motion.div>
              <br />
              <motion.div className="header__heading--main-3" variants={banner} initial='initial' animate='animate'>
                {[...'Students'].map((letter, index) => (
                  <motion.span style={{ display: 'inline-block' }} key={index} variants={letterAnimation}>{letter}</motion.span>
                ))}
              </motion.div>
              <motion.div className="header__heading--main-4" variants={banner} initial='initial' animate='animate'>
                {[...'Club'].map((letter, index) => (
                  <motion.span style={{ display: 'inline-block' }} key={index} variants={letterAnimation}>{letter}</motion.span>
                ))}
              </motion.div>
            </motion.h1>
          </div>
          <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, delay: 1.2 }}>
            <h2 className="header__heading--sub">COMSATS, Sahiwal Chapter</h2>
            <p className="header__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="https://www.google.com" className="header__button" target={'_blank'} rel="noreferrer">Become a member</a>
          </motion.div>

        </div>

        <motion.div className="header__container--right">
          <motion.div className='header__box' ref={lottieRef}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 2 }}>
            &nbsp;
          </motion.div>
        </motion.div>
      </div>
    </section >
  )
}

export default Header;