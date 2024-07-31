import React from "react";
import userImg from "../assets/1.png";
import cardIcon from "../assets/cardicon.png";
import listView from "../assets/listIcon.png";
import { useLayoutData } from "../context/LayoutContext";

function Sidebar() {
  const { cardView, setCardView, setShowForm, showForm } = useLayoutData();

  return (
    <div
      className={`w-full h-full ${
        showForm ? "shadow-none" : "shadow-lg"
      }  flex-col flex justify-start items-center rounded-r-[32px]  max-w-[391px] `}
    >
      <div className="flex mt-[76px] z-40 bg-white p-[13px] w-[278px] h-[77px] rounded-[8px]">
        <img className="" src={userImg} alt="" />
        <div className=" ml-5">
          <h2 className="text-[20px] capitalize font-bold">Hi Reader,</h2>
          <p className="text-[1rem]">Here’s your News!</p>
        </div>
      </div>

      {!showForm && (
        <div className="bg-white rounded-[8px] z-40 mt-[25px] py-[15px] justify-start items-center w-[278px] h-[161px] flex flex-col">
          <h2 className=" text-[28px] capitalize font-bold">View Toggle</h2>

          <div className="flex mt-[18px] mb-[2px] z-40  max-w-[215px] items-center h-[78px]">
            <div
              onClick={() => setCardView(true)}
              className={` active:bg-[#e2ebf1] cursor-pointer hover:bg-[#d1dce4] w-[0px_18px_88px_-4px_#18274B24_inset] shadow-[0px_8px_28px_-6px_#18274B1F_inset] rounded-l-[8px]  pr-[27px] pl-[35px] h-full flex items-center justify-center  ${
                cardView ? "bg-[#A3FFD3]" : "bg-[#EBF2F7]"
              }`}
            >
              <img src={cardIcon} className="w-[45px] h-[34px]" alt="" />
            </div>
            <div
              onClick={() => setCardView(false)}
              className={`bg-[#A3FFD3] cursor-pointer hover:bg-[#9cfccd] active:bg-[#93f7c6] flex items-center h-full  rounded-r-[8px] justify-center  pl-[25px] pr-[34px]

              ${!cardView ? "bg-[#A3FFD3]" : "bg-[#EBF2F7]"}
            `}
            >
              <img src={listView} className="w-[49px] h-[35px]" alt="" />
            </div>
          </div>
        </div>
      )}

      <div className="flex mt-[29px] z-40 py-[18px] w-[278px] rounded-[8px] h-[150px] bg-white flex-col justify-center items-center">
        <h2 className=" font-bold text-[28px]">Have a Feedback?</h2>
        <button
          onClick={() => setShowForm((show) => !show)}
          className={` ${
            showForm ? "bg-[#FFAFAF]" : "bg-[#A3FFD3]"
          }  hover:bg-[#9cfccd] active:bg-[#93f7c6] active:text-[18px]   mt-[21px] rounded-[8px] w-[229px] h-[58px]  text-[20px] font-bold`}
        >
          We’re Listening!
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
