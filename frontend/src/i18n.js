import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          ui: {
            navigation_bar: {
              home: 'Home',
              about: 'About ARA',
              events: 'Events',
              news: 'News',
              contacts: 'Contacts'
            },
            home_view: {
              welcome: {
                header: 'Welcome to Aalto Russian-speaking Association',
                message: 'Aalto Russian-speaking Association ry or "ARA" is a international community of Aalto students. Our mission is to unite and organise events in Aalto for all interested in slavic language and culture. Our events are public for all students of Aalto who are interested in Russian language and culture.'
              },
              news: {
                header: 'Latest news'
              },
              events: {
                header: 'Upcoming events'
              }
            },
            about_view: {
              sidebar: {
                about: 'About ARA',
                board: 'Board members',
                documents: 'Documents'
              },
              about_ara: 'Aalto Russian-speaking Association ry or "ARA" is a international community of Aalto students. Our mission is to unite and organise events in Aalto for all interested in slavic language and culture. Our events are public for all students of Aalto who are interested in Russian language and culture. ARA started in late fall of 2020 with a telegram chat at t.me/aaltorussian. Chat is public and we encourage all interested to join!',
              board_info: 'In April 2022 at the annual meeting a new board was elected. The 2022 board members are:'
            }
          }
        }
      },
      ru: {
        translation: {
          ui: {
            navigation_bar: {
              home: 'Дом',
              about: 'Об АРА',
              events: 'Мероприятия',
              news: 'Новости',
              contacts: 'Контакты'
            },
            home_view: {
              welcome: {
                header: 'Добро пожаловать в Ассоциацию Русскоязычных Аалто',
                message: 'Ассоциация Русскоязычных Аалто или «АРА» — международное сообщество студентов Аалто. Наша миссия — объединять и организовывать мероприятия в Аалто для всех интересующихся славянским языком и культурой. Наши мероприятия открыты для всех студентов Аалто, интересующихся русским языком и культурой.'
              },
              news: {
                header: 'Последние новости'
              },
              events: {
                header: 'Предстоящие мероприятия'
              }
            },
            about_view: {
              sidebar: {
                about: 'Об АРА',
                board: 'Члены правления',
                documents: 'Документы'
              },
              about_ara: 'Ассоциация Русскоязычных Аалто или «АРА» — международное сообщество студентов Аалто. Наша миссия — объединять и организовывать мероприятия в Аалто для всех интересующихся славянским языком и культурой. Наши мероприятия открыты для всех студентов Аалто, интересующихся русским языком и культурой. ARA стартовала поздней осенью 2020 года с телеграм-чата на t.me/aaltorussian. Чат является общедоступным, и мы призываем всех желающих присоединиться!',
              board_info: 'В апреле 2022 года на годовом собрании был избран новый состав правления. Члены правления 2022 года:'
            }
          }
        }
      }
    }
  });

export default i18n;
