import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-[""]`}
      style={{
        ...style,
        display: "block",
        insetInlineEnd: "0px",
        fontSize: 20,
        color: "white",
      }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-right" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:content-[""]`}
      style={{
        ...style,
        display: "block",
        insetInlineStart: "0px",
        fontSize: 20,
        color: "white",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-left" />
    </div>
  );
}

const DanhSachPhim = ({ maPhim }) => {
  const setting = {
    autoplay: true,
    arrows: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [phim, setPhim] = useState([]);
  useEffect(() => {
    quanLyPhimServ
      .getAllMovies()
      .then((res) => {
        console.log(res);
        setPhim(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [maPhim]);

  return (
      <Carousel {...setting}>
        {phim.map((item, index) => {
          return (
            <div key={index}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <img className="rounded-t-lg w-full" src={item.hinhAnh} alt="" />
                </a>
                <div className="flex p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      C18
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700">
                    {item.tenPhim}
                  </p>
                  
                </div>
                <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Đặt vé
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
              </div>
            </div>
          );
        })}
      </Carousel>

  );
};

export default DanhSachPhim;
