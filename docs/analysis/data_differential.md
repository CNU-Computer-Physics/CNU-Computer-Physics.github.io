---
title: 데이터의 미분
---

# 데이터를 미분하기

```python
"""데이터의 미분량
소스코드의 실행 디렉토리와 데이터파일의 디렉토리가 일치하도록 조정
"""
import numpy as np
import matplotlib.pyplot as plt

x = []
y = []

with open("input.csv", "r") as f:
    for line in f.readlines():
        _x, _y = [float(i) for i in line.split(" ")]
        x.append(_x)
        y.append(_y)


def g(x, y):
    new_x = []
    new_y = []
    for idx in range(len(x) - 1):
        new_x.append((x[idx] + x[idx + 1]) / 2)
        new_y.append((y[idx + 1] - y[idx]) / (x[idx + 1] - x[idx]))
    return new_x, new_y


if __name__ == "__main__":
    # 2차함수로 피팅한 x와 y
    fit = np.poly1d(np.polyfit(x, y, 2))
    fit_x = np.linspace(0, 1)
    fit_y = fit(fit_x)

    # 그래프 1: 원시데이터
    ax1 = plt.subplot(2, 1, 1)
    ax1.set_title("Original function")
    ax1.set_xlim(0, 1)
    ax1.set_ylim(-2, 2)
    ax1.axes.xaxis.set_ticklabels([])
    ax1.plot(fit_x, fit_y, "k--")
    ax1.scatter(x, y)
    ax1.grid(True)

    # 그래프 2: 미분한 데이터
    ax2 = plt.subplot(2, 1, 2)
    ax2.set_title("Differential function")
    ax2.set_xlim(0, 1)
    ax2.set_ylim(-20, 20)
    ax2.plot(fit_x[:-1], np.diff(fit_y) / (fit_x[1] - fit_x[0]), "k--")
    ax2.scatter(*g(x, y))
    ax2.grid(True)

    plt.show()
```

![코드 결과](../assets/data_differential_1.png)

앞서 다뤘던 함수의 도함수를 계산하는 요령으로 데이터의 미분량을 구하는 함수가 `g()`입니다. 그래프에는 점으로 표현되어 있는 값입니다.

이와는 별도로 데이터 피팅을 우선 수행하여 `fit_x`와 `fit_y`로도 계산하여 그래프에 검정색 실선으로 표시하였습니다.

우리가 현상이나 특성의 모델을 세우고 이를 확인하고자 할 때 도움이 되는 방법은 무엇일까요?

`np.diff()`는 정해진 축을 따라 변화량을 계산해서 배열로 돌려줍니다. 1차원 배열이 들어간 경우 순서상으로 이웃한 두 값 사이의 변화량을 출력하며 배열의 크기는 하나 줄어들게 됩니다.

- [diff 함수 참고자료](https://numpy.org/doc/stable/reference/generated/numpy.diff.html)
