import axios from "axios";
import { useState } from "react";
import Table from "../components/Table";
import config from "../configuration.json";

const Menu = () => {
  const [filter, setFilter] = useState({
    menuName: "",
  });
  const [datas, setDatas] = useState([]);

  const titles = ["選單名稱", "排序", "圖示", ""];
  const columns = ["MenuName", "Sequence", "Icon"];

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFilter({
      [name]: value,
    });
  };

  const handleQuery = () => {
    axios
      .post(config.SERVER_URL + "SYS/MenuListQuery", {
        MenuName: filter.menuName,
      })
      .then((res) => {
        if (res.status === 200) {
          setDatas(res.data);
        }
      });
  };

  const clearField = () => {
    const tempFilter = { ...filter };
    Object.keys(tempFilter).forEach((item) => {
      tempFilter[item] = "";
    });
    setFilter(tempFilter);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="text-right">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-plus"></i> 新增
                </button>
              </div>
            </div>
            <div className="card-body">
              <form id="formCriteria" className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-3">
                    <label className="control-label">選單名稱</label>
                    <input
                      name="menuName"
                      type="text"
                      className="form-control"
                      maxLength="20"
                      value={filter.menuName}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="text-right">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleQuery}
                >
                  <i className="fa fa-search"></i> 查詢
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={clearField}
                >
                  <i className="fa fa-eraser"></i> 清除
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{ display: datas.length > 0 ? "block" : "none" }}
      >
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <Table datas={datas} titles={titles} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
