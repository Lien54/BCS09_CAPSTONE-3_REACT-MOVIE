import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { Button, Card } from "antd";
import Slider from "react-slick";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import FilmItem from "./FilmItem";

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

const DanhSachPhim = () => {
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
  const dispatch = useDispatch;

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
  }, []);

  return (
    <div className="container">
      <Slider {...setting}>
        {phim.map((item, index) => {
          return (
            <div className="danhSachPhim" key="index">
              <NavLink to={`/detail-film/${item.maPhim}`}>
                <FilmItem props={item} />
              </NavLink>
              
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default DanhSachPhim;
