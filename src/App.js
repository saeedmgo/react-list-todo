import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav";
import Home from "./Home/Home";
import "./bootstrap.min.css"
import TodoList from "./components/TodoList/TodoList";


function App() {
  return (
      <>
        {/*These two components are for the shop project*/}
        {/*<Nav/>*/}
        {/*<Home/>*/}

        {/*This Component is for the Todo List Project*/}
        <TodoList/>
      </>
  );
}


export default App;
