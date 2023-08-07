import "./App.css";
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";

function App() {
  // write javascript

  const name = "devme";
  const age = 23;

 

  return (
    <div className="App">
      <h1>Hello react </h1>
      <div className="home">
        <Nav />
        <Tweets me={name} age={age} />
      </div>
    </div>
  );
}

export default App;
