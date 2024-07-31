import React from "react";
import { useLayoutData } from "../context/LayoutContext";
import Pagination from "./Pagination";
import img1 from "../assets/card1Img.png";
import crossIcon from "../assets/close.png";

function CardView({ currentPage, setCurrentPage }) {
  const { apiData, loading, error, deleteItem } = useLayoutData();
  const itemsPerPage = 6;

  const indexOflastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOflastItem - itemsPerPage;
  const currentItems = apiData?.slice(indexOfFirstItem, indexOflastItem);
  console.log(currentItems);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  function formatDateToGMT() {
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "GMT",
      timeZoneName: "short",
    };

    const now = new Date();
    return new Intl.DateTimeFormat("en-GB", options).format(now);
  }

  return (
    <div className="h-screen mt-[76px] flex flex-col overflow-y-scroll ml-[77px]">
      <div className="flex items-center justify-start">
        <div className="grid grid-cols-3 grid-rows-2  gap-[35px]  justify-start items-center ">
          {currentItems.map((data) => {
            return (
              <ul
                key={data.id}
                className="bg-white relative rounded-[8px] overflow-hidden px-[25px] flex flex-col justify-start max-h-[313px]  items-center   h-full min-h-[313px]   pt-[33px] w-[274px]"
              >
                <li className="flex flex-col justify-between item mb-[23px]  h-full">
                  <div className="flex flex-col justify-start">
                    <h2 className="text-[20px] first-letter:capitalize  font-bold">
                      {data.title.slice(0, 40) + "..."}
                    </h2>
                    <p className="text-[16px]  first-letter:capitalize font-normal">
                      {data.title.slice(0, 40) + "..."}
                    </p>
                    <span className=" font-bold text-[16px] text-[#B9B9B9]">
                      {formatDateToGMT()}
                    </span>
                  </div>
                  {/* img */}
                  <div className="">
                    <img
                      className="max-w-[224px] max-h-[122px]"
                      src={img1}
                      alt=""
                    />
                  </div>
                </li>
                <img
                  onClick={() => deleteItem(data.id)}
                  className="absolute cursor-pointer w-[18px] h-[18px] top-3 right-3"
                  src={crossIcon}
                  alt=""
                />
              </ul>
            );
          })}
        </div>
      </div>
      <Pagination
        totalItems={apiData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default CardView;
