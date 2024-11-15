import './App.css';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  useEffect(() => {
    const createParticles = () => {
      const container = document.querySelector('.loading-container');
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${5 + Math.random() * 10}s`;
        container.appendChild(particle);
      }
    };
    createParticles();
  }, []);

  return (
    <div className="loading-container">
      <div className="loader">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-core">
          <img 
            src="https://i.imgur.com/bHFaQDc.png" 
            alt="KeysEntry Logo" 
            className="loader-logo"
          />
        </div>
      </div>
      <div className="loading-text">Loading</div>
      <div className="loading-progress">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const targetDate = new Date('2024-11-15T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="App">
        <div className="logo-container">
          <img 
            src="https://i.imgur.com/bHFaQDc.png" 
            alt="KeysEntry Logo" 
            className="logo"
          />
        </div>
        <div className="title-container">
          <h1 className="main-title">
            A <span className="title-accent">New Generation</span> of
            <br />
            Key System Service
          </h1>
        </div>
        <div className="orb-1"></div>
        <div className="orb-2"></div>
        <div className="orb-3"></div>
        <div className="orb-4"></div>
        <div className="orb-5"></div>
        <div className="orb-6"></div>
        <div className="orb-7"></div>
        <div className="orb-8"></div>
        <div className="maintenance-container">
          <h1>Under Maintenance</h1>
          <p>We're currently enhancing our services to bring you a better experience.</p>
          <p>Please check back soon!</p>
          <div className="release-notification">
            <div className="release-date">
              <span className="date-label">Release Date</span>
              <span className="date">November 17, 2024</span>
            </div>
            <div className="countdown-container">
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.days}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.hours}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.minutes}</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.seconds}</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ 
                  width: `${((new Date() - new Date('2024-01-01')) / (new Date('2024-11-17') - new Date('2024-01-01'))) * 100}%` 
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
