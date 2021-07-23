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

`np.linspace(0, np.pi * 3)`은 0부터 $ 3\pi $사이 숫자를 일정 간격으로 디폴트 값 50개 만들어 numpy의 array 자료형으로 출력합니다.
(추가설명) `np.linspace(xmin, xmax, ndata)` 는 xmin 부터 xmax 사이 숫자를 일정 간격으로 ndata 개수만큼 생성하여 numpy 의 array 자료형으로 출력합니다.

`plt.grid(True)`를 사용하여 그래프에 격자 보조선을 넣을 수 있습니다. 위 예제를 실행하면 아래 그래프를 표시합니다.

![코드 결과](../assets/function_plot_1.png)

## 과제: 여러 종류의 함수를 그리기

다음 함수를 정해진 범위에 따라 그립니다.

- $ \cos(x) $, x는 [-$ \pi $, +2$ \pi $]
  - numpy 활용: `np.cos(x)`
- $ 3x + 2 $, x는 [0, 5]
  - `3 * x + 2`
- $ \ln(x) $, x는 [0, 10]
  - numpy 활용: `np.log(x)`
- $ e^{x} $, x는 [-5, 5]
  - numpy 활용: `np.exp(x)`
