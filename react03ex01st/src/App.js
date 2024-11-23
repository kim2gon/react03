import { useRecoilState } from "recoil";
import "./App.css";
import { loadingProgressState } from "./store";
import Loading from "./components/Loading";
import { Link, Route, Routes } from "react-router-dom";
import Home from './_views/Home';
import About from './_views/About';
import Services from './_views/Services';
import Contact from './_views/Contact';
import { useEffect, useState } from "react";

function App() {
  const [progress, setProgress] = useRecoilState(loadingProgressState);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(()=>{
    let lastScrollY = window.scrollY; // 페이지 처음 로드될때 스크롤위치

    const handleScroll = () => {
      const currentScrollY = window.scrollY; // 현재 스크롤 위치
      console.log(`현재 : ${currentScrollY} / 이전 : ${lastScrollY}`)

      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 10)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, {passive:true});
    return ()=> window.removeEventListener('scroll', handleScroll);

  },[])
  

  if( progress < 100){
    return <Loading />
  }
  return (
    <>
      {/* HEADER : 링크 올바르게 수정해주세요. */}
      <header
        className={`fixed top-0 left-0 w-full z-50 text-white shadow-md transition-all duration-300 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/nav.png)` }}
      >
        <div className="container flex items-center justify-between px-4 py-3 mx-auto">
          <div className="text-xl font-bold">Logo</div>
          <nav>
            <ul className="flex space-x-4">
              {
                ['Home', "About", "Services", 'Contact'].map((v, i)=>(
                  <li key={v}>
                    <Link to={i === 0  ? "/" : v.toLowerCase()} className="hover:text-red-200">
                      {v}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </header>

      {/* Route : 작성해주세요. */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
      </Routes>

      {/* SECTION 1 : 건들지마세요. */}
      <section className="w-full h-[100vh] bg-red-500 flex items-center justify-center">
        <div className="text-4xl text-white">SECTION 1</div>
      </section>

      <section className="w-full h-[100vh] bg-blue-500 flex items-center justify-center">
        <div className="text-4xl text-white">SECTION 2</div>
      </section>

      {/* FOOTER : 건들지마세요. */}
      <footer className="py-8 text-white bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full mb-6 md:w-1/3 md:mb-0">
              <h3 className="mb-2 text-lg font-semibold">About Us</h3>
              <p className="text-sm">
                We are a company dedicated to providing excellent services and products to our customers.
              </p>
            </div>
            <div className="w-full mb-6 md:w-1/3 md:mb-0">
              <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="mb-2 text-lg font-semibold">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 text-sm text-center border-t border-gray-700">
            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;