import React from "react";

export default function Sidebar({handleToggleModal, data}) {
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverLay"></div>
      <div className="sidebarContents">
      <h2>{data?.title}</h2>
      <div>
        <p className="description"> {data?.date} </p>
        <p className="explanation">{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
        <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  );
}
