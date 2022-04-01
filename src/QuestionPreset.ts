export type QuestionType = {
    id: number
    question?: string
    firstOption?: string
    secondOption?: string
}

export type ResultType = {
    id: number
    drinkName: string
    drinkEnName: string
    decorativeSentence: string
    content: string
}

export const questionPreset : QuestionType[] = [
    {id: 0, question: '당신은 사람인가요?', firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
    {id: 1, question: '정말 재미가 없네요', firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
    {id: 2, question: '으 하기싫어!',  firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
    {id: 3, question: '내일 복권에 당첨된다면 지금 당장 무엇을 살 수 있을까요?', firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
    {id: 4, question: '아유 과제는 정말 하기 싫단말이야', firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
    {id: 5, question: '근데 곧 시험기간이라고? 정말 말이 안돼!',  firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
    {id: 6, question: '딸기송이는 참 맛있다! 지원이가 엄청 사줬지~', firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
    {id: 7, question: '아무 말이나 일단 적어! 그리고 문제 언제 만들지? 깔깔', firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
    {id: 8, question: '이건 사실 개뻥입니다. 전혀 맞질 않아요 하하',  firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
    {id: 9, question: '점수 후하게 안 주시면 가만 안 둔다 교수님..', firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
]


export const resultPreset : ResultType[] = [
    {id: 1, drinkName: '헤밍웨이 다이키리', drinkEnName: "Hemingway Daiquiri", decorativeSentence: '헤밍웨이가 사랑한 술', content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?'},
]