import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Recommended from './components/Recommended/Recommended';
import SearchPage from './components/Searchpage/SearchPage';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';


function App() {
  return (
    <div className='app'>
     
       <BrowserRouter>
         <Routes>
        <Route path='/'element={<><Header/>
        <div className= 'app_mp'>
      <Sidebar/> <Recommended/>
      </div></>}/>
      <Route path='/search/:searchQuery' element={
            <>
              <Header />
              <div className="app_mp">
                <Sidebar />
                <SearchPage />
              </div>
            </>
          } />
           <Route path='/video/:videoId' element={
            <>
              <Header />
              <div className="app_mp">
                <Sidebar />
                <VideoPlayer />
              </div>
            </>
          } />

      
         </Routes>
       </BrowserRouter>
      
    </div>
  )
}

export default App;
