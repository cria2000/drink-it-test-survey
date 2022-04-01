export type questionType = {
    id: number
    question?: string
    firstOption?: string
    secondOption?: string
}

export const questionPreset : questionType[] = [
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
