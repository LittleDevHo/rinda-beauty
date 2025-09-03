"use client";

import { useState, useRef, useLayoutEffect } from "react";

const ServiceCategoriesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const tabs = [
    "전체 서비스",
    "바이어 매칭", 
    "글로벌 마케팅",
  ];

  useLayoutEffect(() => {
    const setIndicator = () => {
      const currentTab = tabButtonsRef.current[activeTab];
      if (currentTab) {
        setIndicatorStyle({
          left: currentTab.offsetLeft,
          width: currentTab.offsetWidth,
        });
      }
    };

    setIndicator();
    
    window.addEventListener("resize", setIndicator);
    
    return () => {
      window.removeEventListener("resize", setIndicator);
    };
  }, [activeTab]);

  return (
    <section className="my-[140px] flex flex-col items-center justify-center">
      <h2 className="text-[44px] font-bold leading-[65px] text-gray-900 text-center">
        K-뷰티 브랜드의 성공적인 글로벌 진출을 위한 
        <br />
        전문 서비스를 제공합니다
      </h2>
      <div className="mt-[60px] flex gap-2.5">
        <div className="relative rounded-full bg-rose-50 p-1.5">
          <div className="relative flex items-center gap-2.5">
            <div
              className="absolute top-0 z-0 h-full rounded-full bg-gradient-to-r from-rose-500 to-pink-600 transition-all duration-300 ease-in-out"
              style={indicatorStyle}
            />
            {tabs.map((tab, index) => (
              <button
                key={tab}
                ref={(el) => {
                  tabButtonsRef.current[index] = el;
                }}
                onClick={() => setActiveTab(index)}
                className="relative z-10 whitespace-nowrap px-5 py-2.5"
                type="button"
              >
                <h2
                  className={`text-[20px] font-bold leading-[30px] transition-colors duration-500 ease-in-out ${
                    activeTab === index ? "text-white" : "text-rose-600"
                  }`}
                >
                  {tab}
                </h2>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesSection;