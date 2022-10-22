import { BrowserRouter as Router, Outlet, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AboutSidebar from './components/AboutSidebar';
import NavigationBar from './components/NavigationBar';
import AboutAraView from './views/about/AboutAra.view';
import BoardView from './views/about/Board.view';
import DocumentsView from './views/about/Documents.view';
import ContactsView from './views/Contacts.view';
import EventView from './views/Event.view';
import EventsView from './views/Events.view';
import HomeView from './views/Home.view';
import NewsView from './views/News.view';

const App = () => {

  return(
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomeView />}></Route>
          <Route path='about' element={<AboutLayout />}>
            <Route index element={<AboutAraView />}></Route>
            <Route path='board' element={<BoardView />}></Route>
            <Route path='documents' element={<DocumentsView />}></Route>
          </Route>
          <Route path='events' element={<EventsView />}></Route>
          <Route path='events/:eventId' element={<EventView />}></Route>
          <Route path='news' element={<NewsView />}></Route>
          <Route path='contacts' element={<ContactsView />}></Route>
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
