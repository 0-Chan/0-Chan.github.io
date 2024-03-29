---
title: 클린코드 - 4. Comments
date: 2022-04-28 12:04:45
category: book
thumbnail: { thumbnailSrc }
draft: false
---

📙책 리뷰 : **Ch. 4 주석**<br>

## 🔍TL;DR (3줄 요약)

1. {주석은 필요악이다.}
2. {코드로 의도를 표현해라!}
3. {그럼에도 라이센스, 의미 밝히는, 경고, TO-DO 주석은 유익하다.}

## 🤔뭐가 기억에 남음? 헷갈린 건?

&nbsp;코드는 시간이 지날수록 바뀌고 진화한다.  
함께 붙어있던 주석은 그렇지 못하다. 따라서 주석은 거짓말 할 확률이 높아진다!

우리는 함수를 이용해 주석을 다는 상황을 피할 수 있다.

`if (turtle.coord.x > 20 && turtle.coord.y > 20)`<br>
// <u>turtle이 좌표를 벗어났을 때</u><br>
↑였던 모호한 코드를 소개하는 바보같은 주석을 ↓<br>
`if (turtle.isEscapedFromCoordinate())`로 말이다.

&nbsp;이외에 주절주절하는, 했던말 하는, 애매모호한 주석이 나쁘다는건 두말하면 잔소리다.  
그리고 내 버릇 중 하나인 **주석 처리 코드** 또한 아주 밉살스러운 짓 이란걸 알게 되었다.

왜냐하면 코드를 주석처리 해버리면 그 이후에,  
→ 다른 사람은 이유가 있어 남긴줄 앎🤷<br>
→ 나는 까먹음🐔  
이 2개 콤보로 영원히 그 자리에 남아버리기 때문이다.

따라서 우린 git이 대신 역할을 하게 해야한다.
앞으로는 그냥 믿고 삭제하자. 꼭!  
<br>
`/* 0-Chan이 추가함 */` : 이딴 주석도 nono<br>
`// Actions` : 배너 주석은 필요할 때만 사용

## 읽은 소감

&nbsp;이번 chapter를 읽으며 혼자서 피식피식 많이 웃었다. 나쁜 코드를 감추고 싶어 주석을 써제끼던 내 모습이 떠올랐기 때문이다.  
<br>
처음에 프로그래밍을 배울 때 "주석은 가능하면 쓰지 말아라."라고 듣고 은연 중에 나쁜건 알고는 있었다.  
하지만 도통 설명할 수가 없었는데, 책을 통해 정확히 왜 뭐가 나쁜건지 알 수 있어 좋았다.

<br><br> #노마드코더 #북클럽 #노개북<br>
최종 작성일 : 2022-04-30
