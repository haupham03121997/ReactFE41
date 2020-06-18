import React, { Component } from "react";

export default class DataBinding extends Component {
  hocVien = {
    ma: 1,
    hoTen: "Nguyen van a",
    hinhanh: "https://picsum.photos/200/300",
  };
  //Phương thức renderImg do màn hình tạo ra
  renderIMG = () => <img src="https://picsum.photos/200/300" alt="" />;

  // renderIMF(){}
  //Phương thức render của react Component
  render() {
    let title = "hello fe41";

    return (
      <div>
        <div classname="container">
          <div className="card text-left">
            <img width={100} height={100} className="card-img-top" src={this.hocVien.hinhanh} alt />
            <div className="card-body">
              <h4 className="card-title">{this.hocVien.hoTen}</h4>
              <p className="card-text">Body</p>
            </div>
          </div>
        </div>

        <h1></h1>
        <input type="text" Value={title} />
      </div>
    );
  }
}
