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
import AddMovie from "./pages/AddMovie/AddMovie";
import Page404 from "./pages/Page404/Page404";
import Detail from "./pages/Detail/Detail";
import AddUser from "./pages/AddUser/AddUser";
import EditUser from "./pages/EditUser/EditUser";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserTemplate />} path="/">
          <Route element={<HomePage />} index></Route>
          <Route element={<Detail />} path="/detail-film/:maPhim"></Route>
        </Route>
        <Route element={<AdminTemplate />} path="/admin">
          <Route index element={<MovieManage />} />
          <Route path="manager-user" element={<UserManager />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="edit-user/:taiKhoan" element={<EditUser />} />
          <Route path="manager-order" element={<UserOrder />} />
          <Route path="add-movie" element={<AddMovie />} />
        </Route>
        <Route element={<Login />} path="/login" />
        {/* page 404 */}
        <Route element={<Page404 />} path="*" />
      </Routes>
    </>
  );
}

export default App;
