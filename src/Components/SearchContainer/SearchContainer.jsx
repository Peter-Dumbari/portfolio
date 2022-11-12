import React from "react";
import "../SearchContainer/SearchContainer.scss";

export default function SearchContainer() {
  return (
    <div
      className="modal fade"
      id="searchContainer"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header"></div>
          <div className="modal-body">
            <div className="searchinput_container">
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <div className="modal-footer">
            <span>Recently search</span>
          </div>
        </div>
      </div>
    </div>
  );
}
