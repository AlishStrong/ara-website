import { BrowserRouter as Router, Outlet, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import EventView from './views/Event.view';
import Events from './views/Events.view';
import Home from './views/Home.view';

const App = () => {

  return(
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='events' element={<Events />}></Route>
          <Route path='events/:eventId' element={<EventView />}></Route>
          <Route path='*' element={<Navigate to={'/'} replace={true} />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

const Layout = () => (
  <div className='h-screen max-w-5xl mx-auto'>
    <NavigationBar />
    <Outlet />
  </div>
);

export default App;
