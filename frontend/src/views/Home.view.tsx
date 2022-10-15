const Home = () => {
  return (
    <div className='grid grid-cols-3 gap-8 px-10'>
      <div className='grid grid-cols-1 col-span-2 gap-4'>
        <section id='home-welcome-message'>
          {/* TODO: translate with i18n */}
          <div className='p-6 rounded-lg shadow'>
            <h2 className='font-bold text-black'>Welcome to Aalto Russian-speaking Association</h2>
            <p className='mt-4'>
            Aalto Russian-speaking Association ry or &quot;ARA&quot; is a international community of Aalto students.
            Our mission is to unite and organise events in Aalto for all interested in slavic language and culture.
            Our events are public for all students of Aalto who are interested in Russian language and culture.
            </p>
          </div>
        </section>
        <section id='home-news'>
          {/* TODO: translate with i18n */}
          <div className='p-6 rounded-lg shadow'>
            <h2 className='font-bold text-black'>Latest news</h2>
            <p className='mt-4'>
            </p>
          </div>
        </section>
      </div>
      <div>
        <section id='home-event-list'>
          <div className='p-6 rounded-lg shadow'>
            <h2 className='font-bold text-black'>Upcoming events</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
