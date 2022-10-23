import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue text-white mt-auto lg:rounded-t-3xl">
      <div className="text-sm mx-auto p-4 grid grid-cols-1 gap-2 justify-between sm:text-base sm:px-10 sm:pt-7 sm:pb-6 sm:auto-cols-min md:auto-cols-auto md:grid-cols-none md:grid-flow-col">
        <div id='info' className='sm:order-1'>
          <p>&copy; {(new Date()).getFullYear()} Aalto Russian-speaking Association ry</p>
          <p>c/o AYY, Otakaari 11, 02150 Espoo, Finland</p>
          <p>{t('ui.footer.registry')} (Y-tunnus): 3189497-5</p>
        </div>
        <div id='divider-1' className="w-full border-t-2 border-white my-2 sm:col-span-2 sm:order-3 md:hidden" aria-hidden="true" />
        <div id='contacts' className='flex items-center sm:flex-col sm:order-2'>
          <h3 className='text-base font-semibold sm:text-center sm:mb-1'>{t('ui.footer.contact')}</h3>
          <div className="flex justify-center items-center space-x-6 ml-6 sm:ml-0">
            <a href='https://www.instagram.com/aalto_ara' target='_blank' className='hover:bg-green p-1 rounded-xl' rel="noreferrer">
              <span className='sr-only'>Instagram</span>
              <svg className='h-8 w-8' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path fillRule='evenodd' d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' clipRule='evenodd'></path>
              </svg>
            </a>
            <a href='https://t.me/aaltorussian' target='_blank' className='hover:bg-green p-1 rounded-full' rel="noreferrer">
              <span className='sr-only'>Telegram</span>
              <svg className='h-8 w-8' viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <circle className='fill-white' cx="500" cy="500" r="430" />
                <path className='fill-blue' d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z" />
              </svg>
            </a>
          </div>
        </div>
        <div id='divider-2' className="w-full border-t-2 border-white my-2 sm:hidden" aria-hidden="true" />
        <div id='external-links' className='text-base sm:order-4 sm:col-span-2'>
          <h3 className='font-semibold md:text-right mb-1'>{t('ui.footer.links.title')}</h3>
          <ul className='md:text-right space-y-1'>
            <li className='underline underline-offset-4 decoration-blue hover:decoration-white'><a href='https://www.aalto.fi/en' target='_blank' rel="noreferrer">{t('ui.footer.links.uni')}</a></li>
            <li className='underline underline-offset-4 decoration-blue hover:decoration-white'><a href='https://www.ayy.fi/en' target='_blank' rel="noreferrer">{t('ui.footer.links.ayy')}</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
