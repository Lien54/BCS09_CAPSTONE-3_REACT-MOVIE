import React from "react";
import * as loginAnimation from "./../../assets/animation/loginAnimation.json";
import Lottie from "react-lottie";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { userServ } from "../../services/userServ";
import { message } from "antd";
import { saveLocalStore } from "../../utils/local";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveInfoUser } from "../../redux/slice/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      onSubmit: (values) => {
        console.log(values);
        userServ
          .loginServ(values)
          .then((res) => {
            console.log(res);
            messageApi.open({
              type: "success",
              content: "Đăng nhập thành công",
            });
            saveLocalStore(res.data.content, "user_info");
            dispatch(saveInfoUser(res.data.content));
            setTimeout(() => {
              navigate("/");
            }, 1000);
          })
          .catch((err) => {
            console.log(err);
            messageApi.open({
              type: "error",
              content: err.response.data.content,
            });
          });
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng không bỏ trống"),
        matKhau: Yup.string().required("Vui lòng không bỏ trống"),
      }),
    });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      {contextHolder}
      <div className="h-screen flex justify-center items-center">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="col_left">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className="col-right">
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <h2 className="font-bold text-3xl mb-5">Đăng nhập movie</h2>
                <div className="max-w-sm">
                  <div className="mb-5">
                    <label
                      htmlFor="taiKhoan"
                      className="block mb-2 text-2xl font-medium text-gray-900"
                    >
                      Tài khoản
                    </label>
                    <input
                      type="type"
                      id="taiKhoan"
                      name="taiKhoan"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Vui lòng nhập tài khoản"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.taiKhoan}
                    />
                    {errors.taiKhoan && touched.taiKhoan ? (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.taiKhoan}
                      </p>
                    ) : null}
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="matKhau"
                      className="block mb-2 text-2xl font-medium text-gray-900"
                    >
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      id="matKhau"
                      name="matKhau"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Vui lòng nhập mật khẩu"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.matKhau}
                    />
                    {errors.matKhau && touched.matKhau ? (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.matKhau}
                      </p>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
