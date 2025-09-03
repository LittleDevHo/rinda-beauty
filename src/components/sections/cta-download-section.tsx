import Image from "next/image";
import { Download } from "lucide-react";

/**
 * CtaDownloadSection Component
 * 
 * Renders a call-to-action section with a background image, a heading, and a download button.
 * The section invites users to download an introductory document about K-beauty global expansion.
 *
 * @returns {JSX.Element} The rendered call-to-action section.
 */
const CtaDownloadSection = (): JSX.Element => {
  return (
    <section className="relative my-[140px] flex h-[312px] w-full flex-col items-center justify-center overflow-hidden">
      <Image
        src="https://static.cdn.kmong.com/assets/enterprise/desktop/main/info-download-section-background.png"
        alt="K-뷰티 글로벌 진출 가이드북 다운로드"
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 via-pink-900/60 to-purple-900/80 -z-5"></div>
      <div className="z-10 flex flex-col items-center justify-center gap-[30px]">
        <h2 className="text-[32px] font-bold leading-[46px] text-white text-center">
          K-뷰티 글로벌 진출 성공 가이드북을 
          <br />
          무료로 받아보세요
        </h2>
        <p className="text-[16px] font-medium leading-[24px] text-rose-100 text-center max-w-[500px]">
          해외 진출 체크리스트부터 바이어 미팅 노하우까지
          <br />
          성공 사례와 함께 담은 실무 가이드북
        </p>
        <a
          href="/resources/k-beauty-global-expansion-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[56px] w-[240px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-semibold text-gray-900 no-underline transition-all duration-300 hover:bg-rose-50 hover:shadow-lg transform hover:-translate-y-1"
        >
          <Download className="h-5 w-5 text-rose-600" strokeWidth="2" />
          가이드북 무료 다운로드
        </a>
      </div>
    </section>
  );
};

export default CtaDownloadSection;