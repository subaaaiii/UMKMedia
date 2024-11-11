import React from "react";
import { images } from "../../../constants";

function MomenSection() {
  return (
    <div>
        {/* <1050 */}
        <div className="lg:hidden flex flex-col justify-start items-center mt-10 lg:mt-20 px-4 lg:px-0 w-full lg:w-full max-w-[1050px] gap-6">
            <h1 className="max-w-md text-black500 text-3xl lg:text-4xl font-bold leading-9 lg:leading-15 text-center">
                Pastinya ada banyak momen menarik bersama kami
            </h1>
            <div className="hidden md:block grid lg:grid-cols-2 lg:h-[800px] gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:h-[350px] gap-6 pb-6">
                <div className="border-none overflow-hidden aspect-w-2 aspect-h-1 rounded-lg">
                    <img
                    src={images.career_momen1}
                    alt="Career Momen 1"
                    className="object-cover w-full h-[300px]"
                    />
                </div>
                <div className="border-none overflow-hidden aspect-w-1 aspect-h-1 rounded-lg">
                    <img
                    src={images.career_momen2}
                    alt="Career Momen 2"
                    className="object-cover w-full h-[300px]"
                    />
                </div>
            </div>
            <div className="border-none grid grid-cols-1 md:grid-cols-3 gap-6 lg:pl-6">
                <div className="border-none overflow-hidden aspect-w-1 aspect-h-1">
                    <img
                    src={images.career_momen3}
                    alt="Career Momen 3"
                    className="object-cover w-full h-full"
                    />
                </div>
                <div className="border-none overflow-hidden aspect-w-1 aspect-h-1">
                    <img
                    src={images.career_momen4}
                    alt="Career Momen 4"
                    className="object-cover w-full h-full"
                    />
                </div>
                <div className="border-none overflow-hidden aspect-w-1 aspect-h-1 ">
                    <img
                    src={images.career_momen5}
                    alt="Career Momen 5"
                    className="object-cover w-full h-full"
                    />
                </div>
                </div>
            </div>
        </div>
        
        {/* <768 */}
        <div className="lg:hidden flex flex-row justify-start items-center mt-10 lg:mt-20 px-4 lg:px-0 w-full lg:w-full max-w-[768px] gap-8">
            <div className="md:hidden grid grid-cols-2  lg:h-[800px] gap-5">
                <div className="grid lg:h-[350px] gap-5">
                    <div className="border-none overflow-hidden aspect-w-2 aspect-h-1">
                        <img
                        src={images.career_momen1}
                        alt="Career Momen 1"
                        className="object-cover w-full h-[600px] rounded-lg"
                        />
                    </div>
                    <div className="border-none overflow-hidden aspect-w-1 aspect-h-1">
                        <img
                        src={images.career_momen3}
                        alt="Career Momen 2"
                        className="object-cover w-full h-[535px] rounded-lg"
                        />
                    </div>
                </div>
           
                <div className="grid lg:h-[350px] gap-4">
                <div className="border-none overflow-hidden aspect-w-2 aspect-h-1">
                    <img
                    src={images.career_momen2}
                    alt="Career Momen 1"
                    className="object-cover w-full h-[520px] rounded-lg"
                    />
                </div>
                <div className="border-none overflow-hidden aspect-w-2 aspect-h-1">
                    <img
                    src={images.career_momen4}
                    alt="Career Momen 1"
                    className="object-cover w-[100%] h-[300px] rounded-lg"
                    />
                </div>
                <div className="border-none overflow-hidden aspect-w-1 aspect-h-1">
                    <img
                    src={images.career_momen5}
                    alt="Career Momen 2"
                    className="object-cover w-full h-[300px] rounded-lg"
                    />
                </div>
                </div>
            </div>
        </div>

        {/* >1050*/}
        <div className="hidden lg:flex flex-col justify-start items-center mt-20 lg:mt-160 px-10 lg:px-0 w-full lg:w-[1050px] gap-20">
        <h1 className="max-w-[564px] text-black500 text-[24px] lg:text-[40px] font-bold leading-[36px] lg:leading-[60px] text-center">
            Pastinya ada banyak momen menarik bersama kami
        </h1>
        <div class="grid grid-cols-1 divide-y lg:h-[800px]" >
            <div>
                <div class="grid grid-cols-2 divide-x lg:h-[350px]" >
                    <div className="border-none" style={{width:'700px'}}><img src={images.career_momen1} alt="Career Momen 1" style={{ width: '693px', height: '337px' }}/></div>
                    <div className="border-none"><img src={images.career_momen2} alt="Career Momen 2" style={{ width: '337px', height: '337px', marginLeft: '188px' }}/></div>
                </div>
            </div>
            <div className="border-none">
                <div class="grid grid-cols-3 divide-x" style={{paddingBottom: '100px'}}>
                    <div className="border-none"><img src={images.career_momen3} alt="Career Momen 3" style={{ width: '337px', height: '337px' }}/></div>
                    <div className="border-none"><img src={images.career_momen4} alt="Career Momen 4" style={{ width: '337px', height: '337px', marginLeft: '7px' }}/></div>
                    <div className="border-none"><img src={images.career_momen5} alt="Career Momen 5" style={{ width: '337px', height: '337px', marginLeft: '13px' }}/></div>
                </div>
            </div>
        </div>
        </div>
    </div> 
  );
}

export default MomenSection;