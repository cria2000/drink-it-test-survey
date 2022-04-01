export default {
    whatIsMyDrinkIt: '내 안의 드링킷🥂은?',
    startTest: 'DITI 테스트 시작하기',
    enquiryInformation: `위 테스트는 정기 뉴스레터 '드링킷'의 내용을 기반으로 제작되었습니다.`,
    testEnquiry: '테스트 관련 문의는 cria2000@naver.com으로,',
    drinkItEnquiry: '드링킷 관련 문의는 drinkit2021@gmail.com으로',
    prevPage: '이전 페이지로',
    resultSentence: ({result, decorativeSentence}:{result: string, decorativeSentence: string}) =>
        `당신은 \n${decorativeSentence},\n ${result}와 닮아있습니다.`,
    noticeNewsLetter: ({result}: {result: string}) => `${result}의 공간이 궁금하신가요?`,
    linkToNewsLetterSentence: ({result}: {result: string}) => `<${result}> 드링킷 뉴스레터 보러가기`,
    interestInMore: '더 다양한 술과 공간이 궁금하신가요?',
    goToSubscribe: '드링킷 뉴스레터 구독하러 가기',
}