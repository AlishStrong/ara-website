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
            footer: {
              registry: 'Registration ID',
              contact: 'Find us on:',
              links: {
                title: 'Useful links:',
                uni: 'Aalto University',
                ayy: 'Aalto University Student Union'
              }
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
                membership: 'Membership',
                board: 'Board members',
                documents: 'Documents'
              },
              about_ara: 'Aalto Russian-speaking Association ry or "ARA" is a international community of Aalto students. Our mission is to unite and organise events in Aalto for all interested in slavic language and culture. Our events are public for all students of Aalto who are interested in Russian language and culture. ARA started in late fall of 2020 with a telegram chat at t.me/aaltorussian. Chat is public and we encourage all interested to join!',
              membership: {
                title: 'Membership at ARA',
                text: 'Official membership at ARA is open to all students of Aalto University. It has an annual cost of 5 euros. Official membership allows to vote and be elected to the association board. Moreover, some events organized by ARA are free or offered at a discounted price for official members only. In order to apply for the membership, please fill out a form from this link:',
                link: 'Link to the application form'
              },
              board_info: 'In April 2022 at the annual meeting a new board was elected. The 2022 board members are:'
            },
            contacts_view: {
              general: {
                title: 'General contact information',
                registry: 'Registration ID',
                email: 'Email:'
              },
              telegram: {
                title: 'Join our Telegram chat',
                p1: 'ARA started as a Telegram chat, which grew into a big community and a distinct student association within the walls of Aalto University.',
                p2: 'The original Telegram chat still operates and works as the main platform for the association&lsquo;s life and event announcement.',
                nb: 'NB! please familiarise yourselves with the chat rules!',
                link: 'Link to the chat'
              },
              instagram: {
                title: 'Follow us on Instagram',
                p1: 'Our instagram is another platform for keeping our community up-to-date about events and social life of our association.',
                p2: 'Feel free to follow us and see pictures from the events you attended or could not take part in.',
                link: 'Link to Instagram profile'
              }
            }
          }
        }
      },
      ru: {
        translation: {
          ui: {
            navigation_bar: {
              home: '??????',
              about: '???? ??????',
              events: '??????????????????????',
              news: '??????????????',
              contacts: '????????????????'
            },
            footer: {
              registry: '?????????????????????????????? ??????????',
              contact: '???? ??:',
              links: {
                title: '???????????????? ????????????:',
                uni: '?????????????????????? ??????????',
                ayy: '???????????????????????? ???????? ???????????????????????? ??????????'
              }
            },
            home_view: {
              welcome: {
                header: '?????????? ???????????????????? ?? ???????????????????? ?????????????????????????? ??????????',
                message: '???????????????????? ?????????????????????????? ?????????? ?????? ?????????? ??? ?????????????????????????? ???????????????????? ?????????????????? ??????????. ???????? ???????????? ??? ???????????????????? ?? ???????????????????????????? ?????????????????????? ?? ?????????? ?????? ???????? ???????????????????????????? ???????????????????? ???????????? ?? ??????????????????. ???????? ?????????????????????? ?????????????? ?????? ???????? ?????????????????? ??????????, ???????????????????????????? ?????????????? ???????????? ?? ??????????????????.'
              },
              news: {
                header: '?????????????????? ??????????????'
              },
              events: {
                header: '?????????????????????? ??????????????????????'
              }
            },
            about_view: {
              sidebar: {
                about: '???? ??????',
                membership: '????????????????',
                board: '?????????? ??????????????????',
                documents: '??????????????????'
              },
              about_ara: '???????????????????? ?????????????????????????? ?????????? ?????? ?????????? ??? ?????????????????????????? ???????????????????? ?????????????????? ??????????. ???????? ???????????? ??? ???????????????????? ?? ???????????????????????????? ?????????????????????? ?? ?????????? ?????? ???????? ???????????????????????????? ???????????????????? ???????????? ?? ??????????????????. ???????? ?????????????????????? ?????????????? ?????? ???????? ?????????????????? ??????????, ???????????????????????????? ?????????????? ???????????? ?? ??????????????????. ARA ???????????????????? ?????????????? ???????????? 2020 ???????? ?? ????????????????-???????? ???? t.me/aaltorussian. ?????? ???????????????? ??????????????????????????, ?? ???? ?????????????????? ???????? ???????????????? ????????????????????????????!',
              membership: {
                title: '???????????????? ?? ??????',
                text: '?????????????????????? ???????????????? ?? ARA ?????????????? ?????? ???????? ?????????????????? ???????????????????????? ??????????. ?????? ?????????????? ?????????????????? ???????????????????? 5 ????????. ?????????????????????? ???????????????? ?????????????????? ???????????????????? ?? ???????? ?????????????????? ?? ?????????????????? ????????????????????. ?????????? ????????, ?????????????????? ??????????????????????, ???????????????????????????? ARA, ?????????????????? ?????? ???????????????????????? ???? ?????????????????? ???????? ???????????? ?????? ?????????????????????? ????????????. ?????? ????????, ?????????? ???????????? ???????????? ???? ????????????????, ????????????????????, ?????????????????? ?????????? ???? ???????? ????????????:',
                link: '???????????? ???? ?????????? ????????????'
              },
              board_info: '?? ???????????? 2022 ???????? ???? ?????????????? ???????????????? ?????? ???????????? ?????????? ???????????? ??????????????????. ?????????? ?????????????????? 2022 ????????:'
            },
            contacts_view: {
              general: {
                title: '?????????? ???????????????????? ????????????????????',
                registry: '?????????????????????????????? ??????????',
                email: '????. ??????????:'
              },
              telegram: {
                title: '?????? ????????????????-??????',
                p1: 'A??A ???????????????????? ?????? ????????????????-??????, ?????????????? ?????????? ?? ?????????????? ???????????????????? ?? ?????????????????? ???????????????????????? ?????????????????????? ?? ???????????? ???????????????????????? ??????????.',
                p2: '???????????????????????? ????????????????-?????? ????-???????????????? ???????????????? ?????? ???????????????? ?????????????????? ?????? ?????????????? ?????????? ?? ?????????????? ????????????????????.',
                nb: 'NB! ????????????????????, ???????????????????????? ?? ?????????????????? ????????!',
                link: '???????????? ???? ??????'
              },
              instagram: {
                title: '???? ?? ????????????????????',
                p1: '?????? ?????????????????? ??? ?????? ?????? ???????? ?????????????????? ?????? ???????????????????????????? ???????????? ???????????????????? ?? ???????????????? ?? ???????????????????????? ?????????? ?????????? ????????????????????.',
                p2: '???????????????????????????? ???? ?????? ?? ???????????????? ???????????????????? ?? ??????????????????????, ?????????????? ???? ???????????????? ?????? ???? ???????????? ????????????????.',
                link: '???????????? ???? ????????????????????'
              }
            }
          }
        }
      }
    }
  });

export default i18n;
