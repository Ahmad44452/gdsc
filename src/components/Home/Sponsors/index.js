import { motion } from 'framer-motion';

const Sponsors = () => {
  return (
    <div className="sponsors__wrap" id="sponsors">
      <h1 className="sponsors__heading">Sponsors</h1>
      <motion.div className="sponsors" initial={{ x: '110%' }} animate={{ x: '-530rem' }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}>
        <img src="https://i.imgur.com/U6FxoV6.png" alt="microsoft" />
        <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png' alt="github" />
        <img src="https://i.imgur.com/Xzu1ynM.png" alt="meta school" />

        <img src="https://i.imgur.com/U6FxoV6.png" alt="microsoft" />
        <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png' alt="github" />
        <img src="https://i.imgur.com/Xzu1ynM.png" alt="meta school" />

        <img src="https://i.imgur.com/U6FxoV6.png" alt="microsoft" />
        <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png' alt="github" />
        <img src="https://i.imgur.com/Xzu1ynM.png" alt="meta school" />

        <img src="https://i.imgur.com/U6FxoV6.png" alt="microsoft" />
        <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png' alt="github" />
        <img src="https://i.imgur.com/Xzu1ynM.png" alt="meta school" />

        <img src="https://i.imgur.com/U6FxoV6.png" alt="microsoft" />
        <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png' alt="github" />
        <img src="https://i.imgur.com/Xzu1ynM.png" alt="meta school" />
      </motion.div>
    </div>

  )
}

export default Sponsors;