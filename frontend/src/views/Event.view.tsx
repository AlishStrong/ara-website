import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Event, EventClass, EventJson } from '../models/Event.model';
import { useParams, useNavigate } from 'react-router-dom';

const EventView = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (eventId && !isNaN(+eventId) && parseInt(eventId)) {
      const id = +eventId;
      axios.get('/events_mock.json')
        .then(result => result.data)
        .then((events: EventJson[]) => events.find(e => e.id === id))
        .then((ej: EventJson | undefined) => {
          if (ej) {
            setEvent(new EventClass(ej).getEvent(i18n.resolvedLanguage.toLocaleLowerCase()));
          } else {
            navigate('/');
          }
        });
    } else {
      navigate('/');
    }
  }, [i18n.resolvedLanguage]);

  return (
    <>
      { event &&
        <div>
          <h2>{event.title}</h2>
          <p>{event.date.toLocaleDateString('fi')}</p>
          <p>{event.description}</p>
        </div>
      }
    </>
  );
};

export default EventView;
