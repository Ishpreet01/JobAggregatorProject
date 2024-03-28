import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import LoginPage from './components/Login/LoginPage.jsx';
import ProfilePage from './components/Profile/ProfilePage.jsx';
import DataProvider from './context/DataProvider.jsx';
import DataDisplay from './components/DataScraping/webscraper.jsx';
import HomePage from './components/Home/HomePage.jsx';

function App() {
  return (
    <div>
      <DataProvider>
      <Router>

        <Routes>
          <Route  path='/' element={<HomePage />} />
          <Route  path='/login' element={<LoginPage />} />
          <Route  path='/profile' element={<ProfilePage/>} />
          <Route path='/scrapeData' element={<DataDisplay/>} /> 
        </Routes>

      </Router>
      </DataProvider>
      
      
    </div>
  );
}

export default App;
