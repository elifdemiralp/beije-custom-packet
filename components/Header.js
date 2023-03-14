import { useState } from "react";
import Head from "next/head";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import {RxPerson} from 'react-icons/rx';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <Head>
        <title>beije</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-beije fixed top-0">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <h2 className="text-yellow-600 font-medium text-2xl">beije.</h2>
              </a>
              <div className="md:hidden flex space-x-4">
   
               <button><AiOutlineShoppingCart className="text-2xl text-black" /></button>
               <button><RxPerson className="text-2xl text-black" /></button>
    
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-3 md:flex md:space-x-3 md:space-y-0">
                <li className="text-black px-3 py-2 rounded-md text-base font-light">
                  <a href="/products">Ürünler</a>
                </li>
                <li className="text-black px-3 py-2 rounded-md text-base font-light">
                  <a href="/about">Biz Kimiz</a>
                </li>
                <li className="text-black  px-3 py-2 rounded-md text-base font-light">
                  <a href="/donation">Bağış Kültürü</a>
                </li>
                <li className="text-black  px-3 py-2 rounded-md text-base font-light">
                  <a href="/blog">Blog</a>
                </li>
                <li className="text-black  px-3 py-2 rounded-md text-base font-light">
                  <a href="/packet">Kendi Paketini Oluştur!</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`flex items-center justify-between py-3 md:py-5 md:block ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="flex space-x-4">
              <button><AiOutlineShoppingCart className="text-2xl text-black" /></button>
               <button><RxPerson className="text-2xl text-black" /></button>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
