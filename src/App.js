
import './App.css';
import GeneratePdf from './components/GeneratePdf';
import GeneratePdfWithPages from './components/GeneratePdfWithPages';

function App() {
  return (
    <div className="App">
      <GeneratePdf/>
      <hr></hr>
      <GeneratePdfWithPages/>
      <hr></hr>
    </div>
  );
}

export default App;
