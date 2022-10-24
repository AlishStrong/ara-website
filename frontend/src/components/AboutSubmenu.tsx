import { NavLink } from 'react-router-dom';
import './AboutSubmenu.css';
import { useTranslation } from 'react-i18next';

const AboutSubmenu = () => {
  const { t } = useTranslation();

  return (
    <nav id='about-sidebar' className='flex flex-row flex-wrap justify-between p-4 shadow rounded-lg md:flex-col md:space-y-1 md:justify-start'>
      <NavLink to='/about' className='hover:bg-blue group flex items-center px-2 py-2 text-sm font-medium rounded-md' end>
        <svg className='mr-3 flex-shrink-0 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18' />
        </svg>
        <span className='flex-1'>{t('ui.about_view.sidebar.about')}</span>
      </NavLink>
      <NavLink to='/about/membership' className='hover:bg-blue group flex items-center px-2 py-2 text-sm font-medium rounded-md'>
        <svg className="mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='1.5' stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
        </svg>
        <span className='flex-1'>{t('ui.about_view.sidebar.membership')}</span>
      </NavLink>
      <NavLink to='/about/board' className='hover:bg-blue group flex items-center px-2 py-2 text-sm font-medium rounded-md'>
        <svg className='mr-3 flex-shrink-0 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
        </svg>
        <span className='flex-1'>{t('ui.about_view.sidebar.board')}</span>
      </NavLink>
      <NavLink to='/about/documents' className='hover:bg-blue group flex items-center px-2 py-2 text-sm font-medium rounded-md'>
        <svg className='mr-3 flex-shrink-0 h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z' />
        </svg>
        <span className='flex-1'>{t('ui.about_view.sidebar.documents')}</span>
      </NavLink>
    </nav>


  );
};

export default AboutSubmenu;
