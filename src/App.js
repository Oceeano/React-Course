import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import News from "./components/News/News";

const App = (props) => {


    return (
        <BrowserRouter>
            <div>
                <img className='wallpaper'
                     src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.grunge.com%2Fimg%2Fgallery%2Fhow-many-black-belts-does-steven-seagal-really-have-upgrade%2Fsteven-seagal-has-surprisingly-many-black-belts-1582743899.jpg&f=1&nofb=1'></img>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar state={props.state.friendsPage}/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
                            <Route path='/profile/*' element={<Profile posts={props.state.profilePage.posts}/>}/>
                            <Route path='/news/*' element={<News/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


    