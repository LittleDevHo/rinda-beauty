"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqData = [
    {
      value: "item-1",
      question: "어떤 종류의 뷰티 브랜드가 바이어 매칭 서비스를 받을 수 있나요?",
      answer: (
        <>
          <p className="text-base font-normal leading-[26px] text-gray-800 break-keep">
            <b>스킨케어, 색조화장품, 헤어케어, 바디케어, 향수, 뷰티디바이스</b> 등 
            모든 뷰티 카테고리의 브랜드가 서비스를 받을 수 있습니다.
          </p>
          <br />
          <p className="text-base font-normal leading-[26px] text-gray-800 break-keep">
            특히 <b>K-뷰티의 독창성과 품질을 갖춘 브랜드</b>라면 규모에 관계없이 
            글로벌 바이어들의 높은 관심을 받을 수 있습니다. 스타트업부터 중견기업까지 
            모든 규모의 브랜드를 지원합니다.
          </p>
        </>
      ),
    },
    {
      value: "item-2",
      question: "바이어 매칭은 어떤 방식으로 이루어지나요?",
      answer: (
        <p className="text-base font-normal leading-[26px] text-gray-800 break-keep">
          브랜드의 제품 특성, 타겟 시장, 가격대 등을 종합 분석하여 가장 적합한 
          글로벌 바이어를 선별합니다. 세포라, 얼타, 아마존, 티몰 등 검증된 
          리테일러들과의 직접적인 네트워크를 통해 맞춤형 매칭을 제공합니다.
        </p>
      ),
    },
    {
      value: "item-3",
      question: "해외 진출 경험이 전혀 없어도 서비스를 받을 수 있나요?",
      answer: (
        <p className="text-base font-normal leading-[26px] text-gray-800 break-keep">
          네, 물론입니다. 오히려 해외 진출 초보 브랜드를 위한 맞춤형 지원 프로그램을 
          운영하고 있습니다. 수출 인증부터 법적 요구사항, 마케팅 전략까지 
          처음부터 끝까지 전담 매니저가 단계별로 안내해드립니다.
        </p>
      ),
    },
    {
      value: "item-4",
      question: "바이어 매칭 성공률은 어느 정도인가요?",
      answer: (
        <p className="text-base font-normal leading-[26px] text-gray-800 break-keep">
          현재 저희 서비스의 바이어 매칭 성공률은 <b>94%</b>입니다. 
          단순한 연결을 넘어서 실제 계약까지 이어지는 비율도 <b>78%</b>에 달합니다. 
          이는 철저한 사전 분석과 검증된 바이어 네트워크, 그리고 전문 매니저의 
          밀착 지원 덕분입니다.
        </p>
      ),
    },
    {
      value: "item-5",
      question: "서비스 이용 비용은 어떻게 되나요?",
      answer: (
        <p className="text-base font-normal leading-[26px] text-gray-800 break-keep">
          <b>[바이어 매칭 기본 서비스]</b>
          <br />
          초기 상담, 브랜드 분석, 바이어 매칭, 미팅 주선까지 <b>무료</b>로 제공됩니다.
          <br />
          <br />
          <b>[성과 기반 수수료]</b>
          <br />
          실제 계약이 성사된 경우에만 계약 금액의 <b>5-10%</b>(협의 가능)를 
          성과 수수료로 받습니다. 계약이 성사되지 않으면 비용이 발생하지 않습니다.
          <br />
          <br />
          <b>[추가 전문 서비스]</b>
          <br />
          수출 인증, 브랜딩, 마케팅 등 추가 전문 서비스는 별도 협의를 통해 
          합리적인 비용으로 제공됩니다.
        </p>
      ),
    },
  ];

  return (
    <section className="w-full bg-background">
      <div className="mx-auto w-[1168px] pt-[120px] pb-[140px]">
        <h2 className="text-center text-[44px] font-bold leading-[65px] text-black">
          자주 묻는 질문
        </h2>
        <p className="mt-6 text-center text-[18px] font-medium leading-[28px] text-gray-600">
          K-뷰티 브랜드들이 가장 많이 궁금해하는 질문들을 모았습니다
        </p>
        <Accordion type="single" collapsible className="mt-16 w-full">
          {faqData.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b-rose-200"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline text-gray-900 hover:text-rose-600 transition-colors">
                <p className="text-[20px] font-bold leading-[30px]">
                  {item.question}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-2 pb-6">{item.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;