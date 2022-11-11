import './App.css';
import DjangoPage from './component/DjangoPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Workill Page</div>
        <div>Python</div>
        <div>Java</div>
        <div>Spring</div>
        <DjangoPage/>
        <div>Pattern</div>
      </header>
    </div>
  );
}

export default App;
