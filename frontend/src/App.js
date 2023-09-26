import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateStudentPage from "./pages/CreateStudentPage";
import Piechart from './components/Piechart';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addstudent" element={<CreateStudentPage />} />
        <Route path="/piechart" element={<Piechart />} />
        
      </Routes>
    </div>
  );
}

export default App;
