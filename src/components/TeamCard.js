import { motion } from 'framer-motion';
import GithubIcon from '../images/teamicons/github.png';
import LinkedinIcon from '../images/teamicons/linkedin.png';
import TwitterIcon from '../images/teamicons/twitter.png';

import { cardAnimation } from './Home/Team';

// const cardAnimation = {
//   initial: {
//     opacity: 0,
//     y: 300
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       ease: [0.2, 0.6, 0.51, 1],
//       duration: 1
//     }
//   }
// }

const TeamCard = ({ pfp, name, role, linkedin, github, twitter }) => {

  return (
    <motion.div className="team__card" variants={cardAnimation}>
      <div className="team__card--img">

        <img src={pfp} alt='pfp' />


      </div>
      <div className="team__card--name">{name}</div>
      <div className="team__card--role">{role}</div>
      <div className="team__card--links">

        <a href={linkedin} target={"_blank"} rel="noreferrer" className='team__card--link team__card--link-linkedin'>
          <img className='team__card--link-icon' src={LinkedinIcon} alt="linkedin icon" />
          LinkedIn
        </a>

        <a href={github} target={"_blank"} rel="noreferrer" className='team__card--link team__card--link-github'>
          <img className='team__card--link-icon' src={GithubIcon} alt="github icon" />
          Github
        </a>

        <a href={twitter} target={"_blank"} rel="noreferrer" className='team__card--link team__card--link-twitter'>
          <img className='team__card--link-icon' src={TwitterIcon} alt="twitter icon" />
          Twitter
        </a>
      </div>
    </motion.div>
  )
}

export default TeamCard;