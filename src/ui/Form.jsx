import React from "react";

function Form() {
  return (
    <div className=" h-full w-full  absolute ml-[410px]  top-0 z-30 ">
      <div className="h-full bg-[#EBF2F7] mt-[76px] w-[658px]">
        <h2 className=" font-bold text-[20px] first-letter:capitalize">
          Thank you so much for taking the time!
        </h2>
        <p className="text-[16px] font-normal">
          Please provide the vbelow details
        </p>

        <form
          action="#"
          className="mt-[39px] flex flex-col justify-start w-full  gap-[15px]"
        >
          <div className="flex flex-col">
            <label
              className="text-[16px]  font-normal first-letter:capitalize"
              htmlFor="firstname"
            >
              first name:
            </label>
            <input
              type="text"
              className=" max-w-[346px] h-[43px] rounded-[8px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[16px]  font-normal first-letter:capitalize"
              htmlFor="last name"
            >
              last name:
            </label>
            <input
              type="text"
              className=" max-w-[346px] h-[43px] rounded-[8px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[16px]  font-normal first-letter:capitalize"
              htmlFor="address"
            >
              Address:
            </label>
            <textarea
              name="address"
              className="max-w-[595px] h-[123px]"
              id="address"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label
              className="text-[16px]  font-normal first-letter:capitalize"
              htmlFor="country"
            >
              Country:
            </label>
            <input
              type="text"
              className="h-[43px] rounded-[8px] max-w-[406px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[16px]  font-normal first-letter:capitalize"
              htmlFor="email"
            >
              Email ID:
            </label>
            <input
              type="email"
              className=" max-w-[346px] h-[43px] rounded-[8px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[16px]  font-normal first-letter:capitalize"
              htmlFor="email"
            >
              Phone Number
            </label>
            <div className="flex gap-[10px]">
              <input
                type="numeric"
                className="w-[84px] h-[43px] rounded-[8px]"
              />
              <input type="text" className="w-[253px] h-[43px] rounded-[8px]" />
            </div>
          </div>
        </form>
        <button className="mt-[44px] bg-[#5CC8A1] text-white px-8 py-2 rounded-[8px]">
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default Form;
