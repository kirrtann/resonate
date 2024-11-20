import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    };

    return (
        <>
            <div className="p-2  bg-[#17312F]">
                <div className="flex justify-between items-center container mx-auto">
                    <div className="text-[#CBFF54]">
                        <a href="#" className="flex ">
                            <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/559px-Spotify_logo_with_text.svg.png" alt="" />
                        </a>
                    </div>

                    <div className="hidden sm:flex px-3  py-1 rounded-md border-gray-500 border-[1px] space-x-10 items-center">
                        <ul className="flex space-x-10 text-white   text-[14px]">
                            <li className="hover:text-[black] px-2 block rounded-md hover:bg-[#CBFF54]  cursor-pointer transition">
                                BLOG
                            </li>
                            <li className="hover:text-[black] px-2 block rounded-md hover:bg-[#CBFF54]  cursor-pointer transition">
                                ABOUT
                            </li>
                            <li className="hover:text-[black] block px-2 rounded-md hover:bg-[#CBFF54] cursor-pointer transition">
                                CONTACT
                            </li>
                        </ul>
                    </div>

                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="text-[#CBFF54]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="fixed inset-0   opacity-90 z-50 flex justify-end pt-6 px-4">
                        <div className="bg-[#17312F] w-[200px] h-fit  pb-10  rounded-md shadow-lg">
                            <button
                                onClick={toggleMenu}
                                className="text-[#CBFF54] absolute top-4 right-4"
                            >
                                <img src="icons8-close-30.png" alt="Close" className="w-5" />
                            </button>
                            <ul className="text-white text-center mt-4 px-2  space-y-3">
                                <li className="block py-2 hover:text-[black] rounded-md hover:bg-[#CBFF54]  cursor-pointer transition">
                                    ABOUT
                                </li>
                                <li className="block py-2 hover:text-[black] rounded-md hover:bg-[#CBFF54]  cursor-pointer transition">
                                    BLOG
                                </li>
                                <li className="block py-2 hover:text-[black]  rounded-md hover:bg-[#CBFF54]  cursor-pointer transition">
                                    CONTACT
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
