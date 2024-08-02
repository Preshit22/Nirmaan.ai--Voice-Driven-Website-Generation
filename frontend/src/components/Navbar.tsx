
function Navbar() {
   

    return (<>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-bold font-caveat items-center text-gray-900 mb-4 md:mb-0">

                    <span className="ml-3 text-2xl">Nirmaan.ai</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">

                    <a className="mr-5 hover:text-gray-900 font-semibold cursor-pointer">About us</a>
                    <a className="mr-5 hover:text-gray-900 font-semibold cursor-pointer">Contact us</a>

                </nav>{
                <a href="http://127.0.0.1:5000/">
                        <button className="inline-flex items-center bg-blue-500  text-white border-0 py-2 px-5 font-semibold focus:outline-none hover:bg-blue-400 rounded-full text-base mt-4 md:mt-0">Get Started
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        </a>
                        

                        

                }

            </div>
        </header>

        <hr className="w-[95%]  mx-auto" />
    </>
    );
}

export default Navbar;