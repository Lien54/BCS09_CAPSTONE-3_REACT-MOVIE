import { https } from "./configServ";

export const userServ = {
  loginServ: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
};
