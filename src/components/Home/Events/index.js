import EventCard from "./EventCard";

const Events = () => {

  return (
    <section id='events' className="events">
      <h1 className="events__heading">
        Events
      </h1>

      <div className="events__cards">

        <EventCard />

        <EventCard />

        <EventCard />

      </div>

    </section>
  )
}

export default Events;