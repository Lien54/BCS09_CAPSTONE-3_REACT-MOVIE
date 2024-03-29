import React, { useEffect, useState } from "react";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import { Space, Table, Tag } from "antd";
import { Button, message, Popconfirm } from "antd";
import { getAllMovieThunk } from "../../redux/slice/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const MovieManage = () => {
  const dispatch = useDispatch();
  const { listMovie } = useSelector((state) => state.movieSlice);
  // const [listMovie, setListMovie] = useState([]);
  console.log(listMovie);

  // const confirm = (e) => {
  //   console.log(e);
  //   message.success("Click on Yes");
  // };
  // const cancel = (e) => {
  //   console.log(e);
  //   message.error("Click on No");
  // };

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      key: "maPhim",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (url) => {
        return <img className="w-20" src={url} alt="" />;
      },
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Mô tả",
      key: "moTa",
      dataIndex: "moTa",
      render: (text) => {
        return <p className="w-56 line-clamp-2">{text}</p>;
      },
    },
    {
      title: "Hành động",
      key: "hanhDong",
      render: (_, record) => {
        return (
          <div className="space-x-3">
            <button className="mr-2 text-lg text-yellow-700">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            {/* <Popconfirm
              title="Bạn có chắc xóa phim này?"
              description="Are you sure to delete this task?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            > */}
            <button
              // danger
              onClick={() => {
                quanLyPhimServ
                  .deleteMovie(record.maPhim)
                  .then(() => {
                    quanLyPhimServ.getAllMovies().then((res) => {
                      dispatch(getAllMovieThunk());
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="text-lg text-red-400"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            {/* </Popconfirm> */}
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(
      getAllMovieThunk({

      })
    )
  }, []);

  return (
    <div>
      <h2 className="font-bold text-2xl mb-5">Danh sách phim</h2>
      <Table
        columns={columns}
        dataSource={listMovie}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
};

export default MovieManage;
