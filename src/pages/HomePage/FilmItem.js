import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Card } from "antd";

const FilmItem = ({ props }) => {
  return (
    <div className="movie-item">
      <Card style={{ width: 300, height: 480 }}>
        <img className="rounded-t-lg w-72 h-80" alt="" src={props.hinhAnh} />
        <div className="flex p-5">
          <a href="#">
            <h5 className="text-xl font-bold tracking-tight text-orange-600">
              C18
            </h5>
          </a>
          <p className="ms-3 text-xl font-bold tracking-tight text-gray-900 truncate">
            {props.tenPhim}
          </p>
        </div>

        <Link to={`/detail-film/${props.maPhim}`} className="text-white">
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Đặt vé
          </button>
        </Link>
      </Card>
    </div>
  );
};

export default FilmItem;
