import React, { useState } from "react";
import { DatePicker, Rate, Space, Switch } from "antd";
import { useFormik } from "formik";
import "./../../assets/css/addMovie.css";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import moment from "moment";

const AddMovie = () => {
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: true,
      sapChieu: "",
      hot: "",
      danhGia: "",
      hinhAnh: "",
    },
    onSubmit: (values, {resetForm}) => {
      console.log(values);

      const formData = new FormData();
      for (let key in values) {
        console.log(key);
        if (key == "hinhAnh") {
          formData.append("File", values[key]);
        } else if (key == "ngayKhoiChieu") {
          // moment
          formData.append(key, moment(values[key]).format("DD-MM-YYYY"));
        } else {
          formData.append(key, values[key]);
        }
      }
      formData.append("maNhom", "GP09");
      quanLyPhimServ
        .addMovie(formData)
        .then((res) => {
          console.log(res);
          resetForm();
          setImage('');
          // thông báo
          // chuyển hướng người dung về lại trang quản lí phim
        })
        .catch((err) => {
          console.log(err);
          // thông báo lí do chưa tạo được
        });
    },
  });

  const [image, setImage] = useState("");

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    reset,
    resetForm,
  } = formik;

  return (
    <div>
      <h2 className="font-bold text-2xl mb-5">Tạo mới phim</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="max-w-sm">
          <div className="mb-5">
            <label
              htmlFor="tenPhim"
              className="block mb-2 text-2xl font-medium text-gray-900"
            >
              Tên phim
            </label>
            <input
              type="type"
              id="tenPhim"
              name="tenPhim"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Vui lòng nhập tài khoản"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tenPhim}
            />
            {/* {errors.taiKhoan && touched.taiKhoan ? (
              <p className="text-red-600 text-xs mt-1">{errors.taiKhoan}</p>
            ) : null} */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="trailer"
              className="block mb-2 text-2xl font-medium text-gray-900"
            >
              Trailer
            </label>
            <input
              type="text"
              id="trailer"
              name="trailer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Vui lòng nhập mật khẩu"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.trailer}
            />
            {/* {errors.matKhau && touched.matKhau ? (
              <p className="text-red-600 text-xs mt-1">{errors.matKhau}</p>
            ) : null} */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="moTa"
              className="block mb-2 text-2xl font-medium text-gray-900"
            >
              Mô tả
            </label>
            <input
              type="text"
              id="moTa"
              name="moTa"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Vui lòng nhập mật khẩu"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.moTa}
            />
            {/* {errors.matKhau && touched.matKhau ? (
              <p className="text-red-600 text-xs mt-1">{errors.matKhau}</p>
            ) : null} */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="ngayKhoiChieu"
              className="block mb-2 text-2xl font-medium text-gray-900"
            >
              Ngày khởi chiếu
            </label>
            <DatePicker
              onChange={(date, dateString) => {
                // console.log(date);
                // console.log(dateString);
                setFieldValue("ngayKhoiChieu", date);
              }}
              format={"DD-MM-YYYY"}
              // changeOnBlur={handleBlur}
              value={values.ngayKhoiChieu}
            />
            {/* {errors.matKhau && touched.matKhau ? (
              <p className="text-red-600 text-xs mt-1">{errors.matKhau}</p>
            ) : null} */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="dangChieu"
              className="block mb-2 text-2xl font-medium text-gray-900"
            >
              Đang chiếu
            </label>
            <Switch
              onChange={(checked, event) => {
                setFieldValue("dangChieu", checked);
              }}
              value={values.dangChieu}
            />
            {/* {errors.matKhau && touched.matKhau ? (
              <p className="text-red-600 text-xs mt-1">{errors.matKhau}</p>
            ) : null} */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="sapChieu"
              className="block mb-2 text-2xl font-medium text-gray-900"
            >
              Sắp chiếu
            </label>
            <Switch
              onChange={(checked, event) => {
                setFieldValue("sapChieu", checked);
              }}
              value={values.sapChieu}
            />
            {/* {errors.matKhau && touched.matKhau ? (
              <p className="text-red-600 text-xs mt-1">{errors.matKhau}</p>
            ) : null} */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="hot"
              className="block mb-2 text-2xl font-medium text-gray-900"
            >
              Hot
            </label>
            <Switch
              onChange={(checked, event) => {
                setFieldValue("hot", checked);
              }}
              value={values.hot}
            />
            {/* {errors.matKhau && touched.matKhau ? (
              <p className="text-red-600 text-xs mt-1">{errors.matKhau}</p>
            ) : null} */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="danhGia"
              className="block mb-2 text-2xl font-medium text-gray-900"
            >
              Đánh giá
            </label>
            <Rate
              value={values.danhGia}
              onChange={(value) => setFieldValue("danhGia", value)}
            />
            {/* {errors.matKhau && touched.matKhau ? (
              <p className="text-red-600 text-xs mt-1">{errors.matKhau}</p>
            ) : null} */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="hinhAnh"
              className="block mb-2 text-2xl font-medium text-gray-900"
            >
              Hình ảnh
            </label>
            <img className="w-1/2" src={image} alt="" />
            <input
              type="file"
              name="hinhAnh"
              onBlur={handleBlur}
              accept="image/*"
              onChange={(event) => {
                // console.log(event.target.files[0]);
                const img = event.target.files[0];
                if (img) {
                  const urlImg = URL.createObjectURL(img);
                  console.log(urlImg);
                  setImage(urlImg);
                }
                setFieldValue("hinhAnh", img);
              }}
            />
            {/* {errors.matKhau && touched.matKhau ? (
              <p className="text-red-600 text-xs mt-1">{errors.matKhau}</p>
            ) : null} */}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Thêm phim
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
