import { useState } from 'react';
import './App.css';

function App() {
  // Task 1 Variables
  const [isVisible, setIsVisible] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [num1, setNum1] = useState( );
  const [num2, setNum2] = useState( );

  // Task 2 Variables (Counter)
  const [count, setCount] = useState(0);

  // Task 3 Variables (Search Filter)
  const [searchTerm, setSearchTerm] = useState("");
  const records = ["Apple", "Banana", "Grape", "Orange", "Pineapple"];

  const filteredRecords = records.filter(record =>
    record.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Task 1 Functions
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div className="App">
      {/* Task 1: Small Programming Learning Tasks */}
      <h2>Task 1: Small Programming Learning Tasks</h2>

      {/* 1. Display Simple JSX */}
      <h3>1. Display Simple JSX</h3>
      <p>Hello, React!</p>

      {/* 2. Display an Array of Records */}
      <h3>2. Display an Array of Records</h3>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>

      {/* 3. Show/Hide Element */}
      <h3>3. Show/Hide Element</h3>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Element
      </button>
      {isVisible && <p>This is a toggle-able element!</p>}

      {/* 4. Enable/Disable a Button */}
      <h3>4. Enable/Disable a Button</h3>
      <button onClick={() => setIsDisabled(!isDisabled)}>
        {isDisabled ? "Enable" : "Disable"} Button
      </button>
      <button disabled={isDisabled}>Click Me</button>

      {/* 5. 2-Way Data Binding Using Textbox */}
      <h3>5. 2-Way Data Binding Using Textbox</h3>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>Input: {text}</p>

      {/* 6. Dynamically Add Child Components */}
      <h3>6. Dynamically Add Child Components</h3>
      <button onClick={addItem}>Add Item</button>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      {/* 7. Do Sum of Two Numbers */}
      <h3>7. Do Sum of Two Numbers</h3>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(Number(e.target.value))} 
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(Number(e.target.value))} 
      />
      <p>Sum: {num1 + num2}</p>

      {/* Task 2: Create a Counter */}
      <h2>Task 2: Create a Counter</h2>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      {/* Task 3: Build Search Filter */}
      <h2>Task 3: Build Search Filter</h2>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul>
        {filteredRecords.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
