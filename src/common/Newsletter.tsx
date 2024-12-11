export function Newsletter() {
    return (
        <>
            <div className="  bg-[#17312F] max-w-[70rem] w-full  p-2 mx-auto py-[100px]">
                <div className="sm:flex text-white bg-cover rounded-3xl 
                 font-mono bg-[url('https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a058/66e9e3b926706c4ea7169531_Newsletter-BG.png')] bg-no-repeat ">
                    <div className="md:py-[7.5rem] md:pl-[5rem] pr-2 py-10 pl-10 ">
                        <h6 className="sm:text-[40px] text-[25px] pb-2 ">Subscribe to our newsletter</h6>
                        <p className="pb-2">Sign up for your daily dose of creative inspiration, learnings, and growth.</p>
                        <form action="" className="space-y-2  ">
                            <input type="text " className="bg-transparent border border-gray-400 font-[0.75rem] rounded-md py-2 pl-5 w-[100%] outline-none placeholder:text-white hover:border-[#CBFF54] " placeholder="Email Address" /><br />
                            <input type="submit" className="bg-[#CBFF54] w-[100%] py-2 hover:bg-[#013C10] border font-[0.75rem] border-[#CBFF54] hover:text-[#CBFF54] text-black rounded-md " />
                        </form>
                    </div>

                    <div className="  sm:relative w-[100%]  overflow-hidden  rounded-3xl ">
                        <img className="  sm:absolute box-border pt-10 sm:left-[5%] sm:min-w-[46rem]" src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a058/66e9e3bb4b9ae3f7a1d3f140_Newsletter-Float.png" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}
