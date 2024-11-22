function Footer() {
    return (
        <>
            <div className="bg-[#17312F]  container p-6">
                <div className="text-[#CBFF54] text-[12px] ">
                    <div className=" grid  sm:grid-cols-2  ">
                        <div className="sm:flex justify-start  sm:place-items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 38 36" fill="none"
                                className="w-10"><path fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.74483 35.9992H2.48909C1.11477 35.9992 0 35.2775 0 34.3873V1.61193C0 0.721686 1.11357 0 2.48909 0H6.74483C8.77386 0 9.94705 4.6827 10.5072 8.41554C10.951 4.56678 11.665 0 12.4703 0H15.2675C16.6137 0 17.705 7.94609 17.705 18.7553C17.705 24.2106 16.6137 36 15.2675 36H12.4703C11.6226 36 10.8759 31.5373 10.4392 28.0243C9.8549 31.6747 8.69559 36 6.74483 36V35.9992ZM25.0819 18C25.0819 27.9411 23.8268 36 22.2786 36C20.7304 36 19.4753 27.9411 19.4753 18C19.4753 8.05888 20.7304 0 22.2786 0C23.8268 0 25.0819 8.05888 25.0819 18ZM29.4536 34.1998C30.6304 34.1998 31.5843 26.9402 31.5843 17.9851C31.5843 9.03005 30.6304 1.77051 29.4536 1.77051C28.2769 1.77051 27.3229 9.03005 27.3229 17.9851C27.3229 26.9402 28.2769 34.1998 29.4536 34.1998ZM37.1805 18.1384C37.1805 24.2446 36.7417 29.1947 36.2005 29.1947C35.6594 29.1947 35.2206 24.2446 35.2206 18.1384C35.2206 12.0321 35.6594 7.08206 36.2005 7.08206C36.7417 7.08206 37.1805 12.0321 37.1805 18.1384Z"
                                    fill="currentColor"></path></svg>

                            <span className="pl-5 ">
                                © 2024 the resonance
                            </span>
                        </div>
                        {/* grid grid-cols-2 sm:grid-cols-4  flex space-x-4*/}
                        <ul className="flex gap-5 place-self-end  items-center ">
                            <li className="py-[6px] border border-transparent px-6 hover:border hover:border-[#CBFF54] w-fit rounded-md ">LICENSE</li>
                            <li className="py-[6px] border border-transparent px-6 hover:border hover:border-[#CBFF54] w-fit rounded-md ">STYLE GUIDE</li>
                            <li className="py-[6px] border border-transparent px-6 hover:border hover:border-[#CBFF54] w-fit rounded-md ">THE RESONANCE</li>
                            <li className="py-[6px] border border-transparent px-6 hover:border hover:border-[#CBFF54] w-fit rounded-md ">WEBFLOW</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;