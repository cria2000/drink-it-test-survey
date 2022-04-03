import {SelectedOptionsType} from "./QuestionContainer";

export type QuestionType = {
    id: number
    question?: string
    firstOption?: string
    secondOption?: string
    onClickFirstOption?: ({selectedOptions, setSelectedOptions}: {selectedOptions: SelectedOptionsType, setSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void}) => () => void
    onClickSecondOption?: ({selectedOptions, setSelectedOptions}: {selectedOptions: SelectedOptionsType, setSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void}) => () => void
}

export type ResultType = {
    id: number
    drinkName: string
    drinkEnName: string
    spaceName: string
    content: string
    relevantLink: string
    img: string
}

const onClickE = ({selectedOptions, setSelectedOptions}: {selectedOptions: SelectedOptionsType, setSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void}) => () => {
    const currentE = selectedOptions?.first?.e
    console.log('거지같아', {...selectedOptions, first: {e: currentE + 1, i: selectedOptions?.first?.i}})

    setSelectedOptions({...selectedOptions, first: {e: currentE + 1, i: selectedOptions?.first?.i}})
}

const onClickI = ({selectedOptions, setSelectedOptions}: {selectedOptions: SelectedOptionsType, setSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void}) => () => {
    const currentI = selectedOptions?.first?.i
    setSelectedOptions({...selectedOptions, first: {i: currentI + 1, e: selectedOptions?.first?.e}})
}

const onClickS = ({selectedOptions, setSelectedOptions}: {selectedOptions: SelectedOptionsType, setSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void}) => () => {
    const currentS = selectedOptions?.second?.s
    setSelectedOptions({...selectedOptions, second: {s: currentS + 1, n: selectedOptions?.second?.n}})
}

const onClickN = ({selectedOptions, setSelectedOptions}: {selectedOptions: SelectedOptionsType, setSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void}) => () => {
    const currentN = selectedOptions?.second?.n
    setSelectedOptions({...selectedOptions, second: {n: currentN + 1, s: selectedOptions?.second?.s}})
}

const onClickF = ({selectedOptions, setSelectedOptions}: {selectedOptions: SelectedOptionsType, setSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void}) => () => {
    const currentF = selectedOptions?.third?.f
    setSelectedOptions({...selectedOptions, third: {f: currentF + 1, t: selectedOptions?.third?.t}})
}

const onClickT = ({selectedOptions, setSelectedOptions}: {selectedOptions: SelectedOptionsType, setSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void}) => () => {
    const currentT = selectedOptions?.third?.t
    setSelectedOptions({...selectedOptions, third: {t: currentT + 1, f: selectedOptions?.third?.f}})
}

const onClickP = ({selectedOptions, setSelectedOptions}: {selectedOptions: SelectedOptionsType, setSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void}) => () => {
    const currentP = selectedOptions?.fourth?.p
    setSelectedOptions({...selectedOptions, fourth: {p: currentP + 1, j: selectedOptions?.fourth?.j}})
}

const onClickJ = ({selectedOptions, setSelectedOptions}: {selectedOptions: SelectedOptionsType, setSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void}) => () => {
    const currentJ = selectedOptions?.fourth?.j
    setSelectedOptions({...selectedOptions, fourth: {j: currentJ + 1, p: selectedOptions?.fourth?.p}})
}




export const questionPreset : QuestionType[] = [
    {id: 0, question: '정말 너무 무서워보이는 롤러코스터를 타러 갔다. 맨 앞자리에서 벌벌 떨면서,',
        firstOption: '와 너무 무섭겠다. 갑자기 우리가 거꾸로 메달린 채로 놀이기구가 멈추지는 않겠지? 저번에 다른 놀이기구는 그랬다던데..',
        secondOption: '너무 무섭다! 갑자기 의자 용수철이 튀어올라서 내가 날아가는데 걸리버가 나타나서 나를 잡아주면.. 걸리버의 손은 푹신할까?',
        onClickFirstOption: onClickS,
        onClickSecondOption: onClickN
    },
    {id: 1, question: '수업 시간에 뉴턴의 공식에 대해서 배우고 있다.',
        firstOption: '대체 무슨 소리인지 모르겠지만 일단 외워보자',
        secondOption: '이게 왜 이렇게 나왔지? 근데 뉴턴은 사과 맞았을 때 아팠을까?',
        onClickFirstOption: onClickS,
        onClickSecondOption: onClickN
    },
    {id: 2, question: '하루동안 해야 하는 일이 주어졌을 때, 당신이 선호하는 업무는?',
        firstOption: '8시간 동안 단 한 마디도 하지 않고 혼자서 처리할 수 있는 게 좋아!',
        secondOption: '8시간 내내 팀원들과 회의하며 처리할 수 있는 게 좋아!',
        onClickFirstOption: onClickI,
        onClickSecondOption: onClickE
    },
    {id: 3, question: '과제를 하고 있을 때 당신의 생각은?',
        firstOption: '과제 너무 어려운데, 이런 식으로 과제 어서 해야겠다.(제출 일주일 전) ',
        secondOption: '과제 너무 어려운데, 이런 식으로 과제 어서 해야겠다.(제출 7시간 전)',
        onClickFirstOption: onClickJ,
        onClickSecondOption: onClickP
    },
    {id: 4, question: '그저 집 앞을 걷는 것만으로도 여행이 될 수 있어요’라는 말을 들으면,',
        firstOption: '집 앞을 걷는 건 그냥 집 앞 산책이지 어떻게 여행이야?',
        secondOption: '멋진 말이다.. 집 앞을 걷는 것도 여행이라고 생각할 수 있다니!',
        onClickFirstOption: onClickT,
        onClickSecondOption: onClickF
    },
    {id: 5, question: '계획적인 여행과 무계획이 계획인 여행 중 당신의 여행 스타일은?',
        firstOption: '계획적인 여행을 갈 것인지, 무계획으로 갈 것인지를 생각해보고 그에 따라 계획을 세워봐야지!',
        secondOption: '여행은 자고로 자유 여행이지!',
        onClickFirstOption: onClickJ,
        onClickSecondOption: onClickP
    },
    {id: 6, question: '내가 모범생이라면,',
        firstOption: '이 망할 놈의 암기만 하는 한국의 교육, 내가 빨리 대단한 사람이 되어서 이걸 싹 다 갈아엎겠어',
        secondOption: '일단 1등을 해서 원하는 대학에 간다음에, 교육청에 들어가서…',
        onClickFirstOption: onClickS,
        onClickSecondOption: onClickN
    },
    {id: 7, question: '이제부터라도 건강을 챙겨야겠다, 어떤 운동을 해볼까?',
        firstOption: '다른 사람들과 다 함께 즐길 수 있는 배드민턴이 좋겠어!',
        secondOption: '나는 혼자서 노래 들으면서 조깅을 할래!',
        onClickFirstOption: onClickE,
        onClickSecondOption: onClickI
    },
    {id: 8, question: '친구가 약속 시간에 늦었다. 이 때 친구에게 받고 싶은 사과는?',
        firstOption: '합당한 이유와 간단한 사과면 충분하지!',
        secondOption: '변명하지 말고 정말 진심으로 사과하고 미안해하면 괜찮아!',
        onClickFirstOption: onClickT,
        onClickSecondOption: onClickF
    },
    {id: 9, question: '이따 퇴근할 때 뭐 사가지?',
        firstOption:  '가다가 맛있어 보이는 거 사가야겠다!',
        secondOption: '저번에 먹었던 그 가게 아마 7시에 문 닫을 테니까 6시에 나가서 역 가는 길에 사가야겠다!',
        onClickFirstOption: onClickP,
        onClickSecondOption: onClickJ
    },
    {id: 10, question: '친구가 ‘퇴근하는데 역에서 진짜 맛있는 냄새가 난다. 너무 배고파ㅠㅠ’라고 할 때,',
        firstOption: '역에 대부분 빵이나 김밥 같은 거 팔지 않나? 그거 사가!',
        secondOption:'진짜 지금 시간에 너무 배고프겠다 ㅠㅠ 나도 맨날 역 지나갈 때 맛있는 냄새에 괴로워ㅠ',
        onClickFirstOption: onClickS,
        onClickSecondOption: onClickN

    },
    {id: 11, question: '퇴근 후, 술 한 잔이 하고 싶어 바에 들렀다. 옆 테이블에도 혼술을 하는 사람이 있는데,',
        firstOption: '저 분도 심심해보이는데, 한 번 말 걸어볼까?',
        secondOption:'저 분도 혼술하시네! 나만 혼술하는 게 아니라 다행이다. 설마 말 걸진 않겠지?',
        onClickFirstOption: onClickE,
        onClickSecondOption: onClickI

    }
]

export enum EResult {
    E,
    I,
    S,
    N,
    F,
    T,
    J,
    P
}

export const resultMap = new Map<{first: EResult, second: EResult, third: EResult, fourth: EResult}, number>(
[[ {first: EResult.E, second: EResult.S, third: EResult.F, fourth: EResult.J}, 0],
    [{first: EResult.E, second: EResult.S, third: EResult.F, fourth: EResult.P}, 1],
    [ {first: EResult.E, second: EResult.S, third: EResult.T, fourth: EResult.J}, 2],
    [ {first: EResult.E, second: EResult.S, third: EResult.T, fourth: EResult.P}, 3],
    [ {first: EResult.E, second: EResult.N, third: EResult.F, fourth: EResult.J}, 4],
    [ {first: EResult.E, second: EResult.N, third: EResult.F, fourth: EResult.P}, 5],
    [ {first: EResult.E, second: EResult.N, third: EResult.T, fourth: EResult.J}, 6],
    [ {first: EResult.E, second: EResult.N, third: EResult.T, fourth: EResult.P}, 7],
    [ {first: EResult.I, second: EResult.S, third: EResult.F, fourth: EResult.J}, 8],
    [ {first: EResult.I, second: EResult.S, third: EResult.F, fourth: EResult.P}, 9],
    [ {first: EResult.I, second: EResult.S, third: EResult.T, fourth: EResult.J}, 10],
    [ {first: EResult.I, second: EResult.S, third: EResult.T, fourth: EResult.P}, 11],
    [ {first: EResult.I, second: EResult.N, third: EResult.F, fourth: EResult.J}, 12],
    [ {first: EResult.I, second: EResult.N, third: EResult.F, fourth: EResult.P}, 13],
    [ {first: EResult.I, second: EResult.N, third: EResult.T, fourth: EResult.J}, 14],
    [ {first: EResult.I, second: EResult.N, third: EResult.T, fourth: EResult.P}, 15],
]
)


export const resultPreset : ResultType[] = [
    {
        id: 0,
        drinkName: '매혹적인 칵테일',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '화려한 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 1,
        drinkName: '기분 좋은 산미의 와인',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '밝고 쾌활한 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 2,
        drinkName: '깊은 위스키',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '깔끔한 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 3,
        drinkName: '상큼한 와인',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '날씨 좋은 야외의 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 4,
        drinkName: '임금의 술 왕주',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '정겨운 이야기가 가득한 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 5,
        drinkName: '달콤한 칵테일',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '파리를 닮은 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 6,
        drinkName: '묵직한 칵테일',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: `'킹스맨'의 공간`,
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 7,
        drinkName: '사케',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '소박한 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 8,
        drinkName: '호불호 없는 맥주',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '적당히 시끄러운 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 9,
        drinkName: '바흐의 음악을 곁들인 와인',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '감각적인 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 10,
        drinkName: '담백한 막걸리',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '차분한 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 11,
        drinkName: '새로운 하이볼',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '다양한 만남의 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 12,
        drinkName: '강한 신념의 겨울 소주',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '사색의 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 13,
        drinkName: '과일향의 위스키',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '클래식 음악의 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 14,
        drinkName: '사케',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '소박한 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
    {
        id: 15,
        drinkName: '사케',
        drinkEnName: "Hemingway Daiquiri",
        spaceName: '소박한 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        relevantLink: 'http://naver.com',
        img: 'picture.png'
    },
]