import EventCard from "./EventCard";
import { motion } from 'framer-motion';

const parentAnim = {
  animate: {
    transition: {
      // delayChildren: 0.4,
      staggerChildren: 0.2
    }
  }
}

const Events = () => {

  return (
    <section id='events' className="events">
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .7 }} transition={{ duration: 1 }} className="events__heading">
        Events
      </motion.h1>

      <motion.div className="events__cards" variants={parentAnim} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }}>

        <EventCard />

        <EventCard />

        <EventCard />

      </motion.div>

    </section>
  )
}

export default Events;