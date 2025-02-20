import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const toggleTimer = () => {
    if (isRunning) {
      setTime(0);
    }
    setIsRunning(!isRunning);
  };

  return (
    <div className="stopwatch-container">
      <h1 className="title">Stopwatch</h1>
      <div className="timer">{time} sec</div>
      <button className="button" onClick={toggleTimer}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Stopwatch;
