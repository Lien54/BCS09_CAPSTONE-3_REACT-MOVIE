import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { quanLyRapServ } from "../../services/quanLyRapServ";
import LichChieuCumRap from "./LichChieuCumRap";

const LichChieuRap = () => {
  // tạo 1 state
  const [rap, setRap] = useState([]);
  const [maHeThongRap, setMaHeThongRap] = useState([""]);

  // tạo 1 hook
  useEffect(() => {
    quanLyRapServ
      .getAllRap()
      .then((res) => {
        console.log(res);
        setRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="py-20">
      <div className="container">
        <Tabs
          defaultActiveKey="1"
          tabPosition={"left"}
          style={{
            border: '1px solid #8080806e'
          }}
          items={rap.map((item, index) => {
            return {
              label: <img className="w-10" src={item.logo} />,
              key: item.maHeThongRap,
              children: <LichChieuCumRap maHeThongRap={item.maHeThongRap} />,
            };
          })}
        />
      </div>
    </div>
  );
};

export default LichChieuRap;
