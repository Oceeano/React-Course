import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img className='img-logo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fdiscord-logo-png%2Fdiscord-u2013-logos-brands-logotypes-12.png&f=1&nofb=1'>
        </img>
      </header>
      <nav>
        <div>
          <a href="#S">Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div><div>
          <a>News</a>
        </div><div>
          <a>Music</a>
        </div>
       
      </nav>
      <div className='content'>
        Main Content
      </div>

    </div>
  );
}

export default App;


