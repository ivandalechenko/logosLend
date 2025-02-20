import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { useState } from 'react';
import TXTPlain from '../TXTPlain/TXTPlain';
import TXTSubheader from '../TXTSubheader/TXTSubheader';

const Header = () => {

  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  const toggleModal = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='Header'>
        <div className='Header__item'>
          <div className={`Header__item-burger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleModal}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to={'/Welcome'} className='Header__item-logoLink'>
            <img className='Header__item-logoimg' src="./img/logo.svg" alt="" />
            <TXTSubheader small className='Header__item-logo'>
              logos
            </TXTSubheader>
            <p className='Header__item-logo' >
            </p>
          </Link>
        </div>
        <div className='Header__item'>
          <a href="#" className='Header__item-ds'>
            <img src="./img/ds.svg" alt="" />
            <TXTSubheader small className={'Header__item-ds-a'}>
              Join Our Discord
            </TXTSubheader>
          </a>
          <Link className='Header__item-id' to={'/Login'} >
            <TXTPlain>
              <span>Connect</span> ID
            </TXTPlain>
          </Link>
        </div>
      </div>
      <div className={`Header_links ${isMobileMenuOpen && 'Header_links_open'}`}>
        <div className='Header__item Header__item-navigation'>
          {
            [
              {
                name: 'Introduction',
                to: '/Introduction',
              },
              {
                name: 'Whitepaper',
                to: 'https://whitepaper.logoslayer.com/',
                tb: true
              },
              {
                name: 'Pitch deck',
                to: '/PitchDeck',
              },
              {
                name: 'Wallet',
                to: '/Wallet',
              },
              {
                name: 'Visa Card',
                to: '/Cards',
              },
              {
                name: 'Protocols',
                to: '/Protocols',
              },
              {
                name: 'Roadmap',
                to: '/Roadmap',
              },
              {
                name: 'More',
                to: '/More',
              }
            ].map((hel, index) => {
              return <TXTPlain key={`headerLink-${index}`} className='Header__item-nav'>
                <Link
                  target={`${hel.tb ? '_blank' : '_self'}`}
                  to={hel.to}
                  onClick={() => { setisMobileMenuOpen(false) }}>
                  {hel.name}
                </Link>
              </TXTPlain>
            })
          }
        </div>
      </div>
    </>
  );
};

export default Header;
