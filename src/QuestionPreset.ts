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
    {id: 0, question: '친구들과 함께 새로운 바에 가서 당신이 주문할 술은?',
        firstOption: '저번에 마셨던 거 맛있던데! 괜히 새로운 거 도전했다가 안 맞을 수 있으니 안전하게 좋아하는 술로!',
        secondOption: '오늘은 뭔가 저게 맛있을 것 같아, 새롭게 도전!',
        onClickFirstOption: onClickS,
        onClickSecondOption: onClickN
    },
    {id: 1, question: '어제 당신이 다녀온 바에 대해 친구가 물었다. 당신의 대답은,',
        firstOption: '웨이팅 30분 정도 있었는데, 테이블이 많았는데 너무 좁지 않고 술 종류가 많아서 좋았어!',
        secondOption: '분위기가 좋았고... 술이 맛있었고... 직원분들이 친절했어',
        onClickFirstOption: onClickS,
        onClickSecondOption: onClickN
    },
    {id: 2, question: '당신의 생일 날, 멋진 저녁과 술을 함께 할 공간을 찾고 있다.',
        firstOption: '적당히 여유있는 서울숲, 친구들과 프라이빗하게 있을 수 있는 곳으로!',
        secondOption: '사람이 복작거리는 홍대 거리에서 그 공간의 모든 사람들이 나를 위해 생일 축하 노래 불러줄 수 있는 곳으로!',
        onClickFirstOption: onClickI,
        onClickSecondOption: onClickE
    },
    {id: 3, question: '기분 좋은 주말, 밀린 집안일을 하며 혼자 집에 있는데 친구에게 한 잔하자는 연락이 왔다.',
        firstOption: '갑자기? 왜? 일정에 없던 일인데.. 오늘은 집안일을 하기로 했으니 아쉽지만 다음에 약속 정하자',
        secondOption: '너무 좋지! 오늘 집안일을 해야하긴 하지만 그래도 일단 나갈게!',
        onClickFirstOption: onClickJ,
        onClickSecondOption: onClickP
    },
    {id: 4, question: '근사한 바에 갔을 때, 술 한 잔을 추천 받고 싶다. 더 끌리는 추천은?',
        firstOption: '끝 맛이 달달하신 것을 좋아하시고, 도수가 약한 것을 좋아하시니 이 술은 어떠세요?',
        secondOption: '오늘 날씨도 화창하고 나오는 음악에 맞춰 낭만적인 분위기의 이 술은 어떠세요?',
        onClickFirstOption: onClickT,
        onClickSecondOption: onClickF
    },
    {id: 5, question: '이번 주말, 친구와 함께 한 잔 하기로 한 당신',
        firstOption: '먹고 싶은 메뉴에 맞춰서 만나기로 한 장소의 식당들 다 찾아서 리스트 만들어봐야지!',
        secondOption: '핫플 몇 군데 있던데 돌아다니다가 끌리는 곳으로 들어가야겠다!',
        onClickFirstOption: onClickJ,
        onClickSecondOption: onClickP
    },
    {id: 6, question: '친구와 술 한 잔 하고 있는데, 갑자기 불이 꺼졌다',
        firstOption: '너무 어두워! 갑자기 뭔가 튀어나올 것 같아! 설마 누가 나한테 서프라이즈 파티해주는 건 아니겠지?',
        secondOption: '불이 왜 꺼졌지? 뭐지? 정전인가?',
        onClickFirstOption: onClickN,
        onClickSecondOption: onClickS
    },
    {id: 7, question: '친구들과 함께 오랜만에 만나서 한 잔 하고 집에 돌아오면,',
        firstOption: '너무 즐거웠다! 충전 완료! 혼자 집에 있으니 너무 쓸쓸하다ㅠ',
        secondOption: '너무 즐거웠다! 이제 집에서 혼자 충전해야지, 너무 좋아!',
        onClickFirstOption: onClickE,
        onClickSecondOption: onClickI
    },
    {id: 8, question: '기대에 부풀에 있던 오랜만의 술 약속, 친구가 조금 늦어버렸다. 친구에게 받고 싶은 사과는?',
        firstOption: '합당한 이유와 간단한 사과면 충분하지!',
        secondOption: '변명 같은 거 하지 말고 정말 진심으로 사과하고 미안해하면 괜찮아!',
        onClickFirstOption: onClickT,
        onClickSecondOption: onClickF
    },
    {id: 9, question: '퇴근하고 한 잔 해야겠어, 안주는 뭐가 좋을까?',
        firstOption:  '가다가 맛있어 보이는 거 사가야겠다!',
        secondOption: '저번에 먹었던 그 가게 아마 7시에 문 닫을 테니까 6시에 나가서 역 가는 길에 사가야겠다!',
        onClickFirstOption: onClickP,
        onClickSecondOption: onClickJ
    },
    {id: 10, question: '친구들과 오늘 아주 멋진 저녁을 하기로 했다. 어디로 가면 좋을까?',
        firstOption: '일단 가기에 편리해야하고, 분위기보다는 맛과 가성비가 최고지!',
        secondOption:'무조건 인스타 감성 한 스푼! 분위기가 99% 아니겠어?',
        onClickFirstOption: onClickT,
        onClickSecondOption: onClickF

    },
    {id: 11, question: '오늘 할 일을 전부 다 마치고 술이 땡길 때,',
        firstOption: '아늑한 나의 집에 가서 넷플릭스보며 혼맥해야지!',
        secondOption:'친구들 모여서 다같이 치맥파티!',
        onClickFirstOption: onClickI,
        onClickSecondOption: onClickE

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
        spaceName: '사교적인 공간',
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
        spaceName: '자유롭고 쾌활한 공간',
        spaceAddress: 'ᑯ 서울 중구 창경궁로1길 38 4층',
        content: `🥂 즐겁다! 갑자기 흥얼거리면 즉흥적으로 춤을 추는 사람이 있다? \n그것은 바로 당신. 천성이 연예인 기질이다. \n
        🥂 다른 사람과는 비교할 수 없는 거부할 수 없는 매력을 지니고 있다. 다른 사람들을 위로하고 용기를 북돋아 주는 데에 원탑 \n
        🥂 미래를 위해 오늘을 산다? 아니, 나는 오늘을 즐길거야! 하고 싶은 일 다 하고 살아야 그게 인생이지!\n
        🥂 발등이 불이 떨어져서 타오를 때쯤 할 일을 행동에 옮기곤 한다. 그러다가 해야할 일 놓칠 때도..\n 
        🥂 싫고 좋은 사람이 분명! 근데 그게 얼굴에 다 티난다.\n\n
        스포트라이트를 즐기는 당신처럼 마치 파리에 온 듯한 밝고 쾌활한 공간에서 기분 좋은 산미가 함께하는 와인 한 잔 어떠세요?`,
        recommendDrink: '내추럴 오렌지',
        recommendSpace: '원형들',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/-uBDebXfqJISCwfUnjwrjpSQ5UGF_g==',
        drinkImg: '1_drink.jpeg',
        spaceImg: '원형들.jpg',
    },
    {
        id: 2,
        drinkName: '뛰어난 풍미의 위스키',
        drinkEnName: "Cuvee Cask",
        spaceName: `관리가 잘 된\n 깔끔한 공간`,
        spaceAddress: 'ᑯ 서울 서초구 반포대로28길 56-3 지하 1층',
        content: `
        🥂 당신은 본투비 리더! 감정보다는 책임감을 가지고 조직을 이끌어 가는 완벽주의자 워커홀릭\n
        🥂 계획을 세우려면 나처럼! 어딘가를 간다? 바로 가장 빠르고 효율적인 루트를 찾은 다음 단계적으로 계획을 세운다. 그게 어긋날 때 당신의 마음 속에서 은근한 짜증이 솟구친다.\n
        🥂 '그래서 결론이 뭔데?', '그래서 누가 뭘 어떻게 잘못했는데?' 무조건 다 따져내고 알아내서 명확히 해야 마음의 안정이 찾아온다. \n
        🥂 엄청난 고집이 있지만, 논리적으로 이해가 가면 오케이, 더 이상 고집을 피우지 않는다. \n\n
        천장 높이까지 깔끔하게 정리되어 있는 공간에서 깊고 복합적인 풍미를 구체적으로 느낄 수 있는 위스키 한 잔 어떠세요?`,
        recommendDrink: '뀌베 캐스크',
        recommendSpace: '코트룸',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/py7d0or5zIXFPaCJaMLR2P03D_Yo_Q==',
        drinkImg: '2_drink.jpg',
        spaceImg: '코트룸.jpg',
    },
    {
        id: 3,
        drinkName: '쿨하고 상큼한 와인',
        drinkEnName: 'Kuehling Gillot \nNierstein Riesling Trocken',
        spaceName: `날씨 좋고 모험적인\n야외의 공간`,
        spaceAddress: 'ᑯ 서울특별시 용산구 한강대로40길 19-8 1층',
        content: `🥂 여러 사람이 모인 행사에서 당신은 홍길동, 이리 번쩍 저리 번쩍 어딜가나 당신이 있다. 친화력 최강 인싸! \n
        🥂 뒤끝 없이 쿨한 당신, 빙빙 돌려말하고 추상적으로 말하는 것보다는 돌직구로 말하는 게 좋다.\n
        🥂 YOLO! 이게 바로 당신의 삶. 언제나 자유를 갈망하고 즉흥적인 삶이 좋다. 남의 눈치를 왜 봐? 내가 하고 싶은 거 하고 살아야지!\n
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
        drinkName: `정의로운 임금의 술\n 왕주`,
        drinkEnName: "King's Drink",
        spaceName: `정겨운 이야기가 \n가득한 공간`,
        spaceAddress: 'ᑯ 서울 마포구 서강로9길 60',
        content: `🥂 '정'의 인간화! 당신의 기쁨이 곧 나의 기쁨! \n정이 많고, 언제나 사람들을 알고 싶어 한다. 공감도 매우 쉬운, 당신은 리액션 부자! \n
        🥂 버릴 거 하나도 없는데? 전부 다 소중한 추억들인걸요? 모든 일에 의미 부여하고 소중한 추억들 절대 못 잃는다.\n
        🥂 남에게 싫은 소리했다가도 밤새 끙끙거리며 후회하고, 상대방은 신경도 안 쓰지만 혼자 미안해서 몰래 기프티콘 투척하는 공감쟁이 배려쟁이 평화주의자  \n
        🥂 내 연인에게 헌신하는 스타일. 바로 다 맞춰준다! 상대방에게 잘 맞춰주지만, 상처를 받으면 굉장히 오래간다. \n\n
        카리스마와 충만한 열정을 지닌 당신처럼 열정과 정겨운 이야기가 가득한 공간에서 조선 왕실에서 궁중 비법으로 전수된 임금이 마시던 왕주 어떠세요?`,
        recommendDrink: '왕주',
        recommendSpace: '산울림 1992',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/FqyIq7Hf57IPElUnAHOvxfAMiaDbMQ==',
        drinkImg: '4_drink.jpg',
        spaceImg: '산울림.jpg',
    },
    {
        id: 5,
        drinkName: `달콤한 애정 가득\n칵테일`,
        drinkEnName: "Banana",
        spaceName: `웃음이 가득한\n파리를 닮은 공간`,
        spaceAddress: 'ᑯ 서울 중구 창경궁로1길 38 4층',
        content: `🥂 당신과 같은 사람들이 모여있다면, 지구는 애정으로 폭발해버릴지도 모른다.\n 아기자기 해피바이러스 인싸!\n
        🥂 당신의 프라임 세포는 감성세포! 남이 울면 같이 울고 남이 기쁘면 나도 기쁘다. 사람들을 너무 알고 싶고, 전부 다 퍼주고 싶고, 공감도 너무너무 쉽다. 그래서 감정이 가끔 롤러코스터를 타기도 하는 당신.\n
        🥂 반복적인 거, 계획 세우는 거, 구속받는 거 정말 딱 질색! 좋아하는 사람에게 좋아한다고 말하는 거 참기, 궁금한 거 물어보는 거 참기, 새로운 사람에게 말 안 걸고 가만히 있는 거 참기 절대 못 참지!\n
        🥂 내일의 할 일보다는 당장 지금의 행복이 중요! 과제는 내일의 내가 알아서 하고, 우선은 놀자! \n\n
        활발하면서도 인정이 많은 당신, 마치 파리에 온 듯하게 자유롭게 세상을 바라볼 수 있는 넓은 통 유리창이 함께하는 공간에서 달콤한 칵테일 한 잔 어떠세요?`,
        recommendDrink: '바나나',
        recommendSpace: '원형들',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/-uBDebXfqJISCwfUnjwrjpSQ5UGF_g==',
        drinkImg: '5_drink.jpeg',
        spaceImg: '원형들.jpg',
    },
    {
        id: 6,
        drinkName: `대담하고 묵직한 칵테일`,
        drinkEnName: "Mr. Carmen Negroni",
        spaceName: `리더의 정석, '킹스맨'의 공간`,
        spaceAddress: 'ᑯ 서울 마포구 와우산로15길',
        content: `🥂 리더의 정석. 리더 그 자체. 학창 시절에 꼭 한 자리하고 팀플에서 운전 기사가 되는 유노윤호\n근데 이거 다 나서는 거 좋아서 그런 게 아니라 남이 하는 거 마음에 안 들어서 그런 거 아시죠?\n 
        🥂 게임을 심심해서 한다고? 게임은 무조건 이겨야지! 이겨야 직성이 풀리는 인정사정 없는 스타일이다. \n
        🥂 좋아하는 사람에게는 굉장히 부드럽지만, 각자의 사생활도 중요하게 생각하는 타입. 똑 부러지고 주도적인 모습을 보여주는 사람에게 당신은 이미 끌리고 있다!\n
        🥂 고집이 세지만, 정당하고 합리적인 비판은 잘 수용한다. 하지만 감성팔이는 절대 안 먹히지! \n\n
        당신처럼 카리스마있는 리더 \'킹스맨\'이 있던 공간에서 묵직하고 강한 바디감의 칵테일 어떠세요?`,
        recommendDrink: '미스터 카르멘 네그로니',
        recommendSpace: '디스틸',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/_k8MREmOC2NgdqVAm67SDgIud2DZaQ==',
        drinkImg: '6_drink.jpeg',
        spaceImg: '디스틸.jpg',
    },
    {
        id: 7,
        drinkName: `개성있는 맛의 와인`,
        drinkEnName: `Sassy \nCidre Rose`,
        spaceName: `일반적이지 않은\n독특한 공간`,
        spaceAddress: 'ᑯ 서울 종로구 대명1길 16-4',
        content:  `🥂 당신은 귀여운 관종! 또라이 같다는 말.. 어쩌면 기분이 좋을지도?\n
        🥂 본인 생각과 다른 것 같다면 일단 묻고 본다. '왜?', '아니 근데', '엥?' 정신 차려보니 당신은 그들을 열심히 설득하고 있다.\n
        🥂 인스타 스토리는 올리고 싶은 거 다 올리는데 또 남들 다 하는 챌린지 같은 건 절대 안 한다.\n
        🥂 은근히 특이한 사람에게 끌린다. 감정을 질질 끌기보다는 쿨하게 받아치는 모습에 당신은 이미 빠져들고 있다!\n\n
        일반적인 바와는 느낌이 다른 독특한 분위기의 공간에서, 개성있게 톡톡 튀는 와인 한 잔 어떠세요?
        `,
        recommendDrink: '쎄시 시드로 로제',
        recommendSpace: '독일주택',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/EzIsFu_VlUOFRcZ0SNjuagQ1kO0iZA==',
        drinkImg: '7_1_drink.jpg',
        spaceImg: '독일주택.jpg',
    },
    {
        id: 8,
        drinkName: '호불호 없는 맥주',
        drinkEnName: "Triporteur Belgian Oak",
        spaceName: '적당히 시끄러운 공간',
        spaceAddress: 'ᑯ 서울 종로구 동숭3길 16',
        content: `🥂 자애로움을 인간화하면 당신, 그냥 배려가 성격이다! \n
        🥂 가끔은 생각이 너무 많을 때가 있다. 속에서는 오만 생각과 걱정이 춤추는데 남들이 보기에는 잔잔한 호수 같다.\n
        🥂 마음을 열기까지 시간이 굉장히 오래 걸리며, 연애도 아주 천천히 따뜻해지는 스타일. 본인처럼 화 잘 안 내고 착한 사람이 좋다.\n
        🥂 감정 표현이 너무 어렵다. 그런데 이것 역시 상대방에 대한 배려일 수도 있다. 태어나서 '아무거나'라는 대답을 가장 많이 했을지도..?\n\n
        너무 조용하지도, 너무 시끄럽지도 않은, 적당히 조용하고 적당히 시끄러운 공간에서 호불호 없이 마실 수 있는 달달한 맥주 한 잔 어떠세요?`,
        recommendDrink: '트리포터 벨지안 오크',
        recommendSpace: '수도원',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/XbTN1J_aI4UwxBvFuXt7yMTJ7AKYIQ',
        drinkImg: '8_drink.jpg',
        spaceImg: '수도원.jpg',
    },
    {
        id: 9,
        drinkName: `처음 먹는 사람들에게도 적당한\n 부드럽고 달콤한 럼`,
        drinkEnName: `Cadenhead's Classic Rum`,
        spaceName: `프라이빗하고\n트렌디한 공간`,
        spaceAddress: 'ᑯ 서울 마포구 성미산로29안길 26 지하 1층',
        content: `🥂 이런 사람과 싸운다면, 그건 상대방의 문제일 경우 99%, 당신은 평화가 좋다. \n
        🥂 사람 많은 곳은 딱 질색, 혼자 있는 것이 좋다. 침대와 환상의 짝궁이다! 인생의 대부분의 시간을 침대 위에서 보내는 사람 1등\n
        🥂 관심 받는 게 싫은데, 관심 받는 게 좋다. 전부 귀찮고 게으른데, 또 완벽주의다. 배려는 인생의 모토지만, 개인주의. 알 수 없는 당신!\n
        🥂 과묵하고 까칠해보일 수 있지만, 사실 속은 물렁물렁 말랑카우\n\n
        사람 많은 곳은 싫어하지만 다양한 아이디어와 감각적인 당신을 위한 프라이빗하고 트렌디한 공간에서, 부드럽고 달콤한 럼 한 잔으로 영감을 받아가는 건 어떠세요?`,
        recommendDrink: '카덴헤드 클래식',
        recommendSpace: 'Bar Rough',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/Brp-Se1ap-KuPaWbks3bOz_bNJw4NQ==',
        drinkImg: '9_1_drink.jpg',
        spaceImg: '바러프.jpg',
    },
    {
        id: 10,
        drinkName: '담백하고 익숙한 막걸리',
        drinkEnName: `Song Myungseop\n Rice Wine`,
        content: `🥂 '혼자서도 잘해요' 간섭은 철저히 사양하는 계획쟁이 당신\n
        🥂 허튼 짓 하지마라. 허튼 짓을 무엇보다 싫어하며, 다른 사람들이 할 일 들을 빨리 인지하여 실행에 옮기기를 원한다. 
        그래서 당신도 해야된다 생각이 들면 바로 한다. 한 달 남은 과제? 당장 해야지.\n
        🥂 변화는 싫고 체계적인게 좋아! 새로운 도전보다는 늘 먹던 게 좋다.\n
        🥂 연애는 어려워ㅠ 사실적인 것이 좋고 감정 표현에 서툴러 연인과도 교류하기가 어려울 수 있다. 대놓고 다정한 사람에게 당신은 이미 푹 빠져버렸다.\n\n
        차분하고 조용한 공간에서 담백한 막걸리 한 잔 어떠세요?`,
        spaceName: '차분하고 조용한 공간',
        spaceAddress: 'ᑯ 서울 강남구 언주로168길 22 1층',
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
        content: `🥂 인생은 마이웨이! 극한의 효율을 사랑하는 당신, 노력에도, 감정에도 효율은 필수다!
        🥂 '와 진짜 영혼 없다', '다가가기 어려워 보인다'는 말을 자주 듣는다. 하지만 알고 보면 세상 친절한 사람!\n
        🥂 당신은 많이 생각하는 게 너무 싫다! 태생부터 '그런가 보다'를 말버릇처럼 달고 산다!\n
        🥂 짤 보는 거 너무너무 재미있어! 짤 보는 거 좋아한다. \n\n
        주변을 탐색하기 좋아하는 당신에게 딱 맞는 혼자만의 공간에서, 새로운 하이볼 한 잔 어떠세요?`,
        recommendDrink: '조선 하이볼',
        recommendSpace: '산울림 1992',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/FqyIq7Hf57IPElUnAHOvxfAMiaDbMQ==',
        drinkImg: '11_drink.jpg',
        spaceImg: '산울림.jpg',
    },
    {
        id: 12,
        drinkName: `부드럽고 달콤한 흑맥주`,
        drinkEnName: "Rasputin Comfana",
        spaceName: `감수성 가득\n봄을 맛볼 수 있는 공간`,
        spaceAddress: 'ᑯ 서울 영등포구 도림로 435 성문빌딩 1층',
        content: `🥂 우리 함께 만들어가요🎵 아름다운 세상~🎶 다함께 행복한 세상을 꿈꾸는 배려쟁이\n
        🥂 조용한 게 좋은데, 또 한 방울의 관심은 마다하지 않는다. 아니, 오히려 마음 한 구석에서는 원하고 있다!\n
        🥂 행동하기 전 마음속으로 시뮬레이션 100만번\n
        🥂 그러나 당신은 당신만의 선이 있다. 아무리 친해도 넘어서는 안되는 선!\n
        🥂 공감 능력이 매우 뛰어나다. 당신의 프라임 세포는 감성세포! 밤이 되면 감수성이 폭발한다\n\n
        주방장과 함께 이야기를 나눌 수 있는 카운터석과 생각을 비우고 혼자만의 시간을 가질 수 있는 사색의 공간에서, 당신의 강한 신념처럼 오랜 시간 공들여 만들어지는 겨울소주 어떠세요?`,
        recommendDrink: '라스푸틴 꼼파냐',
        recommendSpace: '독일주택',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/EzIsFu_VlUOFRcZ0SNjuagQ1kO0iZA==',
        drinkImg: '12_drink.jpg',
        spaceImg: '독일주택.jpg',
    },
    {
        id: 13,
        drinkName: '계절마다 스토리가 다른 진토닉',
        drinkEnName: "Z & T",
        spaceName: `햇살이 들어오는 한낮,\n바텐더 4명의 철학이 담긴 공간`,
        spaceAddress: 'ᑯ 서울 강남구 도산대로55길 26',
        content: `🥂 겉으로는 수줍음쟁이지만, 사실 안에는 열정의 불꽃이 숨어져 있는 당신! 영화 '인사이드아웃'은 어떠신가요?\n
        🥂 친구에게 답장이 안 올 때 잘못 보냈나 고민하기 부문 1등, 할 말 있다는 이야기 들었을 때 인생 한 번 1회독 해보기 1등\n
        🥂 당신은 프로 과몰입러! 조금 생각하면 소설 한 편도 뚝딱 나온다. 드라마 OST 들으며 가끔 오열하곤 한다.\n
        🥂 공감 능력이 뛰어나고 다정하다. 마음이 따뜻해서 아이들과도 잘 지낸다. 그러나 낯선 이들에게는 의심병이 슬금슬금!\n\n 
        감성적이고 깊은 통찰력을 지닌 당신, 술과 음악을 사랑한다면 클래식 감상회를 즐길 수 있는 공간에서 약간의 과일향과 함께 즐길 수 있는 위스키 한 잔 어떠세요?`,
        recommendDrink: 'Z & T(진토닉)',
        recommendSpace: '제스트',
        relevantLink: 'https://stibee.com/api/v1.0/emails/share/s5buI9j4NOL1kq7Cz6QqawwGvFa4Yg==',
        drinkImg: '13_1_drink.jpg',
        spaceImg: '제스트.jpg',
    },
    {
        id: 14,
        drinkName: '색다르고\n다양한 레이어의 칵테일',
        drinkEnName: "Rosa Paradiso",
        spaceName: `완벽한 바의 분위기를\n담고 있는 공간`,
        spaceAddress: 'ᑯ 서울 마포구 와우산로15길',
        content: `
        🥂 완벽주의의 인간화, 모든 것을 전부 다 이해해야 속이 시원한 당신. 인생은 마이웨이! 리액션 페르소나는 필수!\n
        🥂 아 진짜? 하는데 사실 마음 속으로는 공감이 전혀 안되고 있다. 진짜 친구에게는 공감보단 문제 해결 방법으로 애정을 표현한다.\n
        🥂 예술의 숨겨진 해석이 너무 좋아! 영화보고 난 뒤 검색으로 숨겨진 해석과 색다른 해설을 보며 감탄하곤 한다.  \n
        🥂 남 눈치같은 거 안 보지! 남들에게 관심없지! 그 관심과 눈치 내가 좋아하는 사람에게 몰빵하겠어!\n\n
        완벽하게 바의 분위기를 담고 있는 공간에서, 혼자 시간을 보내며 색다르고 다양한 레이어의 칵테일 한 잔 어떠세요? `,
        recommendDrink: '로사 파라디소',
        recommendSpace: '디스틸',
        relevantLink: 'http://naver.com',
        drinkImg: '14_drink.jpg',
        spaceImg: '디스틸.jpg',
    },
    {
        id: 15,
        drinkName: `독창적인 특색을 가지는\n사케`,
        drinkEnName: "春霞 純米酒 赤ラベル",
        spaceName: '사적이고 소박한 공간',
        spaceAddress: 'ᑯ 서울 영등포구 도림로 435 성문빌딩 1층',
        content: `🥂 '평범함을 거부한다! 당신은 당신만의 독창성과 창의력을 가진다. 그리고 그것이 꽤 좋다..!\n
        🥂 먼저 대화하기는 싫지만, 당신이 좋아하는 분야에 대해서는 말을 많이 한다. 100분 토론 완전 가능.\n
        🥂 머릿속에 아이디어가 대략 오조 오억 오천 오백만개\n
        🥂 논리를 사랑한다. 논리 없는 무지랭이들을 보면 당신도 모르게 화가 치민다. \n
        🥂 웬만하면 연락 잘 안함. 웬만하면 상처 안 받음. 웬만하면 관심 없음. 웬만하면 신경 안 씀.\n\n
        혼자 사색을 즐길 수 있는 아늑하고 소박한 공간에서 조금씩 음미하며 사케만의 독창적인 특색을 느껴보는 것은 어떠세요?`,
        recommendDrink: '하루가스미 준마이 레드라벨 ',
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