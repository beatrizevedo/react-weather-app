import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
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
        .
      </footer>
    </div>
  );
}
