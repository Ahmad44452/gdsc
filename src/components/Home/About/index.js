const About = () => {

  return (
    <section id="about" className={`about`}>
      <h1
        className="about__heading">What we do?
      </h1>


      <div className="about__cards" >


        <div
          className="about__card about__card--blue">
          <div>
            <div className="about__card--image">
              <img src='./images/cards/connectImg.svg' alt="connect for card" />
            </div>
          </div>

          <h3 className="about__card--heading">Teach and grow the community</h3>

        </div>

        <div

          className="about__card about__card--red" >
          <div>
            <div className="about__card--image">
              <img src='./images/cards/communityImg.svg' alt="community for card" />
            </div>
          </div>

          <h3 className="about__card--heading">Connect like minded people</h3>
        </div>



        <div

          className="about__card about__card--yellow">
          <div>
            <div className="about__card--image">
              <img src='./images/cards/swagsImg.svg' alt="swags for card" />
            </div>
          </div>

          <h3 className="about__card--heading">Give away swag and incentives</h3>

        </div>


        <div

          className="about__card about__card--green">
          <div>
            <div className="about__card--image">
              <img src='./images/cards/solutionsImg.svg' alt="solutions for card" />
            </div>
          </div>

          <h3 className="about__card--heading">Build solutions for local and global community</h3>

        </div>

      </div>
    </section >
  )
}

export default About;