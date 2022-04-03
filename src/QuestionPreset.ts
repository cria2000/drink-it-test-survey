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
    recommendDrink: string
    recommendSpace: string
    relevantLink: string
    drinkImg: string
    spaceImg: string
}

const onClickE = ({selectedOptions, setSelectedOptions}: {selectedOptions: SelectedOptionsType, setSelectedOptions: (newSelectedOptions: SelectedOptionsType) => void}) => () => {
    const currentE = selectedOptions?.first?.e
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
        onClickFirstOption: onClickN,
        onClickSecondOption: onClickS
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
        drinkEnName: "Jack Rose",
        spaceName: '화려한 공간',
        content: '화려하고 커다란 샹들리에가 있는 공간에서 달콤하고 매혹적인 당신을 닮은 칵테일 어떠세요?',
        recommendDrink: '잭 로즈',
        recommendSpace: '코트룸',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/py7d0or5zIXFPaCJaMLR2P03D_Yo_Q==',
        drinkImg: '0_drink.jpg',
        spaceImg: '코트룸.jpg',
    },
    {
        id: 1,
        drinkName: '기분 좋은 산미의 와인',
        drinkEnName: "Natural Orange",
        spaceName: '밝고 쾌활한 공간',
        content: '스포트라이트를 즐기는 당신처럼 마치 파리에 온 듯한 밝고 쾌활한 공간에서 기분 좋은 산미가 함께하는 와인 한 잔 어떠세요?',
        recommendDrink: '내추럴 오렌지',
        recommendSpace: '원형들',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/-uBDebXfqJISCwfUnjwrjpSQ5UGF_g==',
        drinkImg: '1_drink.jpeg',
        spaceImg: '원형들.jpg',
    },
    {
        id: 2,
        drinkName: '깊은 위스키',
        drinkEnName: "Cuvee Cask",
        spaceName: '깔끔한 공간',
        content: '천장 높이까지 깔끔하게 정리되어 있는 공간에서 깊고 복합적인 풍미를 구체적으로 느낄 수 있는 위스키 한 잔 어떠세요?',
        recommendDrink: '뀌베 캐스크',
        recommendSpace: '코트룸',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/py7d0or5zIXFPaCJaMLR2P03D_Yo_Q==',
        drinkImg: '2_drink.jpg',
        spaceImg: '코트룸.jpg',
    },
    {
        id: 3,
        drinkName: '상큼한 와인',
        drinkEnName: 'Kuehling Gillot \nNierstein Riesling Trocken',
        spaceName: `날씨 좋은 \n야외의 공간`,
        content: '날씨가 좋은 봄 날 야외에서 즐길 수 있는 상큼한 와인 한 잔 어떠세요? ',
        recommendDrink: '니어슈타인 리슬링',
        recommendSpace: '낫투길티',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/HaLWYOzS854bJpADGJsN43vmcryTgw==',
        drinkImg: '3_drink.jpg',
        spaceImg: '낫투길티.jpg',
    },
    {
        id: 4,
        drinkName: '임금의 술 왕주',
        drinkEnName: "King's Drink",
        spaceName: `정겨운 이야기가 \n가득한 공간`,
        content: '카리스마와 충만한 열정을 지닌 당신처럼 열정과 정겨운 이야기가 가득한 공간에서 조선 왕실에서 궁중 비법으로 전수된 임금이 마시던 왕주 어떠세요?',
        recommendDrink: '왕주',
        recommendSpace: '산울림 1992',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/FqyIq7Hf57IPElUnAHOvxfAMiaDbMQ==',
        drinkImg: '4_drink.jpg',
        spaceImg: '산울림.jpg',
    },
    {
        id: 5,
        drinkName: '달콤한 칵테일',
        drinkEnName: "Banana",
        spaceName: '파리를 닮은 공간',
        content: '활발하면서도 인정이 많은 당신, 마치 파리에 온 듯하게 자유롭게 세상을 바라볼 수 있는 넓은 통 유리창이 함께하는 공간에서 달콤한 칵테일 한 잔 어떠세요?',
        recommendDrink: '바나나',
        recommendSpace: '원형들',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/-uBDebXfqJISCwfUnjwrjpSQ5UGF_g==',
        drinkImg: '5_drink.jpeg',
        spaceImg: '원형들.jpg',
    },
    {
        id: 6,
        drinkName: '묵직한 칵테일',
        drinkEnName: "Mr. Carmen Negroni",
        spaceName: `'킹스맨'의 공간`,
        content: '당신처럼 카리스마있는 리더 \'킹스맨\'이 있던 공간에서 묵직하고 강한 바디감의 칵테일 어떠세요?\n',
        recommendDrink: '미스터 카르멘 네그로니',
        recommendSpace: '디스틸',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/_k8MREmOC2NgdqVAm67SDgIud2DZaQ==',
        drinkImg: '6_drink.jpeg',
        spaceImg: '디스틸.jpg',
    },
    {
        id: 7,
        drinkName: '내추럴 와인',
        drinkEnName: 'Natural \nWhite Wine',
        spaceName: `무심한듯 친절한 공간`,
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        recommendDrink: '내추럴 화이트 와인',
        recommendSpace: '낙성',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/gDkfBFjS2kPI9xzOA_QssqGu66mjqg==',
        drinkImg: '7_drink.jpg',
        spaceImg: '낙성.jpg',
    },
    {
        id: 8,
        drinkName: '호불호 없는 맥주',
        drinkEnName: "Triporteur Belgian Oak",
        spaceName: '적당히 시끄러운 공간',
        content: '너무 조용하지도, 너무 시끄럽지도 않은, 적당히 조용하고 적당히 시끄러운 공간에서 호불호 없이 마실 수 있는 달달한 맥주 한 잔 어떠세요?',
        recommendDrink: '트리포터 벨지안 오크',
        recommendSpace: '수도원',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/XbTN1J_aI4UwxBvFuXt7yMTJ7AKYIQ',
        drinkImg: '8_drink.jpg',
        spaceImg: '수도원.jpg',
    },
    {
        id: 9,
        drinkName: '바흐의 음악을 곁들인 와인',
        drinkEnName: 'Geyser \npeak cabernet sauvignon',
        spaceName: '감각적인 공간',
        content: '다양한 아이디어와 다채로우면서도 감각적인 당신, 바흐의 음악을 들으며 와인 한 잔으로 영감을 받아가는 건 어떠세요?',
        recommendDrink: '가이서 픽 까베르네 소비뇽',
        recommendSpace: '몽크투바흐',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/XDA70sXfmcaj_WSomitVRjsrmHP_Cw==',
        drinkImg: '9_drink.jpg',
        spaceImg: '몽크투바흐.jpg',
    },
    {
        id: 10,
        drinkName: '담백한 막걸리',
        drinkEnName: 'Song Myungseop\n Rice Wine',
        spaceName: '차분한 공간',
        content: '차분하고 조용한 공간에서 담백한 막걸리 한 잔 어떠세요?',
        recommendDrink: '송명섭 막걸리',
        recommendSpace: '묵전',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/DPjGjK6CiBYGEzkvKOt8Lf5-0kq2Aw==',
        drinkImg: '10_drink.jpg',
        spaceImg: '묵전.jpg',
    },
    {
        id: 11,
        drinkName: '새로운 하이볼',
        drinkEnName: "Joseon Highball",
        spaceName: '다양한 만남의 공간',
        content: '주변을 탐색하기 좋아하는 당신에게 딱 맞는 다양한 사람들을 만날 수 있는 공간에서, 새로운 하이볼 한 잔 어떠세요?',
        recommendDrink: '조선 하이볼',
        recommendSpace: '산울림 1992',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/FqyIq7Hf57IPElUnAHOvxfAMiaDbMQ==',
        drinkImg: '11_drink.jpg',
        spaceImg: '산울림.jpg',
    },
    {
        id: 12,
        drinkName: '강한 신념의 겨울 소주',
        drinkEnName: "Winter Soju",
        spaceName: '사색의 공간',
        content: '주방장과 함께 이야기를 나눌 수 있는 카운터석과 생각을 비우고 혼자만의 시간을 가질 수 있는 사색의 공간에서, 당신의 강한 신념처럼 오랜 시간 공들여 만들어지는 겨울소주 어떠세요?',
        recommendDrink: '겨울소주',
        recommendSpace: '사적공간',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/gDkfBFjS2kPI9xzOA_QssqGu66mjqg==',
        drinkImg: '12_drink.jpg',
        spaceImg: '사적공간.jpg',
    },
    {
        id: 13,
        drinkName: '과일향의 위스키',
        drinkEnName: "Glanfidic",
        spaceName: '클래식 음악의 공간',
        content: '감성적이고 깊은 통찰력을 지닌 당신, 술과 음악을 사랑한다면 클래식 감상회를 즐길 수 있는 공간에서 약간의 과일향과 함께 즐길 수 있는 위스키 한 잔 어떠세요?',
        recommendDrink: '글렌피딕',
        recommendSpace: '몽크투바흐',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/XDA70sXfmcaj_WSomitVRjsrmHP_Cw==',
        drinkImg: '13_drink.jpg',
        spaceImg: '몽크투바흐.jpg',
    },
    {
        id: 14,
        drinkName: '다양한 레이어의 칵테일',
        drinkEnName: "Rosa Paradiso",
        spaceName: '클래식한 공간',
        content: '" For sales, baby shoes, never worn "의 문구로 유명한 헤밍웨이와 같이, 독특한 자신만의 가치관을가지고 있습니다. 통통튀는 매력으로 많은 사람들에게 관심 독차지!자몽즙이 추가된 상큼한 다이키리 한 잔 어떠신가요?',
        recommendDrink: '로사 파라디소',
        recommendSpace: '디스틸',
        relevantLink: 'http://naver.com',
        drinkImg: '14_drink.jpg',
        spaceImg: '디스틸.jpg',
    },
    {
        id: 15,
        drinkName: '사케',
        drinkEnName: "春霞 純米酒 赤ラベル",
        spaceName: '소박한 공간',
        content: '혼자 사색을 즐길 수 있는 아늑하고 소박한 공간에서 조금씩 음미하며 마실 수 있는 사케 어떠세요? ',
        recommendDrink: '사케',
        recommendSpace: '사적공간',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/gDkfBFjS2kPI9xzOA_QssqGu66mjqg==',
        drinkImg: '15_drink.jpg',
        spaceImg: '사적공간.jpg',
    },
]