import Image from 'next/image';

interface ManagerProfile {
  name: string;
  role: string;
  imageSrc: string;
  alt: string;
  qualifications: string[];
}

const managers: ManagerProfile[] = [
  {
    name: 'Sarah',
    role: '글로벌 바이어 매칭 전문',
    imageSrc: 'https://static.cdn.kmong.com/assets/enterprise/desktop/main/development-manager@3x.png?w=572',
    alt: '글로벌 바이어 매칭 전문 매니저',
    qualifications: [
      '세계 500+ 글로벌 바이어 네트워크 보유',
      'K-뷰티 해외 진출 성공 사례 200+ 달성',
      '세포라, 얼타, 올리브영 등 주요 리테일러 직접 연결',
    ],
  },
  {
    name: 'Michael',
    role: '수출 인증·컨설팅 전문',
    imageSrc: 'https://static.cdn.kmong.com/assets/enterprise/desktop/main/startup-manager@3x.png?w=572',
    alt: '수출 인증 컨설팅 전문 매니저',
    qualifications: [
      'FDA, CE, CPSR 등 글로벌 인증 전문가',
      '화장품 수출 규제 및 법규 컨설팅 10년+',
      '아시아, 유럽, 미주 각 지역별 맞춤 인증 가이드',
    ],
  },
  {
    name: 'Emma',
    role: '글로벌 마케팅 전문',
    imageSrc: 'https://static.cdn.kmong.com/assets/enterprise/desktop/main/marketing-manager@3x.png?w=572',
    alt: '글로벌 마케팅 전문 매니저',
    qualifications: [
      '글로벌 뷰티 브랜드 마케팅 캠페인 기획 150+', 
      '소셜미디어, 인플루언서 마케팅 전문 8년+',
      '현지 문화에 맞춘 브랜드 포지셔닝 전략 수립',
    ],
  },
  {
    name: 'David',
    role: '브랜드 개발 전문',
    imageSrc: 'https://static.cdn.kmong.com/assets/enterprise/desktop/main/video-manager@3x.png?w=572',
    alt: '브랜드 개발 전문 매니저',
    qualifications: [
      'K-뷰티 브랜드 글로벌 런칭 전략 수립 100+',
      '제품 기획부터 패키징 디자인까지 토탈 솔루션',
      '타겟 시장별 맞춤형 브랜드 아이덴티티 개발',
    ],
  },
];

const ManagerCard = ({ manager }: { manager: ManagerProfile }) => (
  <div className="relative flex h-[350px] w-full overflow-hidden rounded-lg bg-black">
    <Image
      src={manager.imageSrc}
      alt={manager.alt}
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-rose-900/90 via-pink-900/60 to-transparent" />
    <div className="absolute bottom-10 left-10 z-10 flex flex-col gap-4">
      <h3 className="text-[32px] font-bold leading-[48px] text-white">
        {manager.role} <span className="font-normal text-rose-200">{manager.name}</span>
      </h3>
      <ul className="text-[18px] font-normal leading-[32px] text-white">
        {manager.qualifications.map((qualification, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-rose-300 mt-2">•</span>
            <span>{qualification}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);


const ManagerProfilesSection = () => {
  return (
    <section className="mx-auto my-[140px] flex w-full max-w-[1168px] flex-col items-center">
      <h2 className="text-[44px] font-bold leading-[65px] text-gray-900 text-center">
        뷰티 업계 전문가들이 1:1로 
        <br />
        여러분의 글로벌 진출을 케어합니다
      </h2>
      <p className="mt-6 text-center text-[18px] font-medium leading-[28px] text-gray-600 max-w-[600px]">
        각 분야별 10년 이상의 경험을 가진 전문 매니저가 
        <br />
        여러분의 성공적인 해외 진출을 전담 지원합니다
      </p>
      <div className="mt-14 grid w-full grid-cols-2 gap-6">
        {managers.map((manager) => (
          <ManagerCard key={manager.name} manager={manager} />
        ))}
      </div>
    </section>
  );
};

export default ManagerProfilesSection;