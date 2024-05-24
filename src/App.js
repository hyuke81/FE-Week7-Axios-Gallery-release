import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Layout from "./pages/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/imageAll/:imgId" element={<Detail />} />
          <Route path= "*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
