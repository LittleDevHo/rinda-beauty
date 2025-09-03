import React from 'react';
import Image from 'next/image';

const floatingItemsData = [
  {
    type: 'card',
    wrapperClass: 'absolute -top-[10px] left-[550px]',
    content: {
      title: '뷰티 트렌드 연구소',
      description: '글로벌 뷰티 트렌드 분석 전문',
    },
    image: {
      srcKey: 'seller-1@3x.png',
      alt: '뷰티 트렌드 전문가',
      width: 70,
      height: 70,
    },
  },
  {
    type: 'card',
    wrapperClass: 'absolute -bottom-[20px] left-[200px]',
    content: {
      title: '글로벌 바이어 네트워크',
      description: '세계 유명 바이어 직접 연결',
    },
    image: {
      srcKey: 'seller_rebbit@3x.png',
      alt: '바이어 매칭 전문가',
      width: 70,
      height: 70,
    },
  },
  {
    type: 'image',
    wrapperClass: 'absolute bottom-[200px] left-[800px]',
    image: {
      srcKey: 'seller-3@3x.png',
      alt: '수출 컨설팅 전문가',
      width: 47,
      height: 47,
    },
  },
  {
    type: 'image',
    wrapperClass: 'absolute right-[50px] top-[140px]',
    image: {
      srcKey: 'seller-5@3x.png',
      alt: '브랜드 마케팅 전문가',
      width: 40,
      height: 40,
    },
  },
  {
    type: 'image',
    wrapperClass: 'absolute left-[30px] top-[30px]',
    image: {
      srcKey: 'seller-8@3x.png',
      alt: '제품 개발 컨설턴트',
      width: 36,
      height: 36,
    },
  },
  {
    type: 'image',
    wrapperClass: 'absolute bottom-0 right-0',
    image: {
      srcKey: 'seller-9@3x.png',
      alt: '유통 네트워크 전문가',
      width: 42,
      height: 42,
    },
  },
  {
    type: 'image',
    wrapperClass: 'absolute -bottom-[60px] left-[-30px]',
    image: {
      srcKey: 'seller-10@3x.png',
      alt: '글로벌 세일즈 매니저',
      width: 70,
      height: 70,
    },
  },
];

const assetMap: { [key: string]: string } = {
  'seller-1@3x.png': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/seller-1@3x-13.png?',
  'seller_rebbit@3x.png': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/seller_rebbit@3x-14.png?',
  'seller-3@3x.png': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/seller-3@3x-15.png?',
  'seller-5@3x.png': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/seller-5@3x-17.png?',
  'seller-8@3x.png': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/seller-8@3x-20.png?',
  'seller-9@3x.png': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/seller-9@3x-21.png?',
  'seller-10@3x.png': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a4db9ca-b34c-4074-876b-2e677dc77635-kmong-com/assets/images/seller-10@3x-22.png?',
};

const processedItems = floatingItemsData
  .map(item => {
    const src = assetMap[item.image.srcKey];
    if (!src) {
        // Omitting items without images, as per asset handling rules
        if (item.content?.title === '유비템즈') return null;
    }
    // Only includes items with available images, except for the specifically mentioned ones
    const hasImage = !!src;
    
    // As "유비템즈" is specifically mentioned in design instructions but has no image, let's filter it out.
    // The asset rules are stricter.
    if (!hasImage) return null;

    return {
      ...item,
      image: {
        ...item.image,
        src: src,
      },
    };
  })
  .filter(Boolean);


const ExpertsShowcaseSection = () => {
    return (
        <section className="flex flex-col items-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-[140px] overflow-hidden">
            <h2 className="text-center text-[44px] font-bold leading-[65px] text-gray-900">
                검증된 글로벌 뷰티 전문가들과 함께 <br /> 
                성공적인 해외 진출을 실현하세요
            </h2>
            <p className="mt-6 text-center text-[18px] font-medium leading-[28px] text-gray-600 max-w-[600px]">
                10년 이상의 뷰티 업계 경험을 가진 전문가들이 
                <br />
                여러분의 글로벌 진출 파트너가 되어드립니다
            </p>
            <div className="relative mt-[80px] w-[1168px] h-[432px]">
                {processedItems.map((item, index) => {
                    if (!item) return null;
                    if (item.type === 'card') {
                        return (
                            <div key={index} className={item.wrapperClass}>
                                <div className="flex items-center gap-4 rounded-lg bg-white px-5 py-3 shadow-[0_0_20px_0_rgba(0,0,0,0.08)] border border-rose-100">
                                    <div>
                                        <h3 className="text-[16px] font-bold leading-[21px] text-gray-900">{item.content?.title}</h3>
                                        <p className="text-[14px] font-normal leading-[21px] text-rose-600">{item.content?.description}</p>
                                    </div>
                                    <Image
                                        src={item.image.src}
                                        alt={item.image.alt}
                                        width={item.image.width}
                                        height={item.image.height}
                                        className="rounded-full border-2 border-rose-200"
                                    />
                                </div>
                            </div>
                        );
                    }
                    if (item.type === 'image') {
                        return (
                            <div key={index} className={item.wrapperClass}>
                                <Image
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    width={item.image.width}
                                    height={item.image.height}
                                    className="rounded-full border-2 border-rose-200 shadow-lg"
                                />
                            </div>
                        );
                    }
                    return null;
                })}
                {/* Fallback scattered images from original HTML that are not in asset list */}
                <div className="absolute -top-[30px] right-[40px]">
                    {/* Placeholder for seller-4 image */}
                </div>
                <div className="absolute right-[190px] top-[260px]">
                     {/* Placeholder for seller-7 image */}
                </div>
                <div className="absolute bottom-[100px] left-[450px]">
                     {/* Placeholder for seller-11 image */}
                </div>
                <div className="h-[432px] w-[1168px] rounded-full bg-gradient-to-br from-rose-100 to-pink-100 border border-rose-200"></div>
            </div>
        </section>
    );
};

export default ExpertsShowcaseSection;