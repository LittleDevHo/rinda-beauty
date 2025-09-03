import Image from 'next/image';

const PartnersSection = () => {
  return (
    <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-[140px]">
      <div className="mx-auto flex w-[1168px] flex-col items-center gap-10">
        <h2 className="text-center text-[44px] font-bold leading-[65px] text-gray-900">
          전 세계 2,400개 이상의 글로벌 바이어가
          <br />
          K-뷰티 브랜드와의 파트너십을 기다리고 있습니다
        </h2>
        <p className="text-center text-[18px] font-medium leading-[28px] text-gray-600 max-w-[600px]">
          세포라, 얼타, 올리브영부터 아마존, 티몰까지
          <br />
          검증된 글로벌 리테일러들과 직접 연결해드립니다
        </p>
        <div className="relative">
          <Image
            src="https://static.cdn.kmong.com/assets/enterprise/desktop/main/partners@3x.png?w=1168"
            alt="글로벌 뷰티 리테일러 파트너들 - 세포라, 얼타, 올리브영, 아마존, 티몰 등"
            width={1168}
            height={664}
            className="opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-100/50 to-transparent rounded-lg"></div>
        </div>
        <div className="text-center">
          <p className="text-[16px] font-semibold text-rose-600">
            ✨ 매월 새로운 글로벌 바이어가 추가되고 있습니다
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;