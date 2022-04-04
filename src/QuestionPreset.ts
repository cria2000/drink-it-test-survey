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
    spaceAddress: string
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
        secondOption: '이게 왜 이렇게 나왔지? 이해가 될 때까지 쳐다보고 있는다.',
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
    {id: 11, question: '새로운 사람을 만났을 때 당신은,',
        firstOption: '새로운 사람을 만나는 건 언제나 행복한 일이야! 말 걸어볼까?!',
        secondOption:'어서 집에 가서 쉬고 싶다.. 나한테 말 걸지는 않겠지?',
        onClickFirstOption: onClickE,
        onClickSecondOption: onClickI

    }
]


export const questionEngPreset : QuestionType[] = [
    {id: 0, question: 'What do you think about going on a roller coaster that looks really scary and shaking in the front seat?',
        firstOption: 'Wow, that must be scary. The ride won\'t stop suddenly with us hanging upside down, will it? I heard other rides were like that last time.',
        secondOption: 'It\'s so scary! The spring of the chair suddenly bounces up and I fly away, and Gulliver shows up and grabs me. Will Gulliver\'s hands be soft?',
        onClickFirstOption: onClickS,
        onClickSecondOption: onClickN
    },
    {id: 1, question: 'When you were learning about Newton\'s formula in class,',
        firstOption: `I don't know what this means, but let's memorize it first`,
        secondOption: 'I think, "Why did this come out like this?" and watch until I understand.',
        onClickFirstOption: onClickS,
        onClickSecondOption: onClickN
    },
    {id: 2, question: 'When given a day\'s work, what is your preferred task?',
        firstOption: 'It\'s good to be able to handle it by yourself without saying a word for eight hours!',
        secondOption: 'It\'s good to have meetings with your team members for eight hours!',
        onClickFirstOption: onClickI,
        onClickSecondOption: onClickE
    },
    {id: 3, question: 'What do you think when you\'re doing your homework?',
        firstOption: 'The assignment is too difficult, but I should do it quickly like this.(A week before submission)',
        secondOption: 'The assignment is too difficult, but I should do it quickly like this.(7 hours before submission)',
        onClickFirstOption: onClickJ,
        onClickSecondOption: onClickP
    },
    {id: 4, question: 'If you are told that just walking in front of your house can be a trip,',
        firstOption: 'Walking in front of the house is just a walk in front of the house. How is it a trip?',
        secondOption: 'That\'s a nice word. It\'s cool that walking in front of your house can also be considered a trip!',
        onClickFirstOption: onClickT,
        onClickSecondOption: onClickF
    },
    {id: 5, question: 'What is your travel style between planned and unplanned trips?',
        firstOption: 'I\'ll think about whether to go on a planned trip or without a plan, and then I\'ll make a plan accordingly!"',
        secondOption: 'Of course it\'s a free trip!',
        onClickFirstOption: onClickJ,
        onClickSecondOption: onClickP
    },
    {id: 6, question: 'If You were a model student,',
        firstOption: 'I\'m going to become a great person and break everything down with this terrible education in Korea.',
        secondOption: 'Make a realistic plan to "first place, go to the university you want, and then enter the Office of Education."',
        onClickFirstOption: onClickN,
        onClickSecondOption: onClickS
    },
    {id: 7, question: 'You should take care of my health from now on. What kind of exercise should you do?',
        firstOption: 'Badminton that you can enjoy with other people would be great!',
        secondOption: 'I\'m going to jog while listening to music by myself!',
        onClickFirstOption: onClickE,
        onClickSecondOption: onClickI
    },
    {id: 8, question: 'Your friend was late for his appointment. What kind of apology do you want from your friend?',
        firstOption: 'A good reason and a simple apology are enough!',
        secondOption: 'Don\'t make excuses. If you truly apologize and apologize, it\'s okay!',
        onClickFirstOption: onClickT,
        onClickSecondOption: onClickF
    },
    {id: 9, question: 'When you think about what to buy when you get off work later,',
        firstOption:  'I should buy something delicious on the way!',
        secondOption: 'The restaurant I ate last time will probably close at seven, so I\'ll go out at six and buy it on my way to the station!',
        onClickFirstOption: onClickP,
        onClickSecondOption: onClickJ
    },
    {id: 10, question: 'If your friend says, "I\'m going home from work, I can smell something really delicious at the station. I\'m so hungry",',
        firstOption: 'Don\'t most stations sell bread or gimbap? Buy that!',
        secondOption:'You must be so hungry at this hour. I always suffer from the delicious smell when I pass by the station, too.',
        onClickFirstOption: onClickS,
        onClickSecondOption: onClickN

    },
    {id: 11, question: 'When you meet a new person,',
        firstOption: 'Meeting new people is always a happy thing! I want to talk to him(her)!',
        secondOption:'I can\'t wait to go home and rest.  He(She) won\'t talk to me, will he?(she)',
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
        spaceAddress: 'ᑯ 서울 서초구 반포대로28길 56-3 지하 1층',
        content: `🥂 누가 뭐래도 당신은 인기쟁이! 매혹적인 칵테일 같은 존재다. \n
         🥂 정 빼면 시체! 사람들과 행복하게 지내는 게 좋다. 다른 사람들의 감정을 매우 잘 배려하기도 하다. \n
         🥂 계획되지 않은 일들은 극혐! 당신이 세운 계획대로 잘 이루어지는 것이 좋다. 연인과의 데이트도 계획적인 데이트를 선호한다. 
         🥂 친구들과 메뉴를 결정할 때는 언제나 '아무거나!' 그것은 전부 친구들을 배려하기 위함이다. 
         \n\n
         화려하고 커다란 샹들리에가 있는 공간에서 달콤하고 매혹적인 당신을 닮은 칵테일 어떠세요?`,
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
        spaceAddress: 'ᑯ 서울 중구 창경궁로1길 38 4층',
        content: `🥂 즐겁다! 갑자기 흥얼거리면 즉흥적으로 춤을 추는 사람이 있다? 그것은 바로 당신. 천성이 연예인 기질이다. \n
        🥂 다른 사람과는 비교할 수 없는 거부할 수 없는 매력을 지니고 있다. 다른 사람들을 위로하고 용기를 북돋아 주는 데에 원탑 \n
        🥂 미래를 위해 오늘을 산다? 아니, 나는 오늘을 즐길거야!\n
        🥂 발등이 불이 떨어져서 타오를 때쯤 할 일을 행동에 옮기곤 한다. \n 
        🥂 싫고 좋은 사람이 분명하며, 정이 많지만 때에 따라 아주 냉정해지기도 한다. \n\n
        스포트라이트를 즐기는 당신처럼 마치 파리에 온 듯한 밝고 쾌활한 공간에서 기분 좋은 산미가 함께하는 와인 한 잔 어떠세요?`,
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
        spaceAddress: 'ᑯ 서울 서초구 반포대로28길 56-3 지하 1층',
        content: `
        🥂 당신은 본투비 리더! 감정보다는 책임감을 가지고 조직을 이끌어 갈 수 있다.\n
        🥂 계획을 세우려면 나처럼! 어딘가를 간다? 바로 가장 빠르고 효율적인 루트를 찾은 다음 단계적으로 계획을 세운다. \n
        🥂 공감이 가끔은 조금 어렵기도 하다. \n
        🥂 고집이 있지만, 논리적으로 이해가 가면 오케이, 더 이상 고집을 피우지 않는다. \n\n
        천장 높이까지 깔끔하게 정리되어 있는 공간에서 깊고 복합적인 풍미를 구체적으로 느낄 수 있는 위스키 한 잔 어떠세요?`,
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
        spaceAddress: 'ᑯ 서울특별시 용산구 한강대로40길 19-8 1층',
        content: `🥂 여러 사람이 모인 행사에서 당신은 홍길동, 이리 번쩍 저리 번쩍 어딜가나 당신이 있다. \n
        🥂 조금은 모순적인, 공감은 안되지만 매우 다정한 사람\n
        🥂 YOLO! 이게 바로 당신의 삶. 언제나 자유를 갈망하고 즉흥적인 삶이 좋다. \n
        🥂 짤, 밈 이런 거 너무너무 좋아. 각종 짤에 진심인 사람. 하루에도 머릿속에 아이디어가 오천만개씩 떠다니기도 한다. \n\n
        날씨가 좋은 봄 날 야외에서 즐길 수 있는 상큼한 와인 한 잔 어떠세요?`,
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
        spaceAddress: 'ᑯ 서울 마포구 서강로9길 60',
        content: `🥂 '정'의 인간화! 정이 많고, 언제나 사람들을 알고 싶어 한다. 공감도 당신에게는 매우 쉽다. \n
        🥂 순발력이 좋아 임기응변에 매우 강하다. \n
        🥂 내가 바로 유노윤호! 열정이 대단하다. \n
        🥂 내 애인이 예민해?! 바로 다 맞춰준다! 상대방에게 잘 맞춰주지만, 상처를 받으면 굉장히 오래간다. \n\n
        카리스마와 충만한 열정을 지닌 당신처럼 열정과 정겨운 이야기가 가득한 공간에서 조선 왕실에서 궁중 비법으로 전수된 임금이 마시던 왕주 어떠세요?`,
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
        spaceAddress: 'ᑯ 서울 중구 창경궁로1길 38 4층',
        content: `🥂 내일의 할 일보다는 당장 지금의 행복이 중요! 과제는 내일의 내가 알아서 하고, 우선은 놀자! \n
        🥂 당신의 프라임 세포는 감성세포\n
        🥂 사람들을 너무 알고 싶고, 전부 다 퍼주고 싶고, 공감도 너무너무 쉽다.\n
        🥂 당신과 같은 사람들이 모여있다면, 지구는 애정으로 폭발해버릴지도 모른다. \n\n
        활발하면서도 인정이 많은 당신, 마치 파리에 온 듯하게 자유롭게 세상을 바라볼 수 있는 넓은 통 유리창이 함께하는 공간에서 달콤한 칵테일 한 잔 어떠세요?`,
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
        spaceAddress: 'ᑯ 서울 마포구 와우산로15길',
        content: `🥂 리더의 정석. 리더 그 자체. 야망이 있다.\n
        🥂 게임을 심심해서 한다고? 게임은 무조건 이겨야지! 이겨야 직성이 풀리는 인정사정 없는 스타일이다. \n
        🥂 좋아하는 사람에게는 굉장히 부드럽지만, 각자의 사생활도 중요하게 생각하는 타입.\n
        🥂 고집이 세지만, 정당하고 합리적인 비판은 잘 수용한다. \n\n
        당신처럼 카리스마있는 리더 \'킹스맨\'이 있던 공간에서 묵직하고 강한 바디감의 칵테일 어떠세요?`,
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
        spaceName: `무심한 듯 친절한 공간`,
        spaceAddress: 'ᑯ 서울 관악구 봉천동 1625-16 3층',
        content:  `🥂 선택을 할 때 조심하자! 어쩌면 인생의 갈림길에서 나쁜 선택을 하고 있는지로 모른다.\n
        🥂 가끔은 지나치게 솔직하다. \n
        🥂 내 머릿속은 아이디어 뱅크 그 자체! 아이디어가 항상 넘친다. \n
        🥂 은근히 특이한 사람에게 끌린다. \n\n
        당신과 같이 무심하지만, 친절한 공간에서 내추럴한 화이트 와인 어떠세요?
        `,
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
        spaceAddress: 'ᑯ 서울 종로구 동숭3길 16',
        content: `🥂 자애로움을 인간화하면 당신, 그냥 배려가 성격이다라고 할 수도 있다. \n
        🥂 가끔은 생각이 너무 많을 때가 있다.\n
        🥂 마음을 열기까지 시간이 굉장히 오래 걸리며, 연애도 아주 천천히 따뜻해지는 스타일\n
        🥂 감정 표현이 너무 어렵다. 이것 역시 상대방에 대한 배려일 수도 있다.\n\n
        너무 조용하지도, 너무 시끄럽지도 않은, 적당히 조용하고 적당히 시끄러운 공간에서 호불호 없이 마실 수 있는 달달한 맥주 한 잔 어떠세요?`,
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
        spaceAddress: 'ᑯ 강남구 도산대로 27길 21',
        content: `🥂 이런 사람과 싸운다면, 그건 상대방의 문제일 경우 99%, 당신은 평화가 좋다. \n
        🥂 사람 많은 곳은 딱 질색, 혼자 있는 것이 좋다. \n
        🥂 강렬한 예술을 사랑하는 몽상가 타입. \n
        🥂 과묵하고 까칠해보일 수 있지만, 사실 속은 물렁물렁 말랑카우\n\n
        다양한 아이디어와 다채로우면서도 감각적인 당신, 바흐의 음악을 들으며 와인 한 잔으로 영감을 받아가는 건 어떠세요?`,
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
        spaceAddress: 'ᑯ 서울 강남구 언주로168길 22 1층',
        content: `🥂 허튼 짓 하지마라. 허튼 짓을 무엇보다 싫어하며, 다른 사람들이 할 일 들을 빨리 인지하여 실행에 옮기기를 원한다. \n
        🥂 변화는 싫고 체계적인게 좋아!\n
        🥂 은근 쓸모 없는데 뭔가 많이 알고 있다. \n
        🥂 연애는 어려워ㅠ 사실적인 것이 좋고 감정 표현에 서툴러 연인과도 교류하기가 어려울 수 있다. \n\n
        차분하고 조용한 공간에서 담백한 막걸리 한 잔 어떠세요?`,
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
        spaceName: '혼자만의 탐색의 공간',
        spaceAddress: 'ᑯ 서울 마포구 서강로9길 60',
        content: `🥂 창의적인데 틀에 박힌 일상이 좋다.\n
        🥂 영화는 액션과 코믹이지!\n
        🥂 짤 보는 거 너무너무 재미있어! 짤 보는 거 좋아한다. \n
        🥂 많이 생각하는 게 너무 싫다. \n\n
        주변을 탐색하기 좋아하는 당신에게 딱 맞는 혼자만의 공간에서, 새로운 하이볼 한 잔 어떠세요?`,
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
        spaceAddress: 'ᑯ 서울 영등포구 도림로 435 성문빌딩 1층',
        content: `🥂 당신과 같은 사람은 찾기가 어려워요ㅠ 가장 흔하지 않은 성격을 가진 당신.\n
        🥂 나무보다는 숲! \n
        🥂 영화는 판타지지!\n
        🥂 공감 능력이 매우 뛰어나다. 당신의 프라임 세포는 감성세포!\n\n
        주방장과 함께 이야기를 나눌 수 있는 카운터석과 생각을 비우고 혼자만의 시간을 가질 수 있는 사색의 공간에서, 당신의 강한 신념처럼 오랜 시간 공들여 만들어지는 겨울소주 어떠세요?`,
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
        spaceAddress: 'ᑯ 강남구 도산대로 27길 21',
        content: `🥂 겉으로는 수줍음쟁이지만, 사실 안에는 열정의 불꽃이 숨어있다. \n
        🥂 본인을 아싸라고 생각한다. 실제로 단체 생활보다는 혼자가 더 좋다!\n
        🥂 영화는 판타지지!\n
        🥂 마음이 따뜻해서 아이들과도 잘 지낸다.\n\n 
        감성적이고 깊은 통찰력을 지닌 당신, 술과 음악을 사랑한다면 클래식 감상회를 즐길 수 있는 공간에서 약간의 과일향과 함께 즐길 수 있는 위스키 한 잔 어떠세요?`,
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
        spaceAddress: 'ᑯ 서울 마포구 와우산로15길',
        content: `🥂 규칙과 법규는 아직 딱 질색이야!\n
        🥂 인생은 마이웨이! \n
        🥂 할 일이 있다면 마감 직전에 일을 시작한다.\n
        🥂 완벽주의의 인간화, 모든 것을 전부 다 이해해야 속이 시원하다. \n\n
        클래식한 공간이지만, 틀에 박히지 않은 다양한 레이어의 칵테일 한 잔 어떠세요? `,
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
        spaceAddress: 'ᑯ 서울 영등포구 도림로 435 성문빌딩 1층',
        content: `🥂 '평범함을 거부한다! 당신은 당신만의 독창성과 창의력을 가진다. 그리고 그것이 꽤 좋다..!\n
        🥂 먼저 대화하기는 싫지만, 본인이 좋아하는 분야에 대해서는 말을 많이 한다.\n
        🥂 머릿속에 아이디어가 대략 오조 오억 오천 오백만개\n
        🥂 너무나도 솔직하다\n\n
        혼자 사색을 즐길 수 있는 아늑하고 소박한 공간에서 조금씩 음미하며 마실 수 있는 사케 어떠세요?`,
        recommendDrink: '사케',
        recommendSpace: '사적공간',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/gDkfBFjS2kPI9xzOA_QssqGu66mjqg==',
        drinkImg: '15_drink.jpg',
        spaceImg: '사적공간.jpg',
    },
]


export const resultEngPreset : ResultType[] = [
    {
        id: 0,
        drinkName: 'Fascinating Cocktail',
        drinkEnName: "Jack Rose",
        spaceName: 'Fancy Space',
        spaceAddress: 'ᑯ B1F, 56-3 Banpo-daero 28, Seocho-gu, Seoul',
        content: `🥂  No matter what anyone says, you're popular! It's like a fascinating cocktail.\n
         🥂 You have a lot of affection! It's good to be happy with people. They are also very considerate of other people's feelings. \n
         🥂  I hate things that aren't planned! It's better to go according to your plan. When dating with a lover, you prefer planned dates.\n
         🥂 Whenever you decide on a menu with your friends, You always say, "Anything!" It's all to be considerate of your friends.
         \n\n
         How about a cocktail that resembles you sweet and charming in a gorgeous, large chandelier space?`,
        recommendDrink: 'Jack Rose',
        recommendSpace: 'CourtRoom',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/py7d0or5zIXFPaCJaMLR2P03D_Yo_Q==',
        drinkImg: '0_drink.jpg',
        spaceImg: '코트룸.jpg',
    },
    {
        id: 1,
        drinkName: 'Pleasant sour wine',
        drinkEnName: "Natural Orange",
        spaceName: 'Bright and Cheerful space',
        spaceAddress: 'ᑯ 4th floor, 38 Changgyeonggung-ro 1-gil, Jung-gu, Seoul',
        content: `🥂 It's fun! If there are people who dance on the spot? That's you. You are born to be an entertainer. \n
        🥂 It has an irresistible charm that cannot be compared to others. You are the best at comforting and encouraging others. \n
        🥂 Living today for the future? No, I'm going to enjoy today!\n
        🥂 You often take action when your feet are on fire and burn\n 
        🥂 It's obvious that you don't like or like someone, and you are affectionate, but sometimes you becomes very calm.\n\n
        How about a glass of wine with a pleasant acidity in a bright and cheerful space like you who enjoy the spotlight?`,
        recommendDrink: 'Natural Orange',
        recommendSpace: 'WonHyeongDeul',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/-uBDebXfqJISCwfUnjwrjpSQ5UGF_g==',
        drinkImg: '1_drink.jpeg',
        spaceImg: '원형들.jpg',
    },
    {
        id: 2,
        drinkName: 'Deep Whiskey',
        drinkEnName: "Cuvee Cask",
        spaceName: 'Neat space',
        spaceAddress: 'ᑯ B1F, 56-3 Banpo-daero 28, Seocho-gu, Seoul',
        content: `
        🥂 You're the born-to-be leader! You can lead the organization with a sense of responsibility rather than emotion.\n
        🥂 If you want to make a plan, just like me!What if you go somewhere? You immediately find the fastest and most efficient route and then plan step by step.\n
        🥂 Sometimes it's a little difficult for you to relate to. \n
        🥂 You're stubborn, but if you understand logically, OK, you won't be stubborn anymore.\n\n
        How about a whiskey that gives you a deep and complex flavor in a space neatly arranged to the ceiling height?`,
        recommendDrink: 'Cuvee Cask',
        recommendSpace: 'CourtRoom',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/py7d0or5zIXFPaCJaMLR2P03D_Yo_Q==',
        drinkImg: '2_drink.jpg',
        spaceImg: '코트룸.jpg',
    },
    {
        id: 3,
        drinkName: 'Fresh Wine',
        drinkEnName: 'Kuehling Gillot \nNierstein Riesling Trocken',
        spaceName: `an outdoor space\n with fine weather`,
        spaceAddress: 'ᑯ 19th-8th floor, 40-gil, Hangang-daero, Yongsan-gu, Seoul, Republic of Korea',
        content: `🥂 At an event where many people gather, you are Hong Gil-dong, everywhere you go.\n
        🥂 You're a little contradictory, unsympathetic, but very friendly person.\n
        🥂 YOLO! This is your life. You always crave freedom and like a spontaneous life. \n
        🥂 You really like memes and memes. A person who is serious about various memes. You have 50 million ideas in your head every day.\n\n
        How about a glass of fresh wine that you can enjoy outdoors on a fine spring day?`,
        recommendDrink: 'Kuehling Gillot Nierstein Riesling Trocken',
        recommendSpace: 'Not to Guilty',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/HaLWYOzS854bJpADGJsN43vmcryTgw==',
        drinkImg: '3_drink.jpg',
        spaceImg: '낫투길티.jpg',
    },
    {
        id: 4,
        drinkName: `The King's Alcoholic Princess`,
        drinkEnName: "King's Drink",
        spaceName: "a space full of friendly stories",
        spaceAddress: `60 Sogang-ro 9-gil, Mapo-gu, Seoul`,
        content: `"🥂 Humanization of 'Jung'!" You are affectionate and always wants to know people. Empathy is also very easy for you. \n
                🥂 You are very quick-witted and are very responsive. \n
                🥂 You are U-Know Yunho! You have a lot of enthusiasm. \n
                🥂 Is your lover sensitive?! You'll get everything right away! You adapt well to the other person, but when you are hurt, they last very long. \n\n
                In a space full of passion and affectionate stories like you, who have charisma and full passion, how about a prince who drank from the Joseon royal family as a royal secret?`,
        recommendDrink: 'The King',
        recommendSpace: 'Mountain Ring 1992',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/FqyIq7Hf57IPElUnAHOvxfAMiaDbMQ==',
        drinkImg: '4_drink.jpg',
        spaceImg: '산울림.jpg',
    },
    {
        id: 5,
        drinkName: 'Sweet Cocktail',
        drinkEnName: "Banana",
        spaceName: 'Paris-like space',
        spaceAddress: `384/F, Changgyeonggung-ro 1-gil, Jung-gu, Seoul`,
        content: `🥂 Happiness right now is more important than what you have to do tomorrow's happiness! You'll take care of your homework tomorrow, and let's play first! \n
                🥂 Your prime cells are emotional cells.
                🥂 You really want to know people, You want to give them all away, and it's so easy to empathize.\n
                🥂 If people like you are gathered, the earth may explode with affection. \n\n

                How about a sweet cocktail in a space with a wide glass window where you can freely look at the world as if you were in Paris?`,
        recommendDrink: 'Banana',
        recommendSpace: 'Circles',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/-uBDebXfqJISCwfUnjwrjpSQ5UGF_g==',
        drinkImg: '5_drink.jpeg',
        spaceImg: '원형들.jpg',
    },
    {
        id: 6,
        drinkName: 'Heavy Cocktail',
        drinkEnName: "Mr. Carmen Negroni",
        spaceName: `Kingsman's space`,
        spaceAddress: `15 Wausan-ro, Mapo-gu, Seoul`,
        content: `🥂Standard of leadership. You are ambitious\n  
                🥂 You play games because you're bored? You have to win the game no matter what! He is a merciless style that can be satisfied only when he wins. \n
                🥂It's very soft for people you like, but You think their private lives are important.\n
                🥂You are stubborn, but you accept justifiable and reasonable criticism. \n\n
                How about a heavy and strong cocktail in a place where a charismatic leader like you used to be?`,
        recommendDrink: "Mr. Carmen Negroni",
        recommendSpace: 'Desteal',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/_k8MREmOC2NgdqVAm67SDgIud2DZaQ==',
        drinkImg: '6_drink.jpeg',
        spaceImg: '디스틸.jpg',
    },
    {
        id: 7,
        drinkName: `Natural Wine`,
        drinkEnName: 'Natural \nWhite Wine',
        spaceName: 'A space of indifference and kindness',
        spaceAddress: `3rd floor, 1625-16 Bongcheon-dong, Gwanak-gu, Seoul`,
        content: `🥂 Be careful when you make a choice! Maybe You are making a bad choice at the crossroads of your life.\n
                🥂 Sometimes You are too honest. \n
                🥂 You are an idea bank! You are always full of ideas. \n
                🥂 You are attracted to unique people. \n\n
                How about natural white wine in a casual but friendly space like yours?`,
        recommendDrink: 'Natural White Wine',
        recommendSpace: 'Completion',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/gDkfBFjS2kPI9xzOA_QssqGu66mjqg==',
        drinkImg: '7_drink.jpg',
        spaceImg: '낙성.jpg',
    },
    {
        id: 8,
        drinkName: "Beer that everyone will like",
        drinkEnName: "Triporteur Belgian Oak",
        spaceName: 'A reasonably noisy space',
        spaceAddress: `16 Dongsung 3-gil, Jongno-gu, Seoul`,
        content: `🥂 Humanize benevolence and you can say that caring is just a personality." \n
                🥂 Sometimes you think too much.\n
                🥂 It takes a very long time to open up, and love is a style that warms up very slowly.
                🥂 It's very difficult to express your feelings. This may also be a consideration for the other person.\n\n
                How about a sweet beer that you can drink in a moderately quiet, moderately noisy space that is neither too quiet nor too noisy?`,
        recommendDrink: 'Tripper Beljian Oak',
        recommendSpace: `Monastery`,
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/XbTN1J_aI4UwxBvFuXt7yMTJ7AKYIQ',
        drinkImg: '8_drink.jpg',
        spaceImg: '수도원.jpg',
    },
    {
        id: 9,
        drinkName: "Wine with Bach's Music",
        drinkEnName: 'Geyser \npeak cabernet sauvignon',
        spaceName: 'Sensory space',
        spaceAddress:` 21 Dosan-daero, Gangnam-gu, 21 Dosan-daero, Gangnam-gu, Republic of Korea`,
        content: `🥂 If you fight someone like this, it's 99% of the other person's problem, and you have peace. \n
                🥂 You hate crowded places, so it's better to be alone. \n
                🥂 Dreamer type who loves intense art. \n
                🥂 You may look quiet and cranky, but in fact, you're not.
                Why don't you get inspired by a glass of wine while listening to a variety of ideas and your colorful yet sensuous music, Bach?`,
        recommendDrink: "Guyser's Pick Cabernet Sauvignon",
        recommendSpace: 'Monktubach',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/XDA70sXfmcaj_WSomitVRjsrmHP_Cw==',
        drinkImg: '9_drink.jpg',
        spaceImg: '몽크투바흐.jpg',
    },
    {
        id: 10,
        drinkName: "Light Makgeolli",
        drinkEnName: 'Song Myungseop\n Rice Wine',
        spaceName: 'Calm space',
        spaceAddress: `1st floor, 228, Eonju-ro 168-gil, Gangnam-gu, Seoul`,
        content: `🥂 Don't be ridiculous. You hate nonsense more than anything else, and Your want others to recognize and put them into practice quickly. \n
                🥂 You don't like change and You like being systematic!\n
                🥂 It's useless, but You know a lot of things. \n
                🥂Dating is difficultIt can be difficult to interact with your lover because you like realistic things and are not good at expressing emotions. \n\n
                How about a cup of light makgeolli in a calm and quiet place?`,
        recommendDrink: "Song Myungseop Makgeolli",
        recommendSpace: 'Silence',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/DPjGjK6CiBYGEzkvKOt8Lf5-0kq2Aw==',
        drinkImg: '10_drink.jpg',
        spaceImg: '묵전.jpg',
    },
    {
        id: 11, drinkName: 'New Highball',
        drinkEnName: "Joseon Highball",
        spaceName: 'Solo Navigation Space',
        spaceAddress:` 60 Sogang-ro 9-gil, Mapo-gu, Seoul`,
        content: `🥂 I like the creative and stereotyped daily life.\n
                🥂 Favorite Movies are action and comedy!\n
                🥂 Watching gifs is so much fun! You like to watch memes. \n
                🥂 You hate to think too much. \n\n
                How about a new highball in your own space that's perfect for exploring the surroundings?`,
        recommendDrink: 'Chosun Highball',
        recommendSpace: 'Mountain Ring 1992',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/FqyIq7Hf57IPElUnAHOvxfAMiaDbMQ==',
        drinkImg: '11_drink.jpg',
        spaceImg: '산울림.jpg',
    },
    {
        id: 12,
        drinkName: "Winter Soju with Strong Faith",
        drinkEnName: "Winter Soju",
        spaceName: 'Space for contemplation',
        spaceAddress: `Seuol 1F, Seongmun Building, 435 Dorim-ro, Yeongdeungpo-gu, Seoul`,
        content: `🥂 It's hard to find someone like you. You have the least common personality.\n
                🥂 Forest rather than trees! \n
                🥂 Favorite movies are fantasy!\n
                🥂 You are excellent empathy. You are very emotional\n\n
                Why don't you have a counter seat where you can talk with the chef and a space where you can empty your thoughts and spend time alone, and make a long, elaborate winter soju like your strong belief?`,
        recommendDrink: "Winter Soju",
        recommendSpace: 'Private Space',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/gDkfBFjS2kPI9xzOA_QssqGu66mjqg==',
        drinkImg: '12_drink.jpg',
        spaceImg: '사적공간.jpg',
    },
    {
        id: 13,
        drinkName: `Fruit-flavored Whiskey`,
        drinkEnName: "Glanfidic",
        spaceName: 'Classic Music Space',
        spaceAddress: `21 Dosan-daero, Gangnam-gu, 21 Dosan-daero, Gangnam-gu, Republic of Korea,`,
        content: `🥂 You are shy on the outside, but there's actually a flame of passion hidden inside. \n
                🥂 You thinks You are an outsider. Actually, You prefer being alone to living in a group!\n
                🥂 Favorite movies are fantasy!\n
                🥂 You are warm-hearted, so you get along well with children.\n\n
                If you have emotional and deep insight, if you love alcohol and music, how about a whiskey that you can enjoy with a little fruity scent in a space where you can enjoy classical appreciation?`,
        recommendDrink: 'Glennfidic',
        recommendSpace: 'Monktubach',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/XDA70sXfmcaj_WSomitVRjsrmHP_Cw==',
        drinkImg: '13_drink.jpg',
        spaceImg: '몽크투바흐.jpg',
    },
    {
        id: 14,
        drinkName: 'Cockets of various layers',
        drinkEnName: "Rosa Paradiso",
        spaceName: 'Classic space',
        spaceAddress:` 15 Wausan-ro, Mapo-gu, Seoul`,
        content: `🥂 You still hate the rules and regulations!\n
                🥂 Your life is my way! \n
                🥂 If you have something to do, start working just before the deadline.\n
                🥂 It is good to understand the humanization of perfectionism and everything. \n\n
                It's a classic space, but how about a cocktail with various layers that are not stereotyped? `,
        recommendDrink: 'Rosa Paradiso',
        recommendSpace: 'Desteal',
        relevantLink: 'http://naver.com',
        drinkImg: '14_drink.jpg',
        spaceImg: '디스틸.jpg',
    },
    {
        id: 15,
        drinkName: 'Sake',
        drinkEnName: "春霞 純米酒 赤ラベル",
        spaceName: 'Simple Space',
        spaceAddress: `1F, Seongmun Building, 435 Dorim-ro, Yeongdeungpo-gu, Seoul`,
        content: `🥂'You refuse to be normal! You have your own originality and creativity. And that's pretty good!\n
                🥂 You don't want to talk to you first, but You talk a lot about my favorite field.\n
                🥂 About 5.55 trillion ideas in your head
                🥂 So honest\n\n
                How about Sake where you can savor and drink little by little in a cozy and simple space where you can enjoy your thoughts alone?`,
        recommendDrink: 'Sake',
        recommendSpace: 'Private Space',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/gDkfBFjS2kPI9xzOA_QssqGu66mjqg==',
        drinkImg: '15_drink.jpg',
        spaceImg: '사적공간.jpg',
    },
]