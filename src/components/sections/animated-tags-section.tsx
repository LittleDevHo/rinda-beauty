import React from 'react';

const TAGS = [
  "프리미엄 스킨케어",
  "K-뷰티 색조화장품", 
  "천연 유기농 제품",
  "아시아 뷰티 트렌드",
  "글로벌 바이어 매칭",
  "해외 유통 네트워크",
  "뷰티 박람회 참가",
  "브랜드 마케팅 지원",
  "수출 인증 컨설팅",
  "디지털 마케팅",
];

const AnimatedTagsSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1920px] bg-gradient-to-r from-rose-50 to-pink-50 py-6">
      <div className="relative mx-auto w-full max-w-[1168px] overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-rose-50 to-transparent" />
        <div className="flex items-center overflow-hidden">
          {/*
            The following `[animation:scroll_40s_linear_infinite]` class requires a 'scroll' keyframe to be defined.
            It should be added to a global stylesheet or tailwind.config.js:
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          */}
          <div className="flex whitespace-nowrap [animation:scroll_40s_linear_infinite]">
            {[...TAGS, ...TAGS].map((tag, index) => (
              <div key={index} className="mx-8 shrink-0">
                <h3 className="text-[18px] font-bold leading-[27px] text-rose-600">
                  {tag}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-pink-50 to-transparent" />
      </div>
    </section>
  );
};

export default AnimatedTagsSection;