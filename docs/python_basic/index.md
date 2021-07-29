---
title: 사전 준비
---

# 파이썬 설치하기

여기서는 본격적으로 전산물리학 과정을 시작하기에 앞서 파이썬(Python)을 사용하는 다양한 방법을 소개합니다. 교재의 예제는 파이썬 3.9를 기준으로 작성되었으며 적어도 3.6 이상의 파이썬 배포판을 사용해야 예제와 동일한 결과를 얻을 수 있습니다.

직접 설치를 수행하기 전에 파이썬을 사용하는 다양한 방법이 있으니 개발환경 구성을 미리 계획하고 사용합니다. 파이썬이나 배포판을 2개 이상 설치하는 경우 별도의 지식이 없으면 해석기의 충돌이 생겨 원하는 소스코드로 원하는 결과를 얻을 수 없게 됩니다.

교재는 윈도우 OS에서 파이썬3.9 앱을 설치하고 VSCode로 편집 및 실행하는 환경을 우선 가정하고 있습니다.

- 윈도우 운영체제
  - (추천) 아나콘다 배포판을 사용하고 스파이더(Spyder)로 실습
  - (추천: 교재의 기준) 윈도우 스토어의 파이썬 앱을 사용하고 VSCode로 실습
  - [파이참](https://www.jetbrains.com/ko-kr/pycharm/)을 사용하여 실습
- 리눅스 운영체제
  - 파이썬 기본판을 사용하고 VSCode로 실습
  - 아나콘다 배포판을 사용하고 스파이더(Spyder)로 실습
- 웹브라우저 기반: 개발용 컴퓨터를 사용하기 어렵다면 이런 방법도 있습니다
  - (추천) [구글 코렙](https://colab.research.google.com/)
  - (부분 유료) [구름 IDE](https://ide.goorm.io/)
  - (현재 클로즈 베타) [깃허브 코드스페이스](https://github.com/features/codespaces)

## 윈도우에서 파이썬 설치

[파이썬 재단 홈페이지](https://www.python.org/)에서 설치 클라이언트를 다운로드 받아 설치하거나 [마이크로소프트 스토어](https://www.microsoft.com/store/productId/9P7QFQMJRFP7)에서 파이썬 앱을 설치하는 방법이 있습니다.

## 리눅스 (우분투 기준)에서 파이썬 설치

```bash
apt update
apt install python3 python3-pip
```

우분투(Ubuntu) 등 리눅스에 설치하는 경우에는 제공하는 Python3의 버전이 다르니 설치 후 `python3 --version`을 확인해야 합니다.

## 아나콘다 설치

[아나콘다(Anaconda)](https://www.anaconda.com/)는 과학, 통계를 위한 파이썬 패키지가 포함되어 있는 배포판<sup>[1](#주석_1)</sup> 입니다. 또한, 완전히 컴파일된 패키지들을 아나콘다 클라우드에서 관리하고 있어서 설치과정에서 복잡한 작업들이 필요한 패키지도 손쉽게 설치할 수 있습니다.

[아나콘다 오픈소스(개인)판 다운로드 페이지](https://www.anaconda.com/products/individual)에 방문하여 설치파일을 내려받아서 설치할 수 있습니다. 아나콘다에는 처음 실행 시간이 조금 오래 걸리지만 강력한 디버깅 도구와 보기 편한 변수 관리 기능들이 포함되어 있는 스파이더(Spyder) 편집기가 포함되어 있습니다.

<a name="주석_1">1</a>: 여러 도구와 패키지 꾸러미를 한데 모은 것으로 파이썬도 여기에 포함됩니다. 아나콘다를 사용하기로 했다면 기존 파이썬을 삭제하는 것이 좋습니다.

## VSCode 설치

[비주얼 스큐디오 코드 (Visual Studio Code; VSCode)](https://code.visualstudio.com/) 다양한 언어를 지원하는 소스코드 편집기입니다. 홈페이지에서 설치파일을 내려받아 설치한 후 필요한 확장을 추가로 설치하여 개발환경을 구성합니다. 파이썬과 함께 설치되는 것이 아니니까 아나콘다나 파이썬을 따로 설치해야 합니다.

[Python 확장](https://marketplace.visualstudio.com/items?itemName=ms-python.python)은 가장 기본적인 파이썬 지원도구이며 편리한 개발을 돕는 강력한 도구를 탑재하고 있습니다.

## 구글 코랩 사용

[Google Colaboratory](https://colab.research.google.com/)은 구글이 제공하는 램, 메모리, GPU/TPU를 활용할 수 있는 [주피터 노트북(Jupyter Notebook)](https://jupyter.org/) 인터페이스입니다. 구글 계정이 있다면 누구나 손쉽게 활용할 수 있습니다.
