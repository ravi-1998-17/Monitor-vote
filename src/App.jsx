import "./App.css";
import "./assets/fonts/fonts.css";
import Card from "./components/Card/Card";
import Header from "./components/Layout/Header";
import Section from "./components/Layout/Section";

const App = () => {
  const monitor = ["Piyush", "Ravi", "Guddu", "Kartik"];

  const monitorList = monitor.map((champ) => <Card /> );

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Header />

          <main className="main">
            <Section />
            <div className="monitors">{monitorList}</div>
          </main>
          
        </div>
      </div>
    </>
  );
};

export default App;
