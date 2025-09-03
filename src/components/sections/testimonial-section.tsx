"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-[100px]">
      <div className="mx-auto w-full max-w-[1168px] px-4">
        <h2 className="whitespace-pre-line text-center text-[44px] font-bold leading-[65px] text-white">
          {`K-뷰티 브랜드 대표들이 직접 말하는\n글로벌 바이어 매칭 성공 스토리`}
        </h2>

        <div className="mt-20">
          <div className="relative w-full">
            {/* This is a static representation of a single testimonial. In a real app, this would be a carousel. */}
            <div className="w-full opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="flex w-full flex-col items-center justify-center gap-14">
                <hr className="h-px w-[450px] border-0 bg-gradient-to-r from-transparent via-rose-400 to-transparent" />
                <div className="flex flex-col items-center justify-center gap-[22px] text-center">
                  <h4 className="text-base font-bold leading-[21px] text-rose-400">
                    글로우업 뷰티
                  </h4>
                  <h4 className="text-base font-bold leading-[21px] text-white">
                    대표 김미영
                  </h4>
                </div>
                <h3 className="whitespace-pre-line text-center text-[24px] font-medium leading-[40px] text-white">
                  {`"혼자서는 절대 만날 수 없었던 세포라 바이어와\n직접 연결해주셔서 정말 감사합니다. 매칭 후 3개월 만에\n미국 전역 세포라 매장 입점이 확정되었고,\n첫 해 매출이 예상보다 200% 초과 달성했습니다.\n전문적인 수출 컨설팅까지 함께 받을 수 있어서\n글로벌 진출이 훨씬 수월했습니다."`}
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              aria-label="Previous testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent p-0 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-[#868E96]" />
            </button>
            <p className="text-base font-medium leading-[26px] text-white">
              <span className="font-bold text-rose-400">1</span>/5
            </p>
            <button
              aria-label="Next testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent p-0 hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}