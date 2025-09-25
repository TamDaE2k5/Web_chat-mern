import { Routes, Route } from "react-router-dom";
import HelloUser from "./pages/HelloUser";

function App() {
  return (
    <Routes>
      <Route path="/hello_user" element={<HelloUser />} />
    </Routes>
  );
}

export default App;
