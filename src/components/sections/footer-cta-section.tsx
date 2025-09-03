import React from 'react';
import Link from 'next/link';

const FooterCtaSection = () => {
  return (
    <div className="fixed bottom-0 z-40 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-rose-500/20">
      <div className="mx-auto flex w-[944px] items-center justify-between py-6">
        <h2 className="text-[28px] font-bold leading-[41px] text-white max-w-[500px]">
          글로벌 진출을 꿈꾸는 K-뷰티 브랜드를 위한 실전 가이드북을 무료로 받아보세요
        </h2>
        <div className="flex gap-3">
          <Link
            href="/download-guide"
            role="button"
            className="inline-flex h-[52px] w-[220px] items-center justify-center rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-6 text-base font-semibold leading-4 text-white no-underline transition-all duration-300 hover:from-rose-600 hover:to-pink-700 hover:shadow-lg transform hover:-translate-y-1"
          >
            무료 가이드북 다운로드
          </Link>
          <Link
            href="/consultation"
            className="inline-flex h-[52px] w-[220px] items-center justify-center rounded-lg border-2 border-rose-500 bg-white px-6 text-base font-semibold leading-4 text-rose-600 no-underline transition-all duration-300 hover:bg-rose-50 hover:shadow-lg transform hover:-translate-y-1"
          >
            무료 상담 받기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCtaSection;