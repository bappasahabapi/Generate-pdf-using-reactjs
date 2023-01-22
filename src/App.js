
import './App.css';
import ExcelSheetData from './components/ExcelSheetData';
import GenerateExcel from './components/GenerateExcel';
import GeneratePdf from './components/GeneratePdf';
import GeneratePdfWithPages from './components/GeneratePdfWithPages';

function App() {
  return (
    <div className="App">
      <ExcelSheetData/>
      {/* <GenerateExcel/> */}
      <hr></hr>
      <GeneratePdf/>
      <hr></hr>
      <GeneratePdfWithPages/>
      <hr></hr>
    </div>
  );
}

export default App;
