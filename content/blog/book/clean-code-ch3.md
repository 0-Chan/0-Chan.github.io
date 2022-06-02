---
title: 클린코드 - 3. Function
date: 2022-04-27 08:04:12
category: book
thumbnail: { thumbnailSrc }
draft: false
---

📙책 리뷰 : **Ch. 3 함수**<br>

## 🔍TL;DR (3줄 요약)

1. {함수는 무조건 1가지 일을 해야 한다. 그 한 가지를 잘해야 한다.}
2. {추상화 수준을 섞어서 쓰지 말자.}
3. {함수는 글짓기처럼 계속 고쳐서 다듬으며 짠다.}

## 🤔뭐가 기억에 남음? 헷갈린 건?

&nbsp;저자가 반복해서 강조하는게 바로 _함수는 한 가지 일을 해야 한다._ 였다. 얼마나 중요한지 이전에 line 수가 2~3줄로 이루어진 함수를 보았다며 아주 극찬한다.

이렇듯 각각 함수가 이야기를 하나를 명백히 표현하는 게 중요하다. 또 '추상화 수준'이라는 단어가 나온다.

&nbsp;추상화라는 개념의 망령이 날 계속 괴롭히는 느낌인데... 쉽게 설명하자면

추상화 수준 上 : `getHtml()`<br>
추상화 수준 中 : `PathParser.render(pagepath)`<br>
추상화 수준 下 : `.append("\n")`
<br><br>
위의 다양한 수준을 한 함수에 섞어 쓴다면 코드를 읽는 사람이 매우 혼란스러울 것이다.  
이때 추상화 수준을 유지하는 데에 도움을 주는 게 **위에서 아래로 읽기**이다.
<br><br>
3장에서 주장하는 Do's와 Don'ts를 정리해 보았다.

✅<br>

- 작게 더 작게, 1개만 잘하도록!
- 추상화 수준은 단일하게.
- 위→아래로 읽히게끔.
- 서술적인 이름. : (ex. `setMotionControl()`)
- 명령과 조회를 분리. : (`attrExists()`, `setAttr()`)

🚫<br>

- switch 문은 피하자.
- 함수 argument는 가능한 한 적게. : (Best=인수 0개)
- 부수 효과를 피하자! : (`checkPassword()`는 비밀번호만 체크하기)
- Argument로 출력하지 말자. : (`this`를 쓰자)
- try/catch는 모양을 망친다. : (함수로 빼서 쓰자)
- 오류코드는 절대 아니야 차라리 예외를 쓰자.
- **반복하지 말아라!**

## 읽은 소감

&nbsp;아무튼 위 규칙을 따르면 좋은 이름의 짧고 체계적인 함수가 나올 것이다. 그런데 함수를 잘 쓰는것도 중요하지만, 프로그래머에게 중요한 게 또 있다.  
<br>
바로 시스템을 구현체로만 볼 게 아니라 시스템을 **'하나의 풀어갈 이야기로 봐야 한다'**라는 것이다!

<br><br><br> #노마드코더 #북클럽 #노개북<br>
최종 작성일 : 2022-04-27