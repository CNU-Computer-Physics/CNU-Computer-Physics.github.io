---
title: 함수의 그래프
---
# 함수의 그래프

## 예제: 사용자가 지정한 함수 그리기

$ \sin(x) $ 함수를 그래프로 그립니다.

```python
"""사용자가 지정한 함수 그리기
sin(x) 함수를 지정한 범위 [0, 3Pi]의 그래프로 그려서 출력하기
"""
import numpy as np
import matplotlib.pyplot as plt


def func(x):
    return np.sin(x)

if __name__ == "__main__":
    x = np.linspace(0, np.pi * 3)
    plt.plot(x, func(x))
    plt.grid(True)
    plt.show()

```

## 과제: 여러 종류의 함수를 그리기

다음 함수를 정해진 범위에 따라 그립니다.

- $ \cos(x) $, x는 [-$ \pi $, +2$ \pi $]
- $ 3x + 2 $, x는 [0, 5]
- $ \ln(x) $, x는 [0, 10]
- $ e^{x} $, x는 [-5, 5]

