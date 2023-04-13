import React from "react";
import RangeSlider from "../rangeslider/RangeSlider";
import CustomSelect from "../select/CustomSelect";

const CustomizeFile = () => {
  const [resize_tab, setResizeTab] = React.useState("px");
  const [qualityDefaultText, setQualityDefaultText] =
    React.useState("Best Quality");
  const [deviceDefaultText, setDeviceDefaultText] = React.useState("Phone");

  const [qualityText, setQualityText] = React.useState([
    { id: 1, name: "Best Quality" },
  ]);
  const [deviceText, setDeviceText] = React.useState([
    { id: 1, name: "Phone" },
    { id: 2, name: "Tablet" },
    { id: 3, name: "Desktop" },
    { id: 4, name: "Watch" },
  ]);
  return (
    <div className="m-5">
      <div className="md:flex justify-between gap-10">

        {/* Resize */}
        <div className="font-mulish md:w-[50%] xl:w-[100%]">
          <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base">
            Resize
          </p>
          <div className="flex">
            <button
              className={
                `w-[100%] ${resize_tab === "px"
                  ? "text-sm border-r-2 w-24 px-1 py-2 my-10 bg-lavender font-bold normal text-christalle border-lavender rounded-l-lg md:text-base"
                  : "text-sm border-r-2 w-24 px-1 py-2 my-10 bg-lightLavender text-lavender font-bold normal border-lavender rounded-l-lg md:text-base"}`
              }
              onClick={() => {
                setResizeTab("px");
              }}
            >
              px
            </button>
            <button
              className={
                `w-[100%] ${resize_tab === "percentage"
                  ? "text-sm border-r-2 w-24 px-1 py-2 my-10 bg-lavender font-bold normal text-christalle border-lavender md:text-base"
                  : "text-sm border-r-2 w-24 px-1 py-2 my-10 bg-lightLavender text-lavender font-bold normal border-lavender md:text-base"}`
              }
              onClick={() => {
                setResizeTab("percentage");
              }}
            >
              percentage
            </button>
            <button
              className={
                `w-[100%] ${resize_tab === "device"
                  ? "text-sm border-r-2 w-24 px-1 py-2 my-10 bg-lavender font-bold normal text-christalle border-lavender rounded-r-lg md:text-base"
                  : "text-sm border-r-2 w-24 px-1 py-2 my-10 bg-lightLavender text-lavender font-bold normal border-lavender rounded-r-lg md:text-base"}`
              }
              onClick={() => {
                setResizeTab("device");
              }}
            >
              device
            </button>
          </div>
          <p className="font-mulish font-medium normal text-sm md:text-lg lg:text-base text-butterflyBush">
            Size( max size 10000 x 10000)
          </p>

          {resize_tab === "px" ? (
            <>
              <div className="flex my-5">
                <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">
                  Width
                </span>
                <input
                  type="text"
                  placeholder="Enter size"
                  className="input input-bordered rounded-lg mx-3 w-[140px] sm:w-[140px] lg:w-full text-butterflyBush"
                />
                <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">
                  px
                </span>
              </div>
              <div className="form-control my-5">
                <label className="flex justify-center">
                  <input type="checkbox" className="border-lavender" />
                  <span className="bg-transparent  text-butterflyBush text-sm font-normal normal ml-3">
                    Resize to fit
                  </span>
                </label>
              </div>
            </>
          ) : (
            <></>
          )}
          {resize_tab === "percentage" ? (
            <>
              <div className="flex my-5">
                <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">
                  Size
                </span>
                <input
                  type="text"
                  placeholder="Enter size"
                  className="input input-bordered  rounded-lg mx-3 text-butterflyBush"
                />
                <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">
                  {" "}
                  %
                </span>
              </div>
            </>
          ) : (
            <></>
          )}
          {resize_tab === "device" ? (
            <div className="my-5">
              <CustomSelect
                defaultText={deviceDefaultText}
                optionsList={deviceText}
                showOptionList={false}
              />
            </div>
          ) : (
            <></>
          )}
          <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base">
            Compression type:
          </p>
          <CustomSelect
            defaultText={qualityDefaultText}
            optionsList={qualityText}
            showOptionList={false}
          />
          {/* This global Section will be visible in tablet mode only */}

          <div className="font-mulish md:block xl:hidden">
            <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base">
              Globals
            </p>
            <div className="form-control my-5">
              <label className="input-group">
                <input
                  type="checkbox"
                  className="checkbox checkbox-md checkbox-border-radius border-lavender"
                />
                <span className="bg-transparent text-butterflyBush text-sm font-normal normal">
                  Keep EXIT data
                </span>
              </label>
            </div>
            <div className="form-control my-5">
              <label className="input-group">
                <input
                  type="checkbox"
                  className="checkbox checkbox-md checkbox-border-radius border- border-lavender"
                />
                <span className="bg-transparent text-butterflyBush text-sm font-normal normal">
                  Fix orientation
                </span>
              </label>
            </div>
            <div className="form-control my-5">
              <label className="input-group">
                <input
                  type="checkbox"
                  className="checkbox checkbox-md checkbox-border-radius border-lavender"
                />
                <span className="bg-transparent text-butterflyBush text-sm font-normal normal">
                  Package for all devices
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Globals  */}

        <div className="font-mulish hidden xl:block">
          <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base">
            Globals
          </p>
          <div className="form-control my-5">
            <label className="input-group">
              <input
                type="checkbox"
                className="checkbox checkbox-md checkbox-border-radius border-lavender"
              />
              <span className="bg-transparent text-butterflyBush text-sm font-normal normal">
                Keep EXIT data
              </span>
            </label>
          </div>
          <div className="form-control my-5">
            <label className="input-group">
              <input
                type="checkbox"
                className="checkbox checkbox-md checkbox-border-radius border- border-lavender"
              />
              <span className="bg-transparent text-butterflyBush text-sm font-normal normal">
                Fix orientation
              </span>
            </label>
          </div>
          <div className="form-control my-5">
            <label className="input-group">
              <input
                type="checkbox"
                className="checkbox checkbox-md checkbox-border-radius border-lavender"
              />
              <span className="bg-transparent text-butterflyBush text-sm font-normal normal">
                Package for all devices
              </span>
            </label>
          </div>

          {/* Rename Section */}
          {/* This section is hidden in tablet mode */}
          <div className="md:hidden lg:block">
            <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base">
              Rename
            </p>
            <div className="flex my-5">
              <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">
                prefix
              </span>
              <input
                type="text"
                placeholder="Enter size"
                className="input input-bordered rounded-lg mx-3 text-butterflyBush"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter size"
                className="input input-bordered rounded-lg mx-3  text-butterflyBush"
              />
              <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">
                suffix
              </span>
            </div>
          </div>
        </div>

        {/* This is Rename and Image Quality Section */}

        <div className="md:w-[50%] xl:w-[100%]">
          {/* Rename Section */}
          {/* This rename section will be visible only tablet */}

          <div className="md:block xl:hidden">
            <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base">
              Rename
            </p>
            <div className="flex my-5">
              <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">
                prefix
              </span>
              <input
                type="text"
                placeholder="Enter size"
                className="w-[140px] sm:w-full  input input-bordered rounded-lg  mx-3 text-butterflyBush"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter size"
                className="w-[140px] sm:w-full  input input-bordered rounded-lg mx-3  text-butterflyBush"
              />
              <span className="bg-transparent text-butterflyBush text-sm font-normal normal mt-3">
                suffix
              </span>
            </div>
          </div>

          {/* Image Quality */}
          <div className="font-mulish">
            <p className="font-semibold text-christalle normal lg:text-xl md:text-lg text-base mb-5">
              Image Quality
            </p>
            <div className="my-2">
              <span className="bg-transparent text-butterflyBush text-sm font-normal normal pr-5 mb-3">
                JPG
              </span>
              <RangeSlider value={60} />
            </div>
            <div className="my-2">
              <span className="bg-transparent text-butterflyBush text-sm font-normal normal pr-5 mb-3">
                PNG
              </span>
              <RangeSlider value={70} />
            </div>
            <div className="my-2">
              <span className="bg-transparent text-butterflyBush text-sm font-normal normal pr-5 mb-3">
                WEBP
              </span>
              <RangeSlider value={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeFile;
