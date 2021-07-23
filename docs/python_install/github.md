---
title: 실습 저장소
---

# 실습용 깃허브 저장소 이용하기

[깃허브(Github)](https://github.com/)는 소스코드의 버전관리를 위한 공개/비공개 저장소를 제공합니다.

## Git 설치

**윈도우:**

버전 제어 시스템을 위한 소프트웨어인 [깃(Git)](https://git-scm.com/)을 내려받아 설치합니다. 깃을 설치한 후에 [소스트리(Sourcetree)](https://www.sourcetreeapp.com/)등 전문적인 버전관리 프로그램을 사용하지 않는다면 마이크로소프트의 [윈도우 터미널(Windows Terminal)](https://www.microsoft.com/store/productId/9N0DX20HK701) 앱을 사용하는 것이 여러모로 편리합니다.

**리눅스(우분투):**

```bash
sudo apt update
sudo apt install git
```

## 실습 저장소 복제

편한 곳에 새로운 디렉토리를 만들어 저장소를 복제합니다. 충돌 없이 저장소를 복제하려면 파일이 들어있지 않은 폴더를 하나 생성하는 것이 좋습니다. 윈도우 사용자의 경우 `c:/Github`, 리눅스 사용자의 경우 `mkdir ~/Github`와 같은 방식으로 디렉토리를 만듭니다.

새로 만든 디렉토리로 이동하여 터미널을 실행합니다. 윈도우 OS에서는 파일탐색기로 연 폴더의 바닥에서 <kbd>Shifht</kbd> + <kbd>마우스 오른쪽 버튼</kbd>을 눌러 "여기에 파워쉘 창 열기" 메뉴를 선택하거나 앞서 윈도우 터미널 앱을 설치했다면 <kbd>마우스 오른쪽 버튼</kbd>으로 "Open in Windows Terminal"를 선택할 수 있습니다. 리눅스의 경우에는 터미널에서 `cd ~/Github`등으로 이동합니다.

```bash
git clone https://github.com/CNU-Computer-Physics/Example-and-Practice
```

으로 간단하게 터미널을 복제할 수 있습니다.

## 내 저장소로 포크

저장소를 포크(Fork)하여 내 소유로 만들면 개인 성과로 관리하기도 편하고 예제를 변경하여 새로운 소스코드로 만들어 관힐할 수 있습니다. [예제 깃허브 홈페이지](https://github.com/CNU-Computer-Physics/Example-and-Practice)에 방문하여 오른쪽의 "Fork" 버튼을 클릭하면 내 소유의 예제 저장소를 만들 수 있습니다. 포크한 저장소는 `https://github.com/{내 깃허브 ID}/Example-and-Practice`에 위치하며 개인 저장소에 있기엔 이름이 애매하다 싶으면 저장소 페이지 상단에서 "Settings" 메뉴를 눌러 저장소의 이름을 바꿀 수 있습니다. 저장소의 이름을 바꾸면 URL도 바뀌니 복제할 때 주의해야 합니다.

저장소를 포크했다면 내 컴퓨터의 저장소용 디렉토리에서

```bash
git clone https://github.com/{내 깃허브 ID}/{포크한 저장소의 이름}
```

과 같은 방식으로 복제할 수 있습니다.

## 포크한 저장소 업데이트

예제 저장소가 업데이트 되었을 때 이것을 내 저장소에 적용하고 싶다면 다음 절차를 따릅니다.

- 복제한 저장소의 디렉토리(ex. `Example-and-Practice/`)안에서 터미널 열기
- 원본 리모트 추가: `git remote add upstream https://github.com/CNU-Computer-Physics/Example-and-Practice`
- 원본으로부터 패치: `git fetch upstream`
- 원본과 내 저장소를 병합: `git merge upstream/main`
- 내 저장소로 밀어넣기: `git push`
