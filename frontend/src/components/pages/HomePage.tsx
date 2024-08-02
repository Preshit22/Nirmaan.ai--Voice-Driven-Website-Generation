import { LuBrainCircuit } from "react-icons/lu";
import { RiBrainLine } from "react-icons/ri";

import { TbPrompt } from "react-icons/tb";


function HomePage() {


  return (<>
    <div className="mx-auto">

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-4 py-32 w-[95%] lg:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:w-1/2 lg:pr-24  flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
            <h2 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
              Build faster. Work smarter.
            </h2>
            <h1 className="title-font sm:text-5xl text-5xl mb-4 font-bold text-gray-900">
              Build your professional website
              in minutes
            </h1>
            <p className="mb-8 text-xl leading-relaxed">
              Our Website is changing how people think about website design. Thanks to its user-friendly and intuitive interface, you can create, manage, and customize your website effortlessly.
            </p>
            <div className="flex justify-center">
              <a href="http://127.0.0.1:5000/">
                <button
                  className="flex mx-auto mt-0 text-white bg-blue-500 border-2 font-semibold py-4 px-14 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-white duration-500 hover:scale-105 hover:font-bold scale-100 rounded-full text-lg hover:shadow-blue"
                >
                  Get Started
                </button>
              </a>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-2xl"
              alt="hero"
              src="/hero3.png"
            />
          </div>
        </div>
      </section>
      <div className="container bg-gray-900 p-10 py-20  flex justify-center mx-auto">

        <img src="/heronext.png" className=" rounded-md" alt="" />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-5xl  font-bold title-font mb-4 text-gray-900">Build With Nirmaan
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Join millions of small businesses, owner-operators, and solopreneurs building their businesses on Nirmaan.ai</p>
          </div>

          <div className="container     flex justify-center mx-auto">

            <img src="/demo.png" className=" rounded-xl" alt="" />
          </div>
          <a href="/app">

          </a>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-16 py-24 mx-auto ">

          <div className="flex flex-wrap bg-zinc-900 px-5 py-10 rounded-[100px]">
            <div className="xl:w-1/3 text-center lg:w-1/2 md:w-full px-8 py-6  border-gray-200  border-opacity-60">
              <div className="flex justify-center m-2">
                <LuBrainCircuit className="text-5xl text-white text-center" />
              </div>
              <h2 className="text-lg sm:text-2xl text-white font-bold title-font mb-2">Advanced style capabilities</h2>
              <p className="leading-relaxed text-base  text-gray-400">Buid your site in any style or brand identity - just prompt it!</p>

            </div>
            <div className="xl:w-1/3 text-center lg:w-1/2 md:w-full px-8 py-6 lg:border-l-2 border-dashed border-gray-200 border-opacity-60">
              <div className="flex justify-center m-2">
                <TbPrompt className="text-5xl text-white text-center" />
              </div>
              <h2 className="text-lg sm:text-2xl text-white font-bold title-font mb-2">Prompt relevant, always</h2>
              <p className="leading-relaxed text-base  text-gray-400">No template or stock photos. Our AI yeilds results 100% tailored to you.</p>

            </div>
            <div className="xl:w-1/3 text-center lg:w-1/2 md:w-full px-8 py-6 lg:border-l-2 border-dashed border-gray-200 border-opacity-60">
              <div className="flex justify-center m-2">
                <RiBrainLine className="text-5xl text-white text-center" />
              </div>
              <h2 className="text-lg sm:text-2xl text-white font-bold title-font mb-2">Pixel-perfect usability</h2>
              <p className="leading-relaxed text-base  text-gray-400">Seamlessly coordinate images,text and UI elements to maximize usability.</p>

            </div>

          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-5xl text-5xl  font-bold title-font mb-4 text-gray-900">Convert propmt into a site
            </h1>
            <p className="mb-8 text-xl ml-2 leading-relaxed">Write simple prompts and watch them convert into stunning, responsive web pages with just a click. Experience the easiest way to bring your visual content to life online. </p>
            <div className="flex justify-center ml-3">
              <a href="http://127.0.0.1:5000/">
                <button
                  className="flex mx-auto mt-0 text-white bg-blue-500 border-2 font-semibold py-4 px-14 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-white duration-500 hover:scale-105 hover:font-bold scale-100 rounded-full text-lg hover:shadow-blue"
                >
                  Get Started
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/website-creation.png" />
          </div>
        </div>
      </section>


      <footer className="text-gray-600 body-font">

        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

              <span className="ml-3 text-xl">Nirmaan.ai</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Nirmaan.ai

            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  </>
  );
}

export default HomePage;
