import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { quanLyRapServ } from "../../services/quanLyRapServ";
import "../../assets/css/lichChieuCumRap.css";
import moment from "moment";

const LichChieuCumRap = ({ maHeThongRap }) => {
  const [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    quanLyRapServ
      .getInfoShowTimesTheater(maHeThongRap)
      .then((res) => {
        console.log(res);
        setCumRap(res.data.content[0]?.lstCumRap);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [maHeThongRap]);

  return (
    <div className="cum_rap">
      <Tabs
        defaultActiveKey="1"
        tabPosition={"left"}
        style={{
          height: 425,
        }}
        items={cumRap.map((item, index) => {
          return {
            label: (
              <div className="text-left space-y-2">
                <h4 className="truncate text-green-600 uppercase font-medium">
                  {item.tenCumRap}
                </h4>
                <p className="truncate text-sm text-gray-500">{item.diaChi}</p>
                <p className="text-sm text-orange-800">[Chi tiết]</p>
              </div>
            ),
            key: index,
            children: (
              <div className="overflow-scroll">
                {item.danhSachPhim.map((item, index) => {
                  return item.dangChieu ? (
                    <div className="flex p-5">
                      <div className="col_left mr-4">
                        <img className="w-24" src={item.hinhAnh} alt="" />
                      </div>
                      <div className="col_right">
                        <div>
                          <h3 className="font-medium text-lg">
                            <span className="text-white p-1 bg-orange-600 rounded mr-2">
                              C18
                            </span>
                            {item.tenPhim}
                          </h3>
                          <div className="grid grid-cols-2 gap-5 mt-3">
                            {item.lstLichChieuTheoPhim
                              .slice(0, 4)
                              .map((item, index) => {
                                return (
                                  <div className="p-3 border border-gray-400 rounded space-x-2 text-base">
                                    <span className="text-green-600 font-medium">
                                      {moment(item.ngayChieuGioChieu).format(
                                        "DD-MM-YYYY"
                                      )}
                                    </span>
                                    <span>~</span>
                                    <span className="text-orange-600 font-medium">
                                      {moment(item.ngayChieuGioChieu).format(
                                        "hh:mm"
                                      )}
                                    </span>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  );
                })}
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default LichChieuCumRap;
