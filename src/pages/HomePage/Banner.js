import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import { useDispatch } from "react-redux";
import { endedLoading, startedLoading } from "../../redux/slice/loadingSlice";

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

const Banner = () => {
  const dispatch = useDispatch();
  const setting = {
    autoplay: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [listBanner, setListBanner] = useState([]);

  useEffect(() => {
    dispatch(startedLoading())
    quanLyPhimServ
      .getAllBanner()
      .then((res) => {
        console.log(res);
        dispatch(endedLoading())
        setListBanner(res.data.content);
      })
      .catch((err) => {
        console.log(err);
        dispatch(endedLoading())
      });
  }, []);

  return (
    <Carousel {...setting}>
      {listBanner.map((item, index) => {
        return (
          <div key={index}>
            <img
              className="w-full h-[900px] object-cover"
              src={item.hinhAnh}
              alt=""
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
