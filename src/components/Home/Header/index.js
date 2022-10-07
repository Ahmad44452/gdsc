import { motion } from 'framer-motion';
import BackgroundBG from "../../../images/building-bg.svg";

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

  return (
    <section id="header" className="header">
      {/* <motion.img
        animate={{ opacity: [0, 1] }}
        transition={{ duration: .5, delay: 2.5 }}
        src={BackgroundBG} alt='background-building' className='header__bg' /> */}

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

        <motion.div className="header__container--right" animate={{ scale: [0, 1] }} transition={{ duration: 1, delay: 2 }}>
          <div className="header__box">
            <div className="header__box--image">
              <svg width="604" height="522" viewBox="0 0 604 522" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_36_2)">
                  <path d="M219.09 44L212.685 254.839L195.363 245.954L205.043 57.0246L219.09 44Z" fill="#235BC6" stroke="black" strokeWidth="1.5" />
                  <path d="M335.467 318.907L212.685 254.839L219.308 44.3982L307.955 130.445L335.467 318.907Z" fill="#6A9DFF" stroke="black" strokeWidth="1.5" />
                  <path d="M282.992 124.366L254.971 99.5803V123.43L269.236 135.121L282.992 124.366Z" fill="#E59100" stroke="black" strokeWidth="1.5" />
                  <path d="M285.539 151.957L282.992 124.366L268.727 135.122V137.927L285.539 151.957Z" fill="#F0C14B" stroke="black" strokeWidth="1.5" />
                  <path d="M362.468 329.845L195.873 244.733L179.57 529.998H400.169L362.468 329.845Z" fill="#6A9DFF" stroke="black" strokeWidth="1.5" />
                  <path d="M179.57 529.998L195.873 244.266L153.587 267.648L122 529.998H179.57Z" fill="#235BC6" stroke="black" strokeWidth="1.5" />
                  <path d="M255 125.338V123L268.756 134.224V137.497L255 125.338Z" fill="#FBBC04" stroke="black" strokeWidth="1.5" />
                  <path d="M182.09 88L175.685 298.839L158.363 289.954L168.043 101.025L182.09 88Z" fill="#DCA70B" />
                  <path d="M298.467 362.907L175.685 298.839L182.308 88.3982L270.955 174.445L298.467 362.907Z" fill="#DCA70B" />
                  <path d="M245.992 168.366L217.971 143.58V167.43L232.236 179.121L245.992 168.366Z" fill="#DCA70B" />
                  <path d="M248.539 195.957L245.992 168.366L231.727 179.122V181.927L248.539 195.957Z" fill="#DCA70B" />
                  <path d="M325.468 373.845L158.873 288.733L142.57 573.998H363.169L325.468 373.845Z" fill="#DCA70B" />
                  <path d="M142.57 573.998L158.873 288.266L116.587 311.648L85 573.998H142.57Z" fill="#DCA70B" />
                  <path d="M218 169.338V167L231.756 178.224V181.497L218 169.338Z" fill="#DCA70B" />
                  <path d="M219.09 44L212.685 254.839L195.363 245.954L205.043 57.0246L219.09 44Z" fill="#235BC6" stroke="black" strokeWidth="1.5" />
                  <path d="M335.467 318.907L212.685 254.839L219.308 44.3982L307.955 130.445L335.467 318.907Z" fill="#6A9DFF" stroke="black" strokeWidth="1.5" />
                  <path d="M282.992 124.366L254.971 99.5803V123.43L269.236 135.121L282.992 124.366Z" fill="#E59100" stroke="black" strokeWidth="1.5" />
                  <path d="M285.539 151.957L282.992 124.366L268.727 135.122V137.927L285.539 151.957Z" fill="#F0C14B" stroke="black" strokeWidth="1.5" />
                  <path d="M362.468 329.845L195.873 244.733L179.57 529.998H400.169L362.468 329.845Z" fill="#6A9DFF" stroke="black" strokeWidth="1.5" />
                  <path d="M179.57 529.998L195.873 244.266L153.587 267.648L122 529.998H179.57Z" fill="#235BC6" stroke="black" strokeWidth="1.5" />
                  <path d="M255 125.338V123L268.756 134.224V137.497L255 125.338Z" fill="#FBBC04" stroke="black" strokeWidth="1.5" />
                  <path d="M297.096 129.76C301.069 128.964 304.195 125.844 305 121.875C305.805 125.844 308.931 128.964 312.904 129.76C308.931 130.556 305.805 133.676 305 137.645C304.195 133.676 301.069 130.556 297.096 129.76Z" fill="white" stroke="#1E1E1E" />
                </g>
                <defs>
                  <clipPath id="clip0_36_2">
                    <rect width="604" height="522" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section >
  )
}

export default Header;