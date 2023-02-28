
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{fontSize: "70px"}}>Kids Art App</h1>
      <Outlet/>
    </div>
  );
}

export default App;
