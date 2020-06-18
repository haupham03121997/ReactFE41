import React, { Component } from "react";
import BTProductItem from "./BTProductItem";

export default class BTProductList extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" class="container-fluid pt-5 pb-5">
          <h1 class="text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <div className="col-3">
              <BTProductItem />
            </div>
            <div className="col-3">
              <BTProductItem />
            </div>
            <div className="col-3">
              <BTProductItem />
            </div>
            <div className="col-3">
              <BTProductItem />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
