import React from 'react';

const statsData = [
  { id: 0, text: '연간 K-뷰티 브랜드 매칭 성사액', value: '320', suffix: '억원' },
  { id: 1, text: '등록된 글로벌 바이어 수', value: '2,400', suffix: '개사' },
  { id: 2, text: '연평균 수출 증가율', value: '185', suffix: '%' },
  { id: 3, text: '바이어 매칭 성공률', value: '94', suffix: '%' },
];

const StatsSection = () => {
  return (
    <div className="mx-auto w-[936px] pt-[200px] pb-[140px]">
      {statsData.map((stat) => (
        <div key={stat.id}>
          <p className="text-white text-[48px] font-bold transition-colors duration-500 ease-in-out">
            {stat.text}{' '}
            <span className="text-rose-400 text-[48px] font-bold transition-colors duration-500 ease-in-out">
              {stat.value}
            </span>
            {stat.suffix}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;