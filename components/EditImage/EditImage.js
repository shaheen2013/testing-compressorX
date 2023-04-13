import Image from "next/image";
import original from "@/public/assets/images/original.png";
import compressed from "@/public/assets/images/compressed.png";
import GradientButton from "../button/GradientButton";

const EditImage = (selectedImage) => {
    console.log(selectedImage.selectedImage)
    return (
        <>
            <div className="my-5">
                <div className="card bg-white shadow-md">
                    <div className="card-body">
                        <p className="font-mulish normal font-semibold uppercase text-christalle text-x18 lg:text-x24 text-center">Preview</p>
                        <div className="flex">
                            <div className="original relative w-full">
                                <div className="absolute top-0 bg-lightWhite w-full">
                                    <div className="py-1">
                                        <p className="font-mukta normal font-normal text-x16 text-center text-christalle">Original File: 1.6MB</p>
                                    </div>
                                </div>
                                <Image src={original} className="w-full h-64" />
                            </div>
                            <div className="compressed relative w-full">
                                <div className="absolute top-0 bg-lightWhite w-full">
                                    <div className="py-1">
                                        <p className="font-mukta normal font-normal text-x16 text-center text-christalle">Compressed File: 393KB</p>
                                    </div>
                                </div>
                                <Image src={compressed} className="w-full h-64" />
                            </div>
                        </div>
                        <div className="d-block xl:d-none text-center">
                            <div className="flex">
                                <p className="font-mukta normal font-bold text-x14 text-martinique">Quality</p>
                                <input type="range" min="0" max="100" defaultValue="50" className="mt-2 ml-3 w-full h-1 bg-white accent-lavender relative" />
                            </div>
                            <GradientButton text={"Save"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditImage;
