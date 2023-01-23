
import './App.css';
import ExcelSheetData from './components/ExcelSheetData';
import GenerateExcel from './components/GenerateExcel';
import GeneratePdf from './components/GeneratePdf';
import GeneratePdfWithPages from './components/GeneratePdfWithPages';

function App() {
  return (
    <div className="App">
     
      <GenerateExcel/>
      <hr></hr>
      <GeneratePdfWithPages/>
      <hr></hr>
       <ExcelSheetData/>
       <hr></hr>
      <GeneratePdf/>
    </div>
  );
}

export default App;
