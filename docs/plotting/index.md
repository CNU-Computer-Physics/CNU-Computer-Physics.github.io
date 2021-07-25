---
title: 그래프 그래기
---

# 그래프 그리기

[matplotlib](https://matplotlib.org/)은 파이썬을 위한 시각화 도구입니다. 각종 그래프와 그림, 다이얼로그등을 다루는 것을 목적으로 합니다.

## matplotlib 설치하기

앞으로의 실습에 필요한 `matplotlib`과 `numpy`, `scipy`를 설치합니다.

PIP 설치

```bash
python3 -m pip install matplotlib numpy scipy
```

아나콘다(Anaconda) 설치: 보통은 기본으로 설치되어 있습니다.

```bash
conda install matplotlib numpy scipy
```

리눅스 설치

```bash
sudo apt install python3-matplotlib python3-numpy python3-scipy
```

## matplotlib.pyplot

`matplotlib`는 너무 복잡한 모듈과 설정을 가지고 있어서 수업에는 쉽고 단순한 인터페이스를 제공하는 `pyplot`모듈을 이용합니다.

```python
import matplotlib.pyplot as plt

x = [1, 2, 3]
y = [3, 1, 4]
plt.plot(x, y)
plt.show()
```

![코드 결과](assets/index_1.png)

위 예제를 실행하면 새로운 창에 그림과 같은 그래프를 포시합니다. 아나콘다(Anaconda)의 스파이더(Spyder) 편집기를 사용하거나 구글 코랩(colab) 등 주피터 노트북(Jupyter notebook)기반의 편집기에서 실행하는 경우 결과 표시 창에 그래프를 출력합니다.

[matplotlib](https://matplotlib.org/)의 예제(Example)과 튜토리얼(Tutorials) 문서들을 통해 다양한 그림을 작성하는 방법을 배울 수 있습니다.

## NumPy, SciPy

[NumPy](https://numpy.org/)는 수치해석 및 행렬연산을 위한 다양한 도구와 새로운 자료형 등을 제공합니다. [NumPy 설명서](https://numpy.org/doc/stable/)를 통해서 상세한 기능들을 살펴볼 수 있습니다. [SciPy](https://scipy.org/)는 과학을 위한 특수함수 및 통계 등을 제공합니다. [SciPy 설명서](https://docs.scipy.org/doc/scipy/reference/)를 통해서 상세한 설명을 살펴볼 수 있습니다.
