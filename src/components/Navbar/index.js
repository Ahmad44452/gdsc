import { motion } from 'framer-motion';
import { NavHashLink } from "react-router-hash-link";
import useScrollPosition from "../../hooks/useScrollPosition";

import DSCLogo from "../../images/dsclogo.png";

const Navbar = () => {

  const scrollPosition = useScrollPosition();

  return (
    <motion.nav
      animate={{ opacity: [0, 1] }}
      transition={{ duration: .5, delay: 2.5 }}
      className={`navbar ${scrollPosition > 0 ? 'navbar__scrolled' : ''}`}>
      <div className="navbar__left">
        <NavHashLink smooth replace className="navbar__left--link" to={'/#header'}>
          <img className="navbar__left--img" src={DSCLogo} alt='Navbar Logo' />
        </NavHashLink>
      </div>
      <div className="navbar__right">
        <div className='navbar__links'>
          <NavHashLink smooth replace className="navbar__right--link" to={'/#about'}>
            <span>About</span>
          </NavHashLink>
          <NavHashLink smooth replace className="navbar__right--link" to={'/#team'}>
            <span>Team</span>
          </NavHashLink>
          <NavHashLink smooth replace className="navbar__right--link" to={'/#events'}>
            <span>Events</span>
          </NavHashLink>
          <NavHashLink smooth replace className="navbar__right--link" to={'/#sponsors'}>
            <span>Sponsors</span>
          </NavHashLink>
        </div>

        <div className='navbar__ham'>
          <div className='navbar__ham--icon'>&nbsp;</div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar;