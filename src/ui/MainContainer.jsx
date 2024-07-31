import React, { useState } from "react";
import { useLayoutData } from "../context/LayoutContext";
import ListView from "./ListView";
import CardView from "./CardView";

function MainContainer() {
  const [currentPage, setCurrentPage] = useState(1);

  const { cardView } = useLayoutData();
  return (
    <div className=" overflow-hidden ">
      {cardView ? (
        <CardView currentPage={currentPage} setCurrentPage={setCurrentPage} />
      ) : (
        <ListView currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default MainContainer;
