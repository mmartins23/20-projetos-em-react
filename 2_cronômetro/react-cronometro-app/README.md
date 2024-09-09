# Timer App

This project is a **React-based Timer Application** that functions as a stopwatch with start, stop, lap, and reset features. It tracks time in milliseconds, displays laps, and is built with reusable components.

## Features
- **Start/Stop the timer**: Controls for starting and stopping the timer.
- **Lap tracking**: Record multiple laps with the click of a button.
- **Reset the timer**: Reset the timer and laps list.
- **Formatted time**: Displays time in minutes, seconds, and centiseconds.

## Components

1. **`App.js`**: 
   - The main component that imports and renders the `Timer` component.

2. **`Timer.js`**: 
   - Contains the timer logic, state management, and renders the timer display, controls, and lap list.

   - **State Variables**:
     - `milliseconds`: Tracks the time in milliseconds.
     - `timerOn`: A boolean that controls whether the timer is running or not.
     - `laps`: An array that holds recorded lap times.

   - **Functions**:
     - `startTimer`: Starts the timer, incrementing the time every 10 milliseconds.
     - `stopTimer`: Stops the timer and clears the interval.
     - `resetTimer`: Resets the timer and laps list.
     - `addLap`: Records the current lap time.
     - `formatTime`: Formats the time into `MM:SS:CC` (minutes, seconds, centiseconds).

3. **`TimerDisplay.js`**: 
   - Displays the current time on the screen, formatted by the `formatTime` function.

4. **`TimerControls.js`**: 
   - Provides buttons to control the timer: 
     - Start
     - Stop
     - Lap
     - Reset

5. **`LapList.js`**: 
   - Displays the list of recorded laps in a numbered format.

## Usage

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/yourusername/timer-app.git
   ```
2. **Install Dependencies**: 
   ```bash
   cd timer-app
   npm install
   ```
3. **Run the Application**: 
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000` to use the app.

## CSS Styles
The styles for the components are in `Timer.css`. Here are some key styles:
- **`.timer-container`**: Flexbox container for the timer.
- **`.timer-display`**: Shows the current time with appropriate styling.
- **`.timer-controls`**: Buttons for controlling the timer.
- **`.timer-laps`**: Displays the recorded lap times.

## License
This project is licensed under the MIT License.

Feel free to modify and expand the app as per your requirements!