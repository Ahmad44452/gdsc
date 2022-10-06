import TeamCard from "../../TeamCard";
import { motion } from 'framer-motion';

const parentAnim = {
  animate: {
    transition: {
      // delayChildren: 0.4,
      staggerChildren: 0.2
    }
  }
}

export const cardAnimation = {
  initial: {
    opacity: 0,
    y: 300
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.2, 0.6, 0.51, 1],
      duration: 1
    }
  }
}


const Team = () => {
  return (
    <section id="team" className="team">
      <motion.h1 className="team__heading" viewport={{ once: true, amount: 0.7 }}>
        Core Team
      </motion.h1>

      <motion.div className="team__cards" variants={parentAnim} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}>
        <TeamCard
          pfp='https://i.imgur.com/hmaeSRo.jpg'
          name='Abdul Raheem'
          role='GDSC Lead'
          linkedin='null'
          github='null'
          twitter='null'
        />

        <TeamCard
          pfp='https://i.imgur.com/qWY1FDL.jpg'
          name='Ahmad Raza'
          role='Web Development Lead'
          linkedin='https://www.linkedin.com/in/ahmadraza365/'
          github='empty'
          twitter='https://twitter.com/ahmadraza365'
        />

        <TeamCard
          pfp='https://i.imgur.com/epZ3UIK.jpg'
          name='Ahmad Chaudhary'
          role='Event Management Lead'
          linkedin='https://www.linkedin.com/in/muhammad-ahmad-662835153'
          github='null'
          twitter='https://twitter.com/M_Ahmad_9'
        />

        <TeamCard
          pfp='https://i.imgur.com/oYRBR0C.png'
          name='Arslan Khalid'
          role='Graphics Lead'
          linkedin='https://www.linkedin.com/in/arslan4real/'
          github='null'
          twitter='https://twitter.com/arslaann44'
        />

        <TeamCard
          pfp='https://i.imgur.com/7p6yjbZ.jpg'
          name='Habib ur Rehman'
          role='Public Relation Lead'
          linkedin='https://www.linkedin.com/in/hafiz-habib-ur-rehman-021637205'
          github='null'
          twitter='https://twitter.com/thehabiburrehma'
        />

        <TeamCard
          pfp='https://i.imgur.com/CZ4Ot94.jpg'
          name='Hamza Ghafoor'
          role='Creative Lead'
          linkedin='https://www.linkedin.com/in/hamza-ghafoor-a2247022a'
          github='null'
          twitter='https://twitter.com/HZG4H?t=RPNohD9N4W58BkvQTpepBQ&s=08'
        />

        <TeamCard
          pfp='https://i.imgur.com/fx25UXy.png'
          name='Iqra Mahmood'
          role='Machine Learning Lead'
          linkedin='https://www.linkedin.com/in/hafiza-iqra-mahmood/'
          github='null'
          twitter='https://twitter.com/Iqra_Multaji'
        />

        <TeamCard
          pfp='https://i.imgur.com/RSY4sWG.jpg'
          name='Nabeel Ahmad'
          role='Competative Programming Lead'
          linkedin='https://www.linkedin.com/in/nabeelahmedjh/'
          github='null'
          twitter='https://twitter.com/nabeelahmedjh'
        />

        <TeamCard
          pfp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5_vFR0vaXPqmLRNTAY4dZPuiaodrxK5UuQ&usqp=CAU'
          name='Eatsam Ul Haq'
          role='Technical Lead'
          linkedin='null'
          github='null'
          twitter='null'
        />

      </motion.div>
    </section>
  )
}

export default Team;