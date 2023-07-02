import './App.css';
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import Upload from './pages/Upload';
import Download from './pages/Download.js'
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='upload' element={<Upload/>}/>
        <Route path='download' element={<Download/>}/>
        <Route path='welcome' element={<Welcome/>}/>
        <Route path='history' element={<HistoryPage/>}/>
      </Routes>
    </main>
    </BrowserRouter>    
  );
}

export default App;

