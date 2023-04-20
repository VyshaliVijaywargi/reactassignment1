import logo from './logo.svg';
import './App.css';
import Reactbenefit from './Reactbenefit';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<Reactbenefit/>
<Button/>
      </header>
    </div>
  );
}
/*function Reactbenefit(){
  return (
    <div>
      <h1>Benefits of using react...</h1>
      <ol>
        <li>Component based architecture</li>
      </ol>
    </div>
  );
}*/
function Button(){
return (
<button>get started</button>
);
}

export default App;
