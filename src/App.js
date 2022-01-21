import './App.css';
import Header from './components/Header';
import Main from './components/Main';
function App() {
  return (
    <div>
      <Header
        title="Weather App"
        description="Find out the weather in your area or somewhere else!"
      ></Header>
      <Main></Main>
    </div>
  );
}

export default App;
