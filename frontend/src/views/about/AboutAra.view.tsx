import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo_full.webp';
import ArticleImage from '../../components/ArticleImage';

const AboutAraView = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className='font-bold mb-4'>{t('ui.about_view.sidebar.about')}</h2>
      <ArticleImage image={logo} />
      <p>{t('ui.about_view.about_ara')}</p>
    </div>
  );
};

export default AboutAraView;
