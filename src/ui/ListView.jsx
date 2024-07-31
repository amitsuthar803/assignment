/* eslint-disable react/prop-types */
import React from "react";
import { useLayoutData } from "../context/LayoutContext";
import Pagination from "./Pagination";
import listImg from "../assets/list.png";
import closeBtn from "../assets/close.png";

function ListView({ currentPage, setCurrentPage }) {
  const itemsPerPage = 5;
  const { apiData, loading, error, deleteItem } = useLayoutData();

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
    <div className="h-screen mt-[76px] overflow-y-scroll ml-[77px]">
      <div className="   flex items-center justify-start">
        <div className="flex flex-col gap-[17px]">
          {currentItems.map((data) => {
            return (
              <ul
                key={data.id}
                className="flex gap-[13px] items-center justify-start  "
              >
                <li
                  key={data.id}
                  className="flex gap-[23px] bg-white rounded-[16px] px-[26px] pt-[28px]  w-[859px] h-[123px] "
                >
                  <img src={listImg} className="w-[67px] h-[67px]" alt="" />
                  <div>
                    <h3 className="font-bold text-[20px]">{data.title}</h3>
                    <p className="text-[20px]  mt-[-5px] font-normal  ">
                      {data.body.slice(0, 72) + "..."}
                    </p>
                    <span className=" font-bold capitalize mt-[9px] text-[#B9B9B9] text-[16px]">
                      {formatDateToGMT()}
                    </span>
                  </div>
                </li>

                <div
                  onClick={() => deleteItem(data.id)}
                  className="bg-white cursor-pointer pt-[13px] pr-[13px] pb-[14px] pl-[14px] rounded-full"
                >
                  <img src={closeBtn} className="w-[22px] h-[22px]" alt="" />
                </div>
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

export default ListView;
