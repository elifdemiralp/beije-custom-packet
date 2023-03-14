import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitter, BsSpotify } from "react-icons/bs";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user email", email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <footer>
      <div>
        <div className="p-4 grid md:grid-cols-2 gap-12 xl:col-span-2 xl:mt-0 bg-[#262626] w-full">
          <div className="md:ml-28 mt-3 ml-6 s">
            <h3 className="text-2xl font-normal text-white">beije.</h3>
            <p className="mt-6 text-base text-gray-400">Arayı açmayalım!</p>
            <p className="mt-2 text-sm  text-gray-400">
              Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 md:flex md:max-w-md">
              <div class="relative z-0 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  value={email}
                  onChange={handleEmailChange}
                  class="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border rounded-md border-gray-400 appearance-none  focus:ring-0 focus:border peer"
                  placeholder=" "
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-300 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 pl-3"
                >
                  e-mail adresin
                </label>
              </div>
              <div className="mt-4 rounded-md md:mt-0 md:ml-4 md:flex-shrink-0">
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-3xl shadow-sm focus:outline-none  disabled:bg-gray-400 appearance-none bg-gray-100 hover:bg-neutral-700 focus:ring-gray-300  w-full"
                    type="submit"
                  >
                    <div className="relative">
                      <div className="text-black">Gönder</div>
                    </div>
                  </button>
                </div>
              </div>
            </form>
            <p className="mt-2 text-xs text-gray-400">
              Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve
              beije'den haber almayı onaylıyorum.
            </p>
          </div>

          <div className="grid grid-cols-3 ml-6 md:ml-0 md:mb-20 mb-12">
            <div className="text-gray-300 text-base">
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="#">Paketler</a>
                </li>
                <li>
                  <a href="#">Deneme Paketi</a>
                </li>
                <li>
                  <a href="#">Ekibimize Katıl</a>
                </li>
              </ul>
            </div>
            <div className="text-gray-300 text-base">
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Sıkça Sorulan Sorular</a>
                </li>
                <li>
                  <a href="#">Biz Kimiz?</a>
                </li>
              </ul>
            </div>

            <div className="text-gray-300 text-base">
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="https://www.facebook.com/beijewomen/">
                    {" "}
                    <FaFacebookF className="inline-block mr-3 mb-1" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/beijewomen/">
                    {" "}
                    <FaInstagram className="inline-block mr-3 mb-1" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/beijewomen">
                    {" "}
                    <BsTwitter className="inline-block mr-3 mb-1" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/beije-tr/?originalSubdomain=tr">
                    {" "}
                    <FaLinkedin className="inline-block mr-3 mb-1" />
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://open.spotify.com/user/ma20bga4ewhwt96kx1p92f2uv">
                    {" "}
                    <BsSpotify className="inline-block mr-3 mb-1" />
                    Spotify
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#262626] text-sm">
        <hr className="border-gray-300 md:mx-28 mb-8" />
        <div className="w-auto mx-auto container md:mx-28 md:mt-4 flex md:justify-between flex-col md:flex-row items-center md:items-start">
          <span className="text-gray-300 md:text-center mb-3 md:mb-0">
            <a href="#">2023 beije. Tüm hakları saklıdır.</a>
          </span>
          <div className="flex flex-col md:flex-row md:flex-wrap mt-3 text-gray-400 sm:mt-0 md:mb-28 justify-center items-center">
            <a href="#" className="mr-4 hover:underline md:mr-6 mb-3 md:mb-0">
              KVKK Aydınlatma Metni
            </a>
            <a href="#" className="mr-4 hover:underline md:mr-6 mb-3 md:mb-0">
              Üyelik Sözleşmesi
            </a>
            <a href="#" className="mr-4 hover:underline md:mr-6 mb-3 md:mb-0">
              Gizlilik Politikası
            </a>
            <a href="#" className="mr-4 hover:underline md:mr-6 mb-3 md:mb-0">
              Çerez Politikası
            </a>
            <a href="#" className="mr-4 hover:underline mb-3 md:mb-0">
              Test Sonuçları
            </a>
          </div>
          <div>
            <button className="flex md:flex-row text-base text-gray-200 mt-10 md:mt-0 md:mb-28 md:items-start ">
              EN | TR
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#262626]">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 mb-20 mt-8">
            <img
              src="https://beije.co/_next/static/media/Master.2bedc059.svg"
              width={50}
              height={50}
            />
            <img
              src="https://beije.co/_next/static/media/Visa.9f651691.svg"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
