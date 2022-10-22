import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.jpg';
import { NavLink, Link } from 'react-router-dom';

const NavigationBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'ru' : 'en');
  };

  return (
    <header id='navigation-bar' className='flex items-center justify-between p-6'>
      <div id='logo-home' className='flex justify-start'>
        <Link to='/' className='h-8 w-8 sm:h-16 sm:w-16 overflow-hidden rounded-full '>
          <span className="sr-only">Your Company</span>
          <img className="hover:scale-150" src={logo}></img>
        </Link>
      </div>
      <nav id='navigation-tabs' className='flex space-x-10'>
        <NavLink id='home-tab' to='/' className="text-base font-medium text-black hover:text-blue" end>{t('ui.navigation_bar.home')}</NavLink>
        <NavLink id='about-tab' to='/about' className="text-base font-medium text-black hover:text-blue">{t('ui.navigation_bar.about')}</NavLink>
        <NavLink id='events-tab' to='/events' className="text-base font-medium text-black hover:text-blue">{t('ui.navigation_bar.events')}</NavLink>
        <NavLink id='news-tab' to='/news' className="text-base font-medium text-black hover:text-blue">{t('ui.navigation_bar.news')}</NavLink>
        <NavLink id='contacts-tab' to='/contacts' className="text-base font-medium text-black hover:text-blue">{t('ui.navigation_bar.contacts')}</NavLink>
      </nav>
      <div id='language-setter' className='flex justify-end overflow-hidden'>
        <button onClick={changeLanguage} className='inline-flex items-center justify-center px-4 py-2 bg-blue text-base font-semibold rounded-md text-white hover:bg-green'>{i18n.resolvedLanguage.toLocaleUpperCase()}</button>
      </div>
    </header>
  );
};

export default NavigationBar;
