import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{' '}
          <a href="https://github.com/beatrizevedo" target="_blank">
            Beatriz Azevedo
          </a>
          . It's open-sourced on{' '}
          <a
            href="https://github.com/beatrizevedo/react-weather-app"
            target="_blank"
          >
            Github
          </a>
          , hosted on{' '}
          <a
            href="https://beatriz-weather-app-react.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
