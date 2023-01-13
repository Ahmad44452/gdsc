const EventCard = () => {
  return (
    <div className="events__card">
      <div className="events__card--img">
        <img src="https://i.imgur.com/cO7Dhvx.png" alt="event one" />
      </div>

      <div className="events__card--info">
        <div className='events__card--info-up'>
          <div className='events__card--date'>
            <img src='./images/events/calendar.svg' alt="calendar" />
            <span>October 20, 2022</span>
          </div>

          <div className='events__card--time'>
            <img src='./images/events/clock.svg' alt="clock" />
            <span>12:40 PM — 01:40 PM</span>
          </div>
        </div>
        <div className='events__card--info-down'>
          <div className='events__card--location'>
            <img src='./images/events/marker.svg' alt="marker" />
            <span>Auditorium, 1st floor, A-block, Sahiwal Campus, CUI</span>
          </div>
        </div>
      </div>

      <div className='events__card--text'>
        <h4 className='events__card--headline'>This is the headline of the event.</h4>
        <p className='events__card--description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className='events__card--button'>
        Register
      </button>
    </div>
  )
}

export default EventCard;