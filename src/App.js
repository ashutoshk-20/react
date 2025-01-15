import logo from './logo.svg';
import './App.css';

import {Greet,GreetNew,Welcome,Props,State,JsxAttribute,JsxFunction,JsxFunctionControlStmt,BootstrapExample,StudentContextComponent,StudentHome,StudentHome1,UseStateDemo,SideEffect} from './component';

function App() {
  let data = {fname:"Sarthak", lname:"Dongare",city:"Pune"}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Greet />
        <GreetNew />
        <Welcome />
        <State />
        <Props dataattr={data} />
        <JsxAttribute />
        <JsxFunction />
        <JsxFunctionControlStmt />
        <BootstrapExample/>

        <h1>Use Context Hook</h1>
        <StudentContextComponent>
          <StudentHome></StudentHome>
          <StudentHome1></StudentHome1>
        </StudentContextComponent>

        <h1>Use State Hook</h1>
        <UseStateDemo/>

        <SideEffect/>
      </header>
    </div>
  );
}

export default App;
