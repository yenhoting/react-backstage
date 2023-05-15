const Table = (props) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            {props.titles.map((value, index) => {
              return <th key={index}>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.datas.map((value, index) => {
            return (
              <tr key={index}>
                {Object.entries(value)
                  .filter((v) => {
                    return props.columns.includes(v[0]);
                  })
                  .map((v, i) => {
                    return <td key={i}>{v[1]}</td>;
                  })}
                <td style={{ width: "200px", textAlign: "center" }}>
                  <button className="btn btn-primary">
                    <i className="fa fa-file-alt"></i> 檢視
                  </button>{" "}
                  <button className="btn btn-primary">
                    <i className="fa fa-trash-alt"></i> 刪除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="clearfix">
        {/* <ul className="pagination pagination-sm m-0 float-right">
          <li className="page-item">
            <a className="page-link" href="#">
              &laquo;
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              &raquo;
            </a>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default Table;
