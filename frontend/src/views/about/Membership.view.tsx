import { useTranslation } from 'react-i18next';

const MembershipView = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className='font-bold mb-4'>{t('ui.about_view.membership.title')}</h2>
      <p>{t('ui.about_view.membership.text')}</p>
      <p className='mt-2'>
        <a target='_blank' className='inline-flex items-center justify-center px-4 pb-2 pt-1 bg-blue text-base font-semibold rounded-md text-white hover:bg-green' href='https://docs.google.com/forms/d/e/1FAIpQLSesZ0Iks2DXXrlEEcBwxe5fcDsiz2bmDMa7aW6-A8zhFGC-XQ/viewform' rel="noreferrer">{t('ui.about_view.membership.link')}</a>
      </p>
    </div>
  );
};

export default MembershipView;
