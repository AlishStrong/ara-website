import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.jpg';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  const { t, i18n } = useTranslation();
  const [menuClosed, setMenuClosed] = useState(true);

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'ru' : 'en');
  };

  const toggleMenu = () => {
    setMenuClosed(!menuClosed);
  };

  return (
    <header id='navigation-bar' className='flex items-center justify-between p-6 flex-wrap'>
      <div id='mobile-menu' className='basis-1/3 sm:hidden'>
        <button id='mobile-menu-toggle' onClick={toggleMenu}>
          {menuClosed && <svg className="w-10 h-10 stroke-white bg-blue p-1 rounded-md hover:bg-green cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth='1.5'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>}
          {!menuClosed && <svg className="w-10 h-10 stroke-white bg-blue p-1 rounded-md hover:bg-green cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth='1.5'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>}
        </button>
      </div>
      {!menuClosed && <div className="sm:hidden order-last grow" id="mobile-menu">
        <div className="space-y-1 px-2 pb-2 border-x-2 border-b-2 rounded-b-xl border-yellow">
          <NavLink id='home-mobile' to='/' onClick={toggleMenu} className="text-base font-medium text-black px-3 pt-1 pb-2 rounded-md block hover:text-white hover:bg-blue" end>{t('ui.navigation_bar.home')}</NavLink>
          <NavLink id='about-mobile' to='/about' onClick={toggleMenu} className="text-base font-medium text-black px-3 pt-1 pb-2 rounded-md block hover:text-white hover:bg-blue">{t('ui.navigation_bar.about')}</NavLink>
          <NavLink id='events-mobile' to='/events' onClick={toggleMenu} className="text-base font-medium text-black px-3 pt-1 pb-2 rounded-md block hover:text-white hover:bg-blue">{t('ui.navigation_bar.events')}</NavLink>
          <NavLink id='news-mobile' to='/news' onClick={toggleMenu} className="text-base font-medium text-black px-3 pt-1 pb-2 rounded-md block hover:text-white hover:bg-blue">{t('ui.navigation_bar.news')}</NavLink>
          <NavLink id='contacts-mobile' to='/contacts' onClick={toggleMenu} className="text-base font-medium text-black px-3 pt-1 pb-2 rounded-md block hover:text-white hover:bg-blue">{t('ui.navigation_bar.contacts')}</NavLink>
        </div>
      </div>}

      <div id='logo-home' className='flex flex-grow justify-center sm:flex-grow-0 basis-1/3 sm:basis-auto'>
        <Link to='/' className='h-12 w-12 sm:h-16 sm:w-16 overflow-hidden rounded-full'>
          <span className="sr-only">Your Company</span>
          <img className="hover:scale-150" src={logo}></img>
        </Link>
      </div>
      <nav id='navigation-tabs' className='space-x-3 md:space-x-10 hidden sm:flex'>
        <NavLink id='home-tab' to='/' className="text-base font-medium text-black px-3 pt-1 pb-2 rounded-md hover:text-white hover:bg-blue" end>{t('ui.navigation_bar.home')}</NavLink>
        <NavLink id='about-tab' to='/about' className="text-base font-medium text-black px-3 pt-1 pb-2 rounded-md hover:text-white hover:bg-blue">{t('ui.navigation_bar.about')}</NavLink>
        <NavLink id='events-tab' to='/events' className="text-base font-medium text-black px-3 pt-1 pb-2 rounded-md hover:text-white hover:bg-blue">{t('ui.navigation_bar.events')}</NavLink>
        <NavLink id='news-tab' to='/news' className="text-base font-medium text-black px-3 pt-1 pb-2 rounded-md hover:text-white hover:bg-blue">{t('ui.navigation_bar.news')}</NavLink>
        <NavLink id='contacts-tab' to='/contacts' className="text-base font-medium text-black px-3 pt-1 pb-2 rounded-md hover:text-white hover:bg-blue">{t('ui.navigation_bar.contacts')}</NavLink>
      </nav>
      <div id='language-setter' className='flex justify-end overflow-hidden basis-1/3 sm:basis-auto'>
        <button onClick={changeLanguage} className='inline-flex items-center justify-center px-4 py-2 bg-blue text-base font-semibold rounded-md text-white hover:bg-green'>{i18n.resolvedLanguage.toLocaleUpperCase()}</button>
      </div>
    </header>
  );
};

export default NavigationBar;
