import './App.css';
import logo from './logo.jpg';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'ru' : 'en');
  };

  return(
    <div className='h-screen max-w-5xl mx-auto'>
      <header id='navigation-bar' className='flex items-center justify-between p-6'>
        <div id='logo-home' className='flex justify-start'>
          <a href="#" className='h-8 w-8 sm:h-16 sm:w-16 overflow-hidden rounded-full '>
            <span className="sr-only">Your Company</span>
            <img className="hover:scale-150" src={logo}></img>
          </a>
        </div>
        <nav id='navigation-tabs' className='flex space-x-10'>
          <a id='home-tab' href="#" className="text-base font-medium text-black hover:text-blue">{t('ui.navigation_bar.home')}</a>
          <a id='events-tab' href="#" className="text-base font-medium text-black hover:text-blue">{t('ui.navigation_bar.events')}</a>
          <a id='board-tab' href="#" className="text-base font-medium text-black hover:text-blue">{t('ui.navigation_bar.board')}</a>
          <a id='membership-tab' href="#" className="text-base font-medium text-black hover:text-blue">{t('ui.navigation_bar.membership')}</a>
          <a id='contacts-tab' href="#" className="text-base font-medium text-black hover:text-blue">{t('ui.navigation_bar.contacts')}</a>
        </nav>
        <div id='language-setter' className='flex justify-end overflow-hidden'>
          <button onClick={changeLanguage} className='inline-flex items-center justify-center px-4 py-2 bg-blue text-base font-semibold rounded-md text-white hover:bg-green'>{i18n.resolvedLanguage.toLocaleUpperCase()}</button>
        </div>
      </header>
    </div>
  );
};

export default App;
