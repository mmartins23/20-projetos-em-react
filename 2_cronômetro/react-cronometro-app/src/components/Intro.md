Este projeto implementa um **Timer/Stopwatch** em React que permite iniciar, pausar, redefinir e gravar voltas (laps). A seguir, explicarei o código e como cada parte funciona.

## Estrutura Geral do Projeto

1. **App.js**: Renderiza o componente `Timer`.
2. **Timer**: Gerencia o estado e a lógica principal do temporizador.
3. **TimerControls**: Controla os botões de iniciar, parar, zerar e adicionar voltas.
4. **TimerDisplay**: Exibe o tempo formatado.
5. **LapList**: Lista as voltas registradas.
6. **CSS**: Estiliza os componentes.

### 1. **App.js**

```js
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <>
      <Timer />
    </>
  );
}

export default App;
```

- `App.js` é simples: ele importa e renderiza o componente `Timer`. Todo o comportamento e lógica do cronômetro ocorrem dentro do `Timer`.

### 2. **Timer.js**

```js
import { useState, useEffect } from 'react';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';
import LapList from './LapList';
import './Timer.css';

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = startTimer();
    } else if (!timerOn) {
      interval = stopTimer(interval);
    }
    return () => stopTimer(interval);
  }, [timerOn]);

  const startTimer = () => {
    return setInterval(() => {
      setMilliseconds(prevMilliseconds => prevMilliseconds + 10);
    }, 10);
  };

  const stopTimer = (interval) => {
    clearInterval(interval);
    return interval;
  };

  const resetTimer = () => {
    setMilliseconds(0);
    setTimerOn(false);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, formatTime()]);
  };

  const formatTime = () => {
    const minutes = ("0" + Math.floor((milliseconds / 60000) % 60)).slice(-2);
    const seconds = ("0" + Math.floor((milliseconds / 1000) % 60)).slice(-2);
    const centiseconds = ("0" + ((milliseconds / 10) % 100)).slice(-2);
    return `${minutes}:${seconds}:${centiseconds}`;
  };

  return (
    <div className="timer-container">
      <TimerDisplay time={formatTime()} />
      <TimerControls 
        timerOn={timerOn}
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
        onReset={resetTimer}
        onLap={addLap}
      />
      <LapList laps={laps} />
    </div>
  );
};

export default Timer;
```

### **Funções e Estados:**

- **useState**: 
  - `milliseconds`: Controla o tempo total decorrido em milissegundos.
  - `timerOn`: Define se o cronômetro está rodando (iniciado ou parado).
  - `laps`: Armazena as voltas registradas.

- **useEffect**: 
  - O `useEffect` monitora o estado de `timerOn` (cronômetro ligado/desligado). Se `timerOn` for `true`, inicia o temporizador com `setInterval`, atualizando a cada 10 milissegundos. Se `timerOn` for `false`, o temporizador é pausado.
  - Ao desmontar, o temporizador é parado.

- **startTimer**: Inicia o temporizador e atualiza o estado `milliseconds` a cada 10ms.

- **stopTimer**: Para o temporizador e limpa o intervalo.

- **resetTimer**: Redefine o temporizador, limpando o valor de `milliseconds`, as voltas e o estado `timerOn`.

- **addLap**: Adiciona uma volta à lista de `laps` com o tempo formatado no momento.

- **formatTime**: Formata `milliseconds` em `MM:SS:CS` (minutos, segundos, centésimos).

### 3. **TimerDisplay.js**

```js
const TimerDisplay = ({ time }) => {
  return (
    <div className="timer-display">
      {time}
    </div>
  );
};

export default TimerDisplay;
```

- `TimerDisplay` recebe o tempo formatado como `props` e exibe o valor em um `div`. O tempo é mostrado em minutos, segundos e centésimos de segundo.

### 4. **TimerControls.js**

```js
const TimerControls = ({ timerOn, onStart, onStop, onReset, onLap }) => {
  return (
    <div className="timer-controls">
      {!timerOn && <button onClick={onStart}>Start</button>}
      {timerOn && <button onClick={onStop}>Stop</button>}
      {timerOn && <button onClick={onLap}>Lap</button>}
      <button onClick={onReset}>Zerar</button>
    </div>
  );
};

export default TimerControls;
```

- **Controles do Temporizador**: 
  - Exibe diferentes botões dependendo se o cronômetro está rodando (`timerOn`).
  - Quando `timerOn` é `false`, aparece o botão `Start`. Quando `true`, aparecem os botões `Stop` e `Lap`.
  - O botão `Reset` sempre aparece, permitindo que o usuário zere o temporizador.

### 5. **LapList.js**

```js
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
  );
};

export default LapList;
```

- **LapList**: Exibe as voltas registradas.
  - Ele percorre a lista de voltas (`laps`) e renderiza cada volta em uma lista ordenada (`<ul>`).
  - Cada volta é identificada por seu índice e o tempo registrado.

### 6. **Estilos (CSS)**

```css
.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  width: 400px;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
  padding: 20px;
}

.timer-display {
  border: 2px solid #333;
  padding: 20px;
  margin: 20px;
  font-size: 48px;
  background-color: #fff;
}

.timer-controls {
  display: flex;
  justify-content: center;
}

.timer-controls button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 15px 32px;
  margin: 4px;
  cursor: pointer;
  border-radius: 4px;
}

.timer-controls button:hover {
  background-color: #0046d5;
}

.timer-laps ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.timer-laps li {
  border-bottom: 1px solid #ddd;
  padding: 8px;
}

.timer-laps li:nth-child(odd) {
  background-color: #ddd;
}
```

### **Estilização:**

- A estrutura de estilos usa flexbox para alinhar e centralizar os componentes.
- O temporizador e as voltas são exibidos de maneira limpa com bordas, preenchimento e uma fonte grande para o tempo.
- Os botões têm um estilo consistente com uma cor azul, bordas arredondadas, e mudam de cor ao passar o mouse.

### Conclusão

Esse projeto é um cronômetro funcional com controle total sobre as ações de iniciar, parar, zerar e adicionar voltas. O código é organizado em pequenos componentes que desempenham funções específicas, tornando-o fácil de entender e de estender.