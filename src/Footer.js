import React from 'react'

const Footer = () => {
  return (
    <footer className="footer font-small blue fixed-bottom">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/AmndaPlant/EasyWeather">EasyWeather on GitHub</a>
              </li>
              <li>
                <a href="https://api.openweathermap.org">Powered by OpenWeatherMap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;