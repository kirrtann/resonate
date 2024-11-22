import Card from "../common/Card";
import Footer from "../common/Footer";
import { Newsletter } from "../common/Newsletter";
import Navbar from "./Navbar";

function Home() {
    return (
        <>
            <div className="font-mono bg-[#17312F] select-none">
                <div className=" font-sans justify-center  mx-auto container">
                    <Navbar />
                    <div className="pt-10 mr-2 ml-2  ">
                        <div className="bg-[url('https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9deb71f04baae08259083_Hero.png')]  flex relative justify-start items-end  bg-cover bg-center w-full rounded-xl h-[500px]">
                            <div className="text-white bottom-5 m-1 mb-6 backdrop-blur-sm bg-[#17312F]/50 ml-7  rounded-xl ">
                                <div className="p-[3.5rem] ">
                                    <p className="opacity-100 font-mono">  UI Desing</p>
                                    <h2 className="text-[30px] font-mono pr-5 ">Essential UI Design Tools for Designers</h2>
                                    <button className="hover:bg-[#CBFF54] border p-3 mt-2 uppercase text-[.75rem] rounded-2xl border-[#CBFF54] text-[#CBFF54] hover:text-black ">read more</button>
                                    <div className="justify-items-end"><img className="w-[30px] rounded-full  " src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9c11534c3c55b4c45a069_alex.png" alt="" /></div>

                                </div>
                            </div>

                        </div>

                        <div className="container ">
                            <div>
                                <div className="sm:mt-10 mt-5 mb-5 sm:mb-10 sticky top-0 pt-3 overflow-x-auto  place-items-center  ">
                                    <div className=" backdrop-blur-lg border opacity-80 border-gray-600 rounded-2xl bg-[#17312F]"><ul className="flex text-[12px]  tracking-wide sm:space-x-3   p-[0.5rem]  text-white  ">
                                        <li className=" hover:bg-gray-500  px-4 py-1 rounded-md cursor-pointer" >ALL</li>
                                        <li className="hover:bg-gray-500 px-3 rounded-md  py-1 cursor-pointer">UI DESING </li>
                                        <li className="hover:bg-gray-500 px-3 rounded-md py-1 cursor-pointer">MARKETING</li>
                                        <li className="hover:bg-gray-500 px-3  rounded-md py-1 cursor-pointer">SEO</li>
                                        <li className="hover:bg-gray-400 px-3   rounded-md py-1 cursor-pointer">MOTOIN DESING</li></ul></div>
                                </div>
                                <div className=" p-2 justify-center   sm:place-items-center gap-10 flex flex-wrap sm:grid sm:grid-cols-2   lg:grid-cols-3 " >
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9dec00457dd623916ef40_Thumbnail-p-800.png" /></div>
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9dec9357e82e17cd897ef_Thumbnail-1-p-800.png" /></div>
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9ded76a32c94fe084ff36_Thumbnail-3-p-800.png" /></div>
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9dee0c4673978c2e6913e_Thumbnail-6-p-800.png" /></div>
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9df591dba6e0565123f31_Thumbnail-8-p-800.png" /></div>
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9defa2078109ee468e767_Thumbnail-2-p-800.png" /></div>
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9df0e21959abc41e7c7f5_Thumbnail-4-p-800.png" /></div>
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9dec9357e82e17cd897ef_Thumbnail-1-p-800.png" /></div>
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9df179e9263569ff44556_Thumbnail-7-p-800.png" /></div>
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9defa2078109ee468e767_Thumbnail-2-p-800.png" /></div>
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9df04ec3b5a7c3f708db1_Thumbnail-5-p-800.png" /></div>
                                    <div><Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9df591dba6e0565123f31_Thumbnail-8-p-800.png" /></div>
                                </div></div></div>

                        <Newsletter />

                    </div>    </div>
                    <div className="flex items-center justify-center w-full border-t border-t-gray-300">
                    <Footer />
                    </div>


            </div>
        </>
    );
}

export default Home;
