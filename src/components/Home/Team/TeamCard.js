const TeamCard = ({ pfp, name, role, linkedin, github, twitter }) => {

  return (
    <div className="team__card">
      <div className="team__card--img">
        <img src={pfp} alt='pfp' />
      </div>
      <div className="team__card--name">{name}</div>
      <div className="team__card--role">{role}</div>
      <div className="team__card--links">

        <a href={linkedin} target={"_blank"} rel="noreferrer" className='team__card--link team__card--link-linkedin'>
          <img className='team__card--link-icon' src='./images/teamicons/linkedin.png' alt="linkedin icon" />
          LinkedIn
        </a>

        <a href={github} target={"_blank"} rel="noreferrer" className='team__card--link team__card--link-github'>
          <img className='team__card--link-icon' src='./images/teamicons/github.png' alt="github icon" />
          Github
        </a>

        <a href={twitter} target={"_blank"} rel="noreferrer" className='team__card--link team__card--link-twitter'>
          <img className='team__card--link-icon' src='./images/teamicons/twitter.png' alt="twitter icon" />
          Twitter
        </a>
      </div>
    </div>
  )
}

export default TeamCard;