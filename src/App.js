import logo from "./logo.svg";
import Calculator from "./components/Calculator";

function App() {
  return (
    <main className="app">
      <div className="wrapper">
        <img src={logo} className="logo" alt="logo" />
        <Calculator />
      </div>
    </main>
  );
}

export default App;
