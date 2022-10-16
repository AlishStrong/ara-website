import { BrowserRouter as Router, Outlet, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AboutSidebar from './components/AboutSidebar';
import NavigationBar from './components/NavigationBar';
import AboutAra from './views/about/AboutAra.view';
import Board from './views/about/Board.view';
import Documents from './views/about/Documents.view';
import Contacts from './views/Contacts.view';
import EventView from './views/Event.view';
import Events from './views/Events.view';
import Home from './views/Home.view';
import News from './views/News.view';

const App = () => {

  return(
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<AboutLayout />}>
            <Route index element={<AboutAra />}></Route>
            <Route path='board' element={<Board />}></Route>
            <Route path='documents' element={<Documents />}></Route>
          </Route>
          <Route path='events' element={<Events />}></Route>
          <Route path='events/:eventId' element={<EventView />}></Route>
          <Route path='news' element={<News />}></Route>
          <Route path='contacts' element={<Contacts />}></Route>
          <Route path='*' element={<Navigate to={'/'} replace={true} />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

const MainLayout = () => (
  <div className='h-screen max-w-5xl mx-auto'>
    <NavigationBar />
    <Outlet />
  </div>
);

const AboutLayout = () => (
  <div id='about-view' className='grid grid-cols-4 gap-4 px-6'>
    <AboutSidebar />
    <div id='about-content' className='p-4 rounded-lg shadow col-span-3'>
      <Outlet />
    </div>
  </div>
);

export default App;
