import logo from './logo.svg';
import './App.css';

import {Greet,GreetNew,Welcome,Props,State,JsxAttribute,JsxFunction,JsxFunctionControlStmt,BootstrapExample,StudentContextComponent,StudentHome,StudentHome1,UseStateDemo,SideEffect,NameForm,SignUpForm} from './component';

function App() {
  let data = {fname:"Sarthak", lname:"Dongare",city:"Pune"}
  return (
    <div className='App'>
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
        <br/>
        <GreetNew />
        <br/>
        <Welcome />
        <br/>
        <State />
        <br/>
        <Props dataattr={data} />
        <br/>
        <JsxAttribute />
        <br/>
        <JsxFunction />
        <br/>
        <JsxFunctionControlStmt />
        <br/>
        <BootstrapExample/>
        <br/>

        <h1>----------------------Use Context Hook-------------------------</h1>
        <StudentContextComponent>
          <StudentHome></StudentHome>
          <StudentHome1></StudentHome1>
        </StudentContextComponent>
        <br/>

        <h1>-----------------------Use State Hook------------------------</h1>
        <UseStateDemo/>
        <br/>

        <SideEffect/>
        <br/>

        <h1>------------------------Form Element UC-------------------------</h1>
        <NameForm/>
        <br/>

        <h1>------------------------Formic Forms----------------------------</h1>
        <SignUpForm/>
        <br/>


    </div>
  );
}

export default App;
