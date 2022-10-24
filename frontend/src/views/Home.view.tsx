import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Event, EventClass, EventJson } from '../models/Event.model';
import { Link } from 'react-router-dom';

const HomeView = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    axios.get('events_mock.json')
      .then(result => result.data)
      .then((events: EventJson[]) => events.map(ej => new EventClass(ej).getEvent(i18n.resolvedLanguage.toLocaleLowerCase())))
      .then((localizedEvents: Event[]) => setEvents(localizedEvents));
  }, [i18n.resolvedLanguage]);

  return (
    <div id='home-view' className='grid grid-cols-1 gap-4 px-6 md:grid-cols-5 lg:grid-cols-3'>
      <div className='grid grid-cols-1 gap-4 md:col-span-3 lg:col-span-2'>
        <section id='home-welcome-message'>
          <div className='p-4 rounded-lg shadow'>
            <h2 id='home-welcome-header' className='font-bold'>{t('ui.home_view.welcome.header')}</h2>
            <p className='mt-4'>{t('ui.home_view.welcome.message')}</p>
          </div>
        </section>
        <div id='home-events-mobile' className='md:hidden'>
          <HomeEvents events={events} media={'mobile'} />
        </div>
        <section id='home-news'>
          <div className='p-4 rounded-lg shadow'>
            <h2 id='home-news-header' className='font-bold'>{t('ui.home_view.news.header')}</h2>
            <p className='mt-4'>
            </p>
          </div>
        </section>
      </div>
      <div id='home-events-md' className='hidden md:block md:col-span-2 lg:col-span-1'>
        <HomeEvents events={events} media={'md'} />
      </div>
    </div>
  );
};

type HomeEventsProps = {
  events: Event[],
  media: 'md' | 'mobile'
}

const HomeEvents = ({ events, media }: HomeEventsProps) => {
  const { t } = useTranslation();

  return (
    <section id={'home-events-' + media}>
      <div className='p-4 rounded-lg shadow'>
        <h2 className='font-bold'>{t('ui.home_view.events.header')}</h2>
        <ul role='list' className='divide-y'>
          {events.map(e => (
            <li role='listitem' key={`${e.id}-${media}`} className='hover:font-medium hover:text-blue py-2 last:pb-0'>
              <Link to={`/events/${e.id}`} className='flex justify-between'>
                <div>{e.title}</div>
                <div className="flex items-center text-sm">
                  <svg className="mr-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd"></path>
                  </svg>
                  <p>
                    <time dateTime={`${e.date}`}>{e.date.toLocaleDateString('fi')}</time>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeView;
