import Header from "./components/Header";
import Todo from "./components/Todo";
import Count from './components/Count'

function App() {
  return (
    <div className="bg-light vh-100">
      <Header />
      <Todo />
      <Count />
    </div>
  );
}

export default App;
