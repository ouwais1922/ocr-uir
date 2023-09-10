import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Document from "./components/Document";
import Nopage from "./components/Nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/documents" element={<Document />}></Route>
      <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
