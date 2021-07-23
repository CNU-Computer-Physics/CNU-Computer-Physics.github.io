---
title: 데이터의 미분
---

# 데이터를 미분하기

```python
"""데이터의 미분량
소스코드의 실행 디렉토리와 데이터파일의 디렉토리가 일치하도록 조정
"""
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
    ax1 = plt.subplot(2, 1, 1)
    ax1.set_title("Original function")
    ax1.set_xlim(0, 1)
    ax1.set_ylim(-2, 2)
    ax1.axes.xaxis.set_ticklabels([])
    ax1.scatter(x, y)
    ax1.grid(True)
    ax2 = plt.subplot(2, 1, 2)
    ax2.set_title("Differential function")
    ax2.set_xlim(0, 1)
    ax2.set_ylim(-20, 20)
    ax2.scatter(*g(x, y))
    ax2.grid(True)
    plt.show()
```

![코드 결과](../assets/data_differential_1.png)
