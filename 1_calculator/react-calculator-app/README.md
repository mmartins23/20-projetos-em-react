# Calculator App

This is a simple calculator web application built with **React**. The calculator can handle basic arithmetic operations including addition, subtraction, multiplication, and division.

## Features

- **Arithmetic Operations**: Perform basic operations such as addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- **Clear Button**: Reset the calculator at any time using the `AC` button.
- **Error Handling**: Handles division by zero by displaying an error message.
- **Displays the full calculation**: Displays the complete equation and result after each calculation.

## Installation and Setup

To run this project locally, follow the instructions below:

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) installed on your machine.
- A package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/calculator-app.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd calculator-app
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

The project has the following structure:

```
calculator-app/
│
├── src/
│   ├── components/
│   │   └── Calculator.tsx     # Main calculator component
│   ├── pages/
│   │   └── App.tsx            # Main app file
│   ├── App.css                # Styling for the app
│   └── index.tsx              # Entry point of the React app
│
├── public/
│   └── index.html             # HTML template
│
├── package.json               # Project configuration and dependencies
└── README.md                  # Project readme
```

### Components

- **Calculator.tsx**: This component handles the logic and UI of the calculator. It includes the number pad, arithmetic operations, display, and clear functionality.

### Styling

The CSS for the calculator is simple and resides in the `Calculator.css` file. The layout uses Flexbox and Grid to arrange the calculator buttons and display area.

- **Grid Layout**: The buttons are organized using CSS Grid for a 4x4 button layout.
- **Display**: The display is aligned using Flexbox, and the current operation and result are shown in a visually distinct area.

## How to Use

1. Click on the numbers to enter them into the calculator.
2. Select one of the arithmetic operations (`+`, `-`, `*`, `/`).
3. Click the `=` button to calculate and display the result.
4. Click the `AC` button to clear the calculator and reset the values.

### Example Workflow

1. **Enter 5** by clicking the button.
2. **Select +** by clicking the `+` button.
3. **Enter 3** by clicking the button.
4. **Click =** to get the result (`5 + 3 = 8`).

## Contributing

Feel free to fork this repository and submit pull requests if you'd like to contribute to the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.