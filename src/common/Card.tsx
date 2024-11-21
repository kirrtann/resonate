function Card({ src }: { src: string }) {
    return (
        <>
            <div className="">


                <div className="w-[100%] box-border border border-gray-500  rounded-lg  ">
                    <a href="#">
                        <img className="rounded-t-lg" src={src} alt="Photo" />
                    </a>
                    {/* your can pass the props P and h5 tag like image src */}
                    <div className="p-5 text-white ">
                        <p className="mb-3 "> MOTION DESING</p>
                        <a href="#">
                            <h5 className="mb-2 text-2xl  tracking-tight ">Using Motion Design for Social Media Marketing</h5>
                        </a>
                        <div className="justify-items-end"><img className="w-[30px] rounded-full  " src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9c11534c3c55b4c45a069_alex.png" alt="" /></div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Card;