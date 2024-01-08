import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { Button, Card } from "antd";
import Slider from "react-slick";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import { Link } from "react-router-dom";

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
    className: "center variable-width",
    autoplay: true,
    arrows: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    variableWidth: true,
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
    <div className="container">
      <h2>Multiple Rows</h2>
      <Slider {...setting}>
        {phim.map((item, index) => {
          return (
            <div className="danhSachPhim" key="index">
              <Card style={{ width: 300, height: 480 }}>
                <img
                  className="rounded-t-lg w-72 h-80"
                  alt=""
                  src={item.hinhAnh}
                />
                <div className="flex p-5">
                  <a href="#">
                    <h5 className="text-xl font-bold tracking-tight text-orange-600">
                      C18
                    </h5>
                  </a>
                  <p className="ms-3 text-xl font-bold tracking-tight text-gray-900 truncate">
                    {item.tenPhim}
                  </p>
                </div>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <Link to={"/detail-film"} className="text-white">Đặt vé</Link>
                </button>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default DanhSachPhim;
