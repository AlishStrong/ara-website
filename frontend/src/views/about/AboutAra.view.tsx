import { useTranslation } from 'react-i18next';
import logo from '../../logo_full.webp';

const AboutAra = () => {
  const { t } = useTranslation();

  return (
    <div>
      <img src={logo} className='max-w-[16em] float-left mr-4'></img>
      <h2 className='font-bold'>{t('ui.about_view.sidebar.about')}</h2>
      <p>{t('ui.about_view.about_ara')}</p>
    </div>
  );
};

export default AboutAra;
