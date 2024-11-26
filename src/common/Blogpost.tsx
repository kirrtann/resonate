import Card from "./Card";
import { Newsletter } from "./Newsletter";

export default function Blogpost() {
    return (<>
        <div className="bg-[#17312F] box-border pt-[5rem] mx-auto text-white font-mono">
            <div className="container mx-auto"  >
                <div className="  ">
                    <div className=" ">
                        <div className="">
                            <p className="">Motion Design
                            </p>
                            <h1 className="text-[48px] ">Using Motion Design for Social Media Marketing</h1>
                        </div><div className="md:flex gap-x-5 gap-y-5  md:place-items-center">
                            <div className="" ><img className="w-[30px] mt- rounded-full " src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9c11534c3c55b4c45a069_alex.png" alt="" /></div>
                            <div className="self-stretch w-[1px] bg-[#eef1ea1a]"></div>
                            <div>oct 20 2020</div>
                            <div className="self-stretch w-[1px] bg-[#eef1ea1a] "></div>
                            <div>10 MIN READ</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-10 ">

                        <div><img className="rounded-2xl" src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9dec00457dd623916ef40_Thumbnail-p-800.png" alt="" />
                            <div className="pt-10  ">
                                <h2 className="text-[40px] mt-[32px] mb-2">Introduction to Motion Design in Social Media</h2>
                                <p>Motion design is becoming increasingly important in social media marketing. It helps brands stand out and engage their audience effectively.

                                </p>
                                <h2 className="text-[40px] mt-[32px]">Creating Engaging Content</h2>
                                <p>Use motion design to create eye-catching content that captures attention quickly. Short animations and videos can convey messages more effectively than static images.</p>
                                <h2 className="text-[40px] mt-[32px]">Best Practices for Social Media Motion Design</h2>
                                <p>Keep it Short: Attention spans are short on social media. Aim for concise animations that deliver your message quickly.</p>
                                <p>Brand Consistency: Ensure your motion designs align with your brand identity to create a cohesive look across platforms.</p>
                                <h2 className="text-[40px] mt-[32px]">Measuring Engagement</h2>
                                <p>Track engagement metrics to assess the effectiveness of your motion design in social media campaigns. Use this data to refine your strategies.</p>
                                <h2 className="text-[40px] mt-[32px]">Conclusion  </h2>
                                <p>Incorporating motion design into your social media marketing can enhance your brand's visibility and engagement.</p>
                                <div>
                                    <div className="bg-[#eef1ea0d] rounded-xl mt-5 border border-[#eef1ea1a]  p-[2rem]">
                                        Motion design is a powerful tool for storytelling in the digital age.
                                    </div>
                                </div>
                                <div className="uppercase text-[#CBFF54] border-t border-b mt-5 py-10 border-[#eef1ea1a] flex place-content-center "><div className="pt-2 place-content-start">
                                    read more in:</div>
                                    <div className="place-content-center">
                                        <ul className="flex  tetx-[12px] space-x-2 " >
                                            <li className="border border-transparent rounded-xl px-3 py-1 hover:border-[#CBFF54] ">ui design</li>
                                            <li className="border border-transparent rounded-xl px-3 py-1 hover:border-[#CBFF54] ">marketing</li>
                                            <li className="border border-transparent rounded-xl px-3 py-1 hover:border-[#CBFF54] ">seo</li>
                                            <li className="border border-transparent rounded-xl px-3 py-1 hover:border-[#CBFF54] ">motion desing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[#CBFF54] py-5 ">more Like this</div>
                                    <div className="flex gap-x-3">
                                        <Card
                                        src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9dec00457dd623916ef40_Thumbnail-p-800.png"/>
                                        <Card src="https://cdn.prod.website-files.com/66e9c11534c3c55b4c45a063/66e9dec9357e82e17cd897ef_Thumbnail-1-p-800.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" ml-10 border border-[#eef1ea1a] w-[22rem] sticky top-10 bg-[#eef1ea0d] rounded-2xl ">
                                <div className="grid p-[2rem] text-white ">
                                    <div className="pb-2 text-[#CBFF54]">
                                        <a href="#" className="flex place-items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 38 36" fill="none"
                                                className="w-10"><path fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M6.74483 35.9992H2.48909C1.11477 35.9992 0 35.2775 0 34.3873V1.61193C0 0.721686 1.11357 0 2.48909 0H6.74483C8.77386 0 9.94705 4.6827 10.5072 8.41554C10.951 4.56678 11.665 0 12.4703 0H15.2675C16.6137 0 17.705 7.94609 17.705 18.7553C17.705 24.2106 16.6137 36 15.2675 36H12.4703C11.6226 36 10.8759 31.5373 10.4392 28.0243C9.8549 31.6747 8.69559 36 6.74483 36V35.9992ZM25.0819 18C25.0819 27.9411 23.8268 36 22.2786 36C20.7304 36 19.4753 27.9411 19.4753 18C19.4753 8.05888 20.7304 0 22.2786 0C23.8268 0 25.0819 8.05888 25.0819 18ZM29.4536 34.1998C30.6304 34.1998 31.5843 26.9402 31.5843 17.9851C31.5843 9.03005 30.6304 1.77051 29.4536 1.77051C28.2769 1.77051 27.3229 9.03005 27.3229 17.9851C27.3229 26.9402 28.2769 34.1998 29.4536 34.1998ZM37.1805 18.1384C37.1805 24.2446 36.7417 29.1947 36.2005 29.1947C35.6594 29.1947 35.2206 24.2446 35.2206 18.1384C35.2206 12.0321 35.6594 7.08206 36.2005 7.08206C36.7417 7.08206 37.1805 12.0321 37.1805 18.1384Z"
                                                    fill="currentColor"></path></svg>    <span className="pl-2 text-[20px] font-bold">Kirtan</span>                 </a>
                                    </div>
                                    <div className="  ">
                                        
                                        <h6 className="text-[30px] pb-2 ">Subscribe to our newsletter</h6>
                                        <p className="pb-2">Sign up for your daily dose of creative inspiration, learnings, and growth.</p>
                                        <form action="" className="space-y-2  ">
                                            <input type="text " className="bg-transparent border border-gray-400 font-[0.75rem] rounded-md py-2 pl-5  outline-none placeholder:text-white hover:border-[#CBFF54] " placeholder="Email Address" /><br />
                                            <input type="submit" className="bg-[#CBFF54]  py-2 hover:bg-[#013C10]  w-[230px] border font-[0.75rem] border-[#CBFF54] hover:text-[#CBFF54] text-black rounded-md " />
                                        </form>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <Newsletter />
                </div>
            </div>
        </div>


    </>)
}
