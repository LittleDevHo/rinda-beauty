import React from 'react';

const timelineSteps = [
  {
    time: "3분",
    title: "브랜드 등록",
    description: "간단한 브랜드 정보와\n제품 라인업을 등록해 보세요",
  },
  {
    time: "48시간", 
    title: "맞춤 바이어 매칭",
    description: "브랜드 특성과 타겟 시장을\n분석하여 최적의 글로벌\n바이어를 추천해 드려요",
  },
  {
    time: "7일",
    title: "바이어 미팅 주선",
    description: "선별된 바이어와의 온/오프라인\n미팅을 주선하고 통역 및\n상담 지원을 제공해 드려요",
  },
  {
    time: "지속적",
    title: "성공까지 전담 지원",
    description: "계약 체결부터 수출 인증, 마케팅\n지원까지 성공적인 글로벌 진출이\n완료될 때까지 함께합니다",
  },
];

const ProcessTimelineSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-[140px]">
      <h2 className="whitespace-pre-line text-center text-[44px] font-bold leading-[65px] text-gray-900">
        {'복잡한 글로벌 진출 과정을\n간단하고 확실하게 도와드립니다'}
      </h2>
      <p className="mt-6 text-center text-[18px] font-medium leading-[28px] text-gray-600 max-w-[600px]">
        K-뷰티 전문 매니저가 처음부터 끝까지 함께하는
        <br />
        체계적인 글로벌 바이어 매칭 프로세스
      </p>

      <div className="mx-auto mt-[100px] w-full max-w-[1168px]">
        {/* Timeline Visualization */}
        <div className="relative h-[90px]">
          {/* Gradient line connecting the steps */}
          <div className="absolute top-[41px] left-[3%] right-[3%] z-0 h-0.5 bg-gradient-to-r from-rose-200 via-pink-300 to-rose-200" />

          {/* Steps headers */}
          <div className="relative z-10 flex justify-between">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative w-[80px] text-center">
                <p className={`text-[20px] font-bold leading-[30px] ${
                  index === 0 ? 'text-rose-600' : 'text-gray-500'
                }`}>
                  {step.time}
                </p>
                {/* Circle on the line */}
                <div className={`absolute top-[30px] left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-solid ${
                  index === 0 ? 'border-4 border-rose-600 bg-white' : 'border-4 border-white bg-gray-300' 
                }`} />
                {/* Numbered circle below */}
                <div className={`absolute top-[56px] left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full text-base font-bold text-white ${
                  index === 0 ? 'bg-gradient-to-r from-rose-500 to-pink-600' : 'bg-gray-300'
                }`}>
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content Details */}
        <div className="mt-8 flex items-start justify-between text-center">
          {timelineSteps.map((step, index) => (
            <div key={index} className="w-[292px] p-4">
              <h3 className="text-[24px] font-bold leading-[35px] text-gray-900">
                {step.title}
              </h3>
              <p className="mt-4 whitespace-pre-line text-base font-normal leading-6 text-gray-700 break-words">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;