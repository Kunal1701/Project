import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DisplayUser from "./components/DisplayUser";
import NavBar from "./components/NavBar";
import NewUser from "./components/NewUser";
import UpdateEmployee from "./components/UpdateEmployee";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<DisplayUser />} />
          <Route path="/new" element={<NewUser />} />
          <Route path="/list" element={<DisplayUser />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
