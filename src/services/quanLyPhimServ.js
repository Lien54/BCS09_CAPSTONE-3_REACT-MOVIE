import { https } from "./configServ";

export const quanLyPhimServ = {
  getAllBanner: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },

  getAllMovies: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09");
  },

  deleteMovie: (maPhim) => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },

  addMovie: (data) => {
    return https.post("/api/QuanLyPhim/ThemPhimUploadHinh", data);
  },

  getDetailFilm: (maPhim) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
  }
};
