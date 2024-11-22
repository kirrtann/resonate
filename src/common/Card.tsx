import { Link } from "react-router-dom";

function Card({ src }: { src: string }) {
    return (
        <>
            <div className="">

<Link to={"Blogpost"}>
                <div className="w-[100%] box-border border border-gray-500  rounded-3xl  ">
                    <a href="#">
                        <img className="rounded-t-3xl" src={src} alt="Photo" />
                    </a>
                    {/* your can pass the props P and h5 tag like image src */}
                    <div className="p-5 text-white font-mono">
                        <p className="mb-3 text-[12px]"> MOTION DESING</p>
                        <a href="#">
                            <h5 className="mb-2 text-[24px]  tracking-tight ">Using Motion Design for Social Media Marketing</h5>
                        </a>
                        <div className="justify-items-end"><img className="w-[30px] rounded-full  " src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9c11534c3c55b4c45a069_alex.png" alt="" /></div>
                    </div>
                </div>
                </Link>
            </div>

        </>
    )
}
export default Card;