const LapList = ({ laps }) => {
    return (
      <div className="timer-laps">
        <h3>Laps:</h3>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>
              Lap {index + 1}: {lap}
            </li>
          ))}
        </ul>
      </div>
    )
  };
  
  export default LapList;