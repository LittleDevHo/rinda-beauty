import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="relative flex w-full justify-center">
        <div className="flex w-[1920px] items-center justify-center">
          <div className="mt-[165px] h-[635px] overflow-hidden">
            <Image
              alt="글로벌 뷰티 시장에 진출하는 다양한 K-뷰티 브랜드들"
              src="https://static.cdn.kmong.com/assets/enterprise/desktop/main/enterprise-hero-company.png?w=1170"
              width={1170}
              height={1170}
              className="z-10 origin-center animate-spin [animation-duration:60s] opacity-80"
              priority
            />
          </div>
          <div className="absolute bottom-0 z-30">
            <div className="flex flex-col items-center gap-[50px] pb-[80px]">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[24px] font-bold leading-[35px] text-rose-600">
                  K-뷰티 글로벌 세일즈 에이전시
                </span>
                <h1 className="z-50 whitespace-pre-line text-center text-[44px] font-bold leading-[65px] text-gray-900">
                  {`한국 뷰티 브랜드의 글로벌 진출,\n검증된 바이어 매칭으로 시작하세요`}
                </h1>
                <p className="mt-4 text-center text-[18px] font-medium leading-[28px] text-gray-600 max-w-[600px]">
                  전 세계 검증된 글로벌 바이어와 직접 연결하여 
                  <br />
                  한국 뷰티 브랜드의 성공적인 해외 진출을 지원합니다
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="/buyer-matching/register"
                  className="inline-flex h-[56px] w-[220px] items-center justify-center rounded-[12px] bg-gradient-to-r from-rose-500 to-pink-600 text-[16px] font-semibold leading-[16px] text-white no-underline transition-all duration-300 hover:from-rose-600 hover:to-pink-700 hover:shadow-lg transform hover:-translate-y-1"
                >
                  바이어 매칭 신청하기
                </a>
                <a
                  href="/consultation"
                  className="inline-flex h-[56px] w-[220px] items-center justify-center rounded-[12px] border-2 border-rose-500 bg-white text-[16px] font-semibold leading-[16px] text-rose-600 no-underline transition-all duration-300 hover:bg-rose-50 hover:shadow-lg transform hover:-translate-y-1"
                >
                  무료 상담 받기
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 z-20 h-[560px] w-full bg-gradient-to-t from-white/90 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;