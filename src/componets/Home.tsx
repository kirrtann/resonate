import Card from "../common/Card";
import { Newsletter } from "../common/Newsletter";

function Home() {
    return (
        <>
            <div className="bg-[#17312F]">
                <div className=" font-sans justify-center pl-[40px] mx-auto container">
                    <div className="pt-10     ">
                        <div className="bg-[url('https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9deb71f04baae08259083_Hero.png')] flex relative justify-start items-end  bg-cover bg-center w-full rounded-xl h-[500px]">
                            <div className="text-white bottom-5 m-1 mb-6 backdrop-blur-sm bg-[#17312F]/50 w-fit p-5 rounded-xl ">
                                <div>
                                    <p className="opacity-100">  UI Desing</p>
                                    <h2 className="text-[30px]">Essential UI Design Tools for Designers</h2>
                                    <button className="hover:bg-[#CBFF54] border px-2 py-2 rounded-md border-[#CBFF54] text-[#CBFF54] hover:text-black ">read more</button></div>
                                <div className="justify-items-end"><img className="w-[30px] rounded-full  " src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9c11534c3c55b4c45a069_alex.png" alt="" /></div>
                            </div>

                        </div>

                        <div className="container "> <div className="sm:mt-10 mt-5 mb-5 sm:mb-10 sticky top-0 pt-3  place-items-center  ">
                            <div className="backdrop-blur-md border border-gray-300 rounded-md bg-[#17312F] space"><ul className="flex text-[12px]  tracking-wide space-x-3   p-[0.5rem]  text-white  ">
                                <li className=" text-black bg-[#CBFF54] px-4 py-1 rounded-md " >ALL</li>
                                <li className="hover:bg-gray-500 px-3 rounded-md  py-1 ">Ul DESING </li>
                                <li className="hover:bg-gray-500 px-3 rounded-md py-1 ">MARKETING</li>
                                <li className="hover:bg-gray-500 px-3  rounded-md py-1 ">SEO</li>
                                <li className="hover:bg-gray-400 px-3   rounded-md py-1 ">MOTOIN DESING</li></ul></div>
                        </div>
                            <div className=" p-2 justify-center   sm:place-items-center gap-10 flex flex-wrap sm:grid  sm:grid-cols-2 md:grid-cols-3 " >
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
                            </div></div>

                        <Newsletter />

                    </div></div></div>
        </>
    );
}

export default Home;
