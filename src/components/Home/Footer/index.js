import { SiGmail, SiLinkedin, SiTwitter, SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className='footer__image'>
          <img src='./images/Logo.svg' alt="GDSC COMSATS LOGO" />
        </div>
        <div className='footer__right'>
          <div>
            <h3 className='footer__heading'>Social Accounts</h3>
            <div className='footer__links'>
              <a className='footer__link footer__link--gmail' href='https://gmail.com' target='_blank' rel='noreferrer'>
                <SiGmail />
              </a>

              <a className='footer__link footer__link--linkedin' href='https://www.linkedin.com/company/gdsc-comsats-sahiwal/' target='_blank' rel='noreferrer'>
                <SiLinkedin />
              </a>

              <a className='footer__link footer__link--twitter' href='https://twitter.com' target='_blank' rel='noreferrer'>
                <SiTwitter />
              </a>

              <a className='footer__link footer__link--facebook' href='https://facebook.com' target='_blank' rel='noreferrer'>
                <SiFacebook />
              </a>

              <a className='footer__link footer__link--instagram' href='https://instagram.com' target='_blank' rel='noreferrer'>
                <SiInstagram />
              </a>

              <a className='footer__link footer__link--whatsapp' href='https://whatsapp.com' target='_blank' rel='noreferrer'>
                <SiWhatsapp />
              </a>
            </div>
          </div>

          <div className='footer__credits'>
            © All rights reserved by GDSC COMSATS, Sahiwal
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;