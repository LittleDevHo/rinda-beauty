import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const KBeautyLogo = ({
  width = 120,
  height = 40,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center">
      <span className="text-white font-bold text-lg">R</span>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-bold text-gray-900">RINDA Beauty</span>
      <span className="text-xs text-rose-600 font-medium">바이어 매칭 에이전시</span>
    </div>
  </div>
);

const linkColumns = [
  {
    title: '회사 소개',
    links: [
      { text: '회사소개', href: '/about' },
      { text: '서비스 안내', href: '/services' },
      { text: '성공 사례', href: '/case-studies' },
      { text: '뉴스·보도자료', href: '/news', isExternal: false },
    ],
  },
  {
    title: '서비스',
    links: [
      { text: '바이어 매칭', href: '/buyer-matching' },
      { text: '글로벌 마케팅', href: '/global-marketing' },
      { text: '파트너십 문의', href: '/partnership' },
    ],
  },
  {
    title: '브랜드 지원',
    links: [
      { text: '브랜드 등록', href: '/brand-register' },
      { text: '매니저 상담', href: '/consultation' },
      { text: '글로벌 진출 가이드', href: '/global-guide' },
    ],
  },
  {
    title: '고객 지원',
    links: [
      { text: '자주 묻는 질문', href: '/faq' },
      { text: '고객센터', href: '/support' },
      { text: '1:1 문의', href: '/inquiry' },
      { text: '파트너 네트워크', href: '/partners' },
    ],
  },
];

const FooterSection = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-[1200px]">
        <div className="flex items-center justify-between border-b border-rose-200 py-[22.5px] text-[15px] font-medium text-gray-800">
          <div className="flex items-center gap-4">
            <Link href="/" aria-label="RINDA Beauty 홈으로 이동">
              <KBeautyLogo />
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <Link href="/buyer-matching/register" className="no-underline text-inherit hover:text-rose-600 transition-colors">바이어 매칭 신청</Link>
            <Link href="/consultation" className="no-underline text-inherit hover:text-rose-600 transition-colors">무료 상담</Link>
            <Link href="/login" className="no-underline text-inherit hover:text-rose-600 transition-colors">로그인</Link>
            <Link href="/signup" className="flex h-[34px] w-[81px] items-center justify-center rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 text-sm font-medium text-white no-underline transition-all duration-300 hover:from-rose-600 hover:to-pink-700 hover:shadow-lg transform hover:-translate-y-1">
              회원가입
            </Link>
          </div>
        </div>

        <div className="flex justify-between py-10">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <button className="flex h-10 w-[140px] items-center justify-center rounded-lg border-[1.5px] border-rose-600 text-lg font-bold text-rose-600 hover:bg-rose-50 transition-colors">
                고객센터
              </button>
              <button className="flex h-10 w-[140px] items-center justify-center rounded-lg border border-gray-300 text-lg font-bold text-gray-500 hover:bg-gray-50 transition-colors">
                파트너센터
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold text-gray-800">평일 09:00~18:00 (점심시간 12:00~13:00), 주말·공휴일 휴무</p>
              <p className="text-xs text-gray-600">K-뷰티 브랜드와 글로벌 바이어를 연결하는 전문 에이전시입니다.</p>
              <p className="text-xs text-gray-600">성공적인 해외 진출을 위해 언제나 함께하겠습니다.</p>
            </div>
          </div>
          <div className="flex gap-[100px] text-sm text-gray-800">
            {linkColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <p className="font-bold text-rose-600">{column.title}</p>
                <div className="flex flex-col gap-2">
                  {column.links.map((link) =>
                    link.isExternal ? (
                      <a key={link.text} href={link.href} className="no-underline text-inherit hover:text-rose-600 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
                        {link.text}
                      </a>
                    ) : (
                      <Link key={link.text} href={link.href} className="no-underline text-inherit hover:text-rose-600 hover:underline transition-colors">
                        {link.text}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-rose-200 py-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" aria-label="RINDA Beauty 홈으로 이동">
                <KBeautyLogo width={100} height={32} />
              </Link>
              <div className="flex items-center gap-4">
                <a href="https://isms.kisa.or.kr/main/isms/issue/?certificationNo=ISMS-KISA-2023-010" target="_blank" rel="noopener noreferrer">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/ISMS-icon@3x-30.png?" alt="isms" width={40} height={40} />
                </a>
                <a href="https://www.inicis.com/blog/archives/4925" target="_blank" rel="noopener noreferrer">
                  <Image src="https://static.cdn.kmong.com/assets/home/desktop/ic-footer-pci.png?v=1" alt="pci" width={40} height={40} />
                </a>
                <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer">
                  <Image src="https://static.cdn.kmong.com/assets/home/desktop/ic-footer-iso27001.png?v=1" alt="iso27001" width={40} height={40} />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <a target="_blank" href="https://www.instagram.com/rinda_beauty/?hl=ko" rel="noopener noreferrer">
                  <Image src="https://static.cdn.kmong.com/assets/home/desktop/ic-footer-instagram.png" alt="instagram" width={32} height={32} />
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/rindabeauty" rel="noopener noreferrer">
                  <Image src="https://static.cdn.kmong.com/assets/home/desktop/ic-footer-youtube.png" alt="youtube" width={32} height={32} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/rinda-beauty" rel="noopener noreferrer">
                  <Image src="https://static.cdn.kmong.com/assets/home/desktop/ic-footer-youtube.png" alt="linkedin" width={32} height={32} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-xs text-gray-500">
            <div className="flex gap-6">
              <Link href="/terms" className="no-underline text-inherit hover:underline hover:text-rose-600 transition-colors">이용약관</Link>
              <Link href="/privacy" className="font-bold no-underline text-inherit hover:underline hover:text-rose-600 transition-colors">개인정보처리방침</Link>
            </div>
            <p>(주)그린다에이아이 | 대전광역시 유성구 대학로 99, 대전팁스타운 503호 | 대표 : 강호진 | 사업자등록번호 : 309-88-02709</p>
            <p>통신판매업신고 : 2024-대전유성-5678 | 해외진출지원업등록 : 제2024-3210195-14-5-00456호</p>
            <p>고객센터 : 1588-5678 | info@rindabeauty.com</p>
            <p>Copyright © 2024 RINDA Beauty Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;