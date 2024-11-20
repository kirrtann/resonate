import Card from "./common/Card";

function Home() {
    return (
        <>
            <div className="pt-10  bg-[#17312F]  ">
                <div className="w-full h-full  container flex justify-center items-center">
                    <div className="bg-[url('https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9deb71f04baae08259083_Hero.png')] flex relative justify-start items-end  bg-cover bg-center w-[80%] rounded-xl h-[500px]">
                        <div className="text-white bottom-5 m-1 mb-6 backdrop-blur-sm bg-[#17312F]/50 w-fit p-5 rounded-xl ">
                            <div>
                                <p className="opacity-100">  UI Desing</p>
                                <h2 className="text-[30px]">Essential UI Design Tools for Designers</h2>
                                <button className="hover:bg-[#CBFF54] border px-1 rounded-md border-[#CBFF54] text-[#CBFF54] hover:text-black ">read more</button></div>
                            <div className="justify-items-end"><img className="w-[30px] rounded-full  " src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9c11534c3c55b4c45a069_alex.png" alt="" /></div>
                        </div>

                    </div>
                </div >
                <div className="mt-10">
                    <div><ul className="flex  rounded-md space-x-3 justify-center items-center p-4 sticky top-0  text-white  ">
                        <li>All</li>
                        <li>Ul DESING </li>
                        <li>MARKETING</li>
                        <li>SEO</li>
                        <li>MOTOIN DESING</li></ul></div>
                </div>
                <div><Card /></div>
            </div>
        </>
    );
}

export default Home;
