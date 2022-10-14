import './App.css';
import logo from './logo.jpg';

const App = () => {
  return(
    <div className='h-screen max-w-5xl mx-auto'>
      <header id='navigation-bar' className='flex items-center justify-between p-6'>
        <div id='logo-home' className='flex justify-start'>
          <a href="#" className='h-8 w-8 sm:h-16 sm:w-16 overflow-hidden rounded-full '>
            <span className="sr-only">Your Company</span>
            <img className="hover:scale-150" src={logo}></img>
          </a>
        </div>
        <nav id='navigation-tabs' className='flex space-x-10'>
          <a id='home-tab' href="#" className="text-base font-medium text-black hover:text-blue">Home</a>
          <a id='events-tab' href="#" className="text-base font-medium text-black hover:text-blue">Events</a>
          <a id='board-tab' href="#" className="text-base font-medium text-black hover:text-blue">Board</a>
          <a id='membership-tab' href="#" className="text-base font-medium text-black hover:text-blue">Membership</a>
          <a id='contacts-tab' href="#" className="text-base font-medium text-black hover:text-blue">Contacts</a>
        </nav>
        <div id='language-setter' className='flex justify-end overflow-hidden'>
          <button className='inline-flex items-center justify-center px-4 py-2 bg-blue text-base font-semibold rounded-md text-white hover:bg-green'>EN</button>
        </div>
      </header>
    </div>
  );
};

export default App;
