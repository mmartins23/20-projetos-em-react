const TimerControls = ({ timerOn, onStart, onStop, onReset, onLap }) => {
  return (
    <div className="timer-controls">
      {!timerOn && <button onClick={onStart}>Start</button>}
      {timerOn && <button onClick={onStop}>Reset</button>}
      {timerOn && <button onClick={onLap}>Lap</button>}
      <button onClick={onReset}>Zerar</button>
    </div>
  )
};

export default TimerControls;