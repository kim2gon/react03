import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loadingProgressState } from "../store";

const Loading = () => {
  const [progress, setProgress] = useRecoilState(loadingProgressState)

  useEffect(()=>{
    const timer = setInterval(()=>{
      setProgress((oldProgress)=>{
        if(oldProgress >= 100){
          clearInterval(timer);
          return 100;
        }
        return Math.min(oldProgress + 5, 100);
      })
    }, 100);

    return()=> {
      clearInterval(timer);
    }
  },[setProgress]);

  return (
    <div className="relative w-full h-screen">
      {/* 프로그레스 바 */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gray-200">
        <div className="h-full transition-all duration-200 ease-out bg-red-500" style={{ width: `${progress}%` }}></div>
      </div>

      {/* 로딩 텍스트 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl font-bold text-red-500">{progress}%</div>
      </div>
    </div>
  );
};

export default Loading;
