"use client";

import { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';

interface CaseStudy {
  industry: string;
  title: string;
  description: string;
  logo: string | null;
  alt: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    industry: "프리미엄 스킨케어",
    title: "미국 세포라 런칭 성공",
    description: "K-뷰티 프리미엄 스킨케어 브랜드의 미국 세포라 매장 입점 지원. 현지 바이어와의 매칭을 통해 성공적인 글로벌 데뷔를 달성",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/lghnh-2.png?",
    alt: "프리미엄 스킨케어 브랜드",
  },
  {
    industry: "색조화장품",
    title: "유럽 멀티브랜드샵 진출",
    description: "독창적인 K-뷰티 색조 제품으로 유럽 주요 멀티브랜드샵 입점. 현지 트렌드에 맞는 제품 라인업으로 매출 300% 증가 달성", 
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/naver-3.png?",
    alt: "색조화장품 브랜드",
  },
  {
    industry: "천연화장품",
    title: "일본 드럭스토어 체인 입점",
    description: "친환경 천연 원료를 활용한 K-뷰티 제품으로 일본 대형 드럭스토어 체인 전국 매장 동시 런칭. 첫 해 매출 50억원 돌파",
    logo: null,
    alt: "천연화장품 브랜드",
  },
  {
    industry: "맨즈케어", 
    title: "동남아 온라인몰 진출",
    description: "남성 전용 스킨케어 라인으로 동남아 주요 이커머스 플랫폼 입점. 현지 인플루언서 마케팅과 연계하여 브랜드 인지도 급상승",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/woowahan-5.png?",
    alt: "맨즈케어 브랜드",
  },
  {
    industry: "프리미엄 마스크팩",
    title: "중국 티몰 글로벌 런칭",
    description: "혁신적인 마스크팩 기술로 중국 티몰 글로벌 플랫폼 진출. 라이브 커머스를 통해 월 매출 20억원 달성",
    logo: null,
    alt: "마스크팩 브랜드",
  },
  {
    industry: "헤어케어",
    title: "미주 전문매장 네트워크 구축",
    description: "아시아 모발 전용 헤어케어 제품으로 미주 지역 전문 헤어살롱 네트워크 구축. B2B 유통망을 통한 안정적 매출 기반 확보",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/musinsa-7.png?",
    alt: "헤어케어 브랜드",
  },
  {
    industry: "바디케어",
    title: "호주 약국 체인 입점",
    description: "천연 성분 바디케어 라인으로 호주 전국 약국 체인 입점. 현지 피부과 전문의 추천으로 브랜드 신뢰도 구축",
    logo: null,
    alt: "바디케어 브랜드",
  },
  {
    industry: "K-뷰티 도구",
    title: "글로벌 뷰티툴 시장 진출",
    description: "혁신적인 뷰티 디바이스로 유럽, 미주, 아시아 동시 런칭. 글로벌 뷰티 박람회를 통한 대형 바이어 확보",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/koreanair-9.png?",
    alt: "뷰티툴 브랜드",
  },
  {
    industry: "럭셔리 뷰티",
    title: "중동 하이엔드 매장 진출",
    description: "프리미엄 럭셔리 뷰티 라인으로 중동 주요 백화점 뷰티 코너 입점. VIP 고객 대상 맞춤형 서비스로 높은 고객 충성도 확보",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/sikorea-10.png?",
    alt: "럭셔리 뷰티 브랜드",
  },
  {
    industry: "이너뷰티",
    title: "북미 헬스&뷰티 매장 런칭",
    description: "이너뷰티 트렌드에 맞춘 건강기능식품으로 북미 헬스&뷰티 전문매장 진출. 웰니스 트렌드와 결합하여 새로운 시장 개척",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/lguplus-11.png?",
    alt: "이너뷰티 브랜드",
  },
  {
    industry: "K-뷰티 전문",
    title: "글로벌 온라인 플랫폼 런칭",
    description: "K-뷰티 전문 글로벌 이커머스 플랫폼 구축. 다양한 K-뷰티 브랜드를 한 곳에서 만날 수 있는 원스톱 쇼핑 경험 제공",
    logo: null,
    alt: "K-뷰티 플랫폼",
  },
];

const tabs = [
  '전체 성공사례',
  '스킨케어',
  '색조화장품', 
  '헤어·바디케어',
  '뷰티디바이스',
  '글로벌 진출',
];

const CaseStudyCard = ({ industry, title, description, logo, alt }: CaseStudy) => (
  <div className="h-[372px] w-[380px] rounded-lg bg-gradient-to-br from-rose-50 to-pink-50 p-9 flex-shrink-0 border border-rose-100">
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="text-[16px] font-bold leading-[21px] text-rose-600">{industry}</h4>
          <h3 className="text-[24px] font-bold leading-[35px] text-gray-900 mt-1">{title}</h3>
        </div>
        <p className="text-[16px] font-normal leading-[24px] text-gray-700 break-keep">
          {description}
        </p>
      </div>
      {logo ? (
        <Image src={logo} alt={alt} width={197} height={40} className="object-contain h-10 w-auto self-start opacity-60" />
      ) : (
        <div className="flex items-center justify-start h-10 w-auto max-w-[197px]">
          <span className="text-rose-500 text-sm font-medium">{alt}</span>
        </div>
      )}
    </div>
  </div>
);

// This section requires custom animation definitions in tailwind.config.js:
// theme: {
//   extend: {
//     animation: {
//       'marquee': 'marquee 80s linear infinite',
//     },
//     keyframes: {
//       marquee: {
//         from: { transform: 'translateX(0)' },
//         to: { transform: 'translateX(-50%)' },
//       },
//     },
//   },
// },

const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeTabRef = tabRefs.current[activeIndex];
    const tabsContainer = tabsContainerRef.current;

    if (activeTabRef && tabsContainer) {
      const parentLeft = tabsContainer.getBoundingClientRect().left;
      const refLeft = activeTabRef.getBoundingClientRect().left;

      setSliderStyle({
        width: `${activeTabRef.offsetWidth}px`,
        transform: `translateX(${refLeft - parentLeft}px)`,
      });
    }
  }, [activeTab]);

  const duplicatedCaseStudies = useMemo(() => [...caseStudiesData, ...caseStudiesData], []);

  return (
    <section className="my-[140px] flex flex-col items-center justify-center w-full">
      <h2 className="text-[44px] font-bold leading-[65px] text-gray-900 text-center">글로벌 시장에서 성공한 K-뷰티 브랜드들</h2>

      <div className="mt-[60px]">
        <div ref={tabsContainerRef} className="relative rounded-full bg-rose-50 p-1.5 flex items-center">
          <div
            className="absolute z-0 flex items-center rounded-full bg-gradient-to-r from-rose-500 to-pink-600 h-[calc(100%-12px)] transition-all duration-300 ease-in-out"
            style={sliderStyle}
          ></div>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              ref={el => (tabRefs.current[index] = el)}
              onClick={() => setActiveTab(tab)}
              className="relative z-10 px-5 py-2.5 whitespace-nowrap"
            >
              <h2 className={`text-[20px] font-bold leading-[30px] transition-colors duration-300 ease-in-out ${activeTab === tab ? 'text-white' : 'text-rose-600'}`}>
                {tab}
              </h2>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 w-full max-w-[1920px] overflow-hidden">
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedCaseStudies.map((study, index) => (
            <CaseStudyCard key={`${study.alt}-${index}`} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;