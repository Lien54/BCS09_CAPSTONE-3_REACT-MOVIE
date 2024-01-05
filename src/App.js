import { DatePicker } from "antd";

// react-router-dom
import { Routes, Route } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import MovieManage from "./pages/MovieManage/MovieManage";
import UserManager from "./pages/UserManager/UserManager";
import UserOrder from "./pages/UserOrder/UserOrder";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserTemplate />} path="/">
          <Route element={<HomePage />} index></Route>
        </Route>
        <Route element={<AdminTemplate />} path="/admin">
          <Route index element={<MovieManage />}/>
          <Route path="manager-user" element={<UserManager />} />
          <Route path="manager-order" element={<UserOrder />} />
        </Route>
        <Route element={<Login />} path="/login"/>
        {/* page 404 */}
      </Routes>
    </>
  );
}

export default App;
