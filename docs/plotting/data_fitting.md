---
title: 데이터 피팅
---

# 데이터 피팅

앞서 그린 데이터 그래프를 토대로 다항식 모델을 세워 계수를 알아내려고 합니다.

## 소스코드

```py
import numpy as np
import matplotlib.pyplot as plt

x = []
y = []

with open("input.csv", "r") as f:
    for line in f.readlines():
        _x, _y = [float(i) for i in line.split(" ")]
        x.append(_x)
        y.append(_y)

degs = [1, 2, 3, 4, 5, 8, 14, 18]
new_x = np.linspace(0, 1)
plt.figure(figsize=(8, 10))
for idx, deg in enumerate(degs):
    # 계수 연산
    coef = np.polyfit(x, y, deg)
    # 연산한 계수를 함수로 만듬
    fit = np.poly1d(coef)
    # R^2값 계산
    sst = np.sum(np.power(y - np.average(y), 2))
    ssr = np.sum(np.power(y - fit(x), 2))
    sqr = 1 - (ssr / sst)
    print(f"======= DEG: {deg}, R^2:{sqr:.3f} =======")
    print(coef)

    # 서브플롯 명령
    ax = plt.subplot(4, 2, idx + 1)
    ax.set_xlim(0, 1)
    ax.set_ylim(-1, 1)
    ax.text(0.05, -0.9, f"DEG: {deg}, $R^2$:{sqr:.3f}", fontsize=10)
    ax.plot(x, y, ".k")
    ax.plot(new_x, fit(new_x), "--r", label="DEG: {}".format(deg))
plt.savefig("fitting.png", bbox_inches="tight")
```

![코드 결과](../assets/data_fitting_1.png)

## 파일 읽어들이기

`input.csv`파일의 내용은 아래와 같이 공백으로 구분한 두 실수입니다.

```txt
0.0202184 1.0819082
0.07103606 0.87027612
0.0871293 1.14386208
0.11827443 0.70322051
...         ...
```

이 파일을 읽어들여 `x`, `y`의 두 실수 리스트를 만들도록 합니다.

```py
x = []
y = []

with open("input.csv", "r") as f:
    for line in f.readlines():
        _x, _y = [float(i) for i in line.split(" ")]
        x.append(_x)
        y.append(_y)
```

이처럼 데이터 파일의 형식을 명확하게 알고 있는 경우 축약표현을 사용할 수 있습니다. `[float(i) for i in line.split(" ")]`는 문자열 `line`을 공백 기준으로 나누고 각각을 `float()`로 실수형 값으로 변환합니다.

## 최적화 계수 구하기

```py
degs = [1, 2, 3, 4, 5, 8, 14, 18]
for idx, deg in enumerate(degs):
    coef = np.polyfit(x, y, deg)
    fit = np.poly1d(coef)
    sst = np.sum(np.power(y - np.average(y), 2))
    ssr = np.sum(np.power(y - fit(x), 2))
    sqr = 1 - (ssr / sst)
    print(f"======= DEG: {deg}, R^2:{sqr:.3f} =======")
    print(coef)
```

나열하는 원소(`deg`)와 몇 번째 원소인지(`idx`)를 받아오기 위해 `enumerate(degs)`를 사용합니다.

`np.polyfit(x, y, deg)`은 데이터의 x값과 y값, 차수가 주어지면 다항식 계수의 행렬을 출력합니다. 계수의 배열은 차수가 낮은 것부터 높은 순으로 정렬되어 있습니다.

계수의 행렬을 간단하게 다항식 함수로 만들어 주는 것이 `np.poly1d(coef)`입니다. 값이 아닌 함수를 출력합니다.

변수 `sqr`은 결정계수($ r^2 $)를 담고 있습니다. 추정하는 모델의 함수가 $ g(x) $일 때, $ r^2 $은 아래와 같이 계산합니다.

$$ r^{2} = \frac {\sum_{i} ( y_i - \bar{y} )^2}{\sum_{i} ( y_i - g(x_i) )^2} $$

## 한 그림에 여러 그래프 표시하기

```py
degs = [1, 2, 3, 4, 5, 8, 14, 18]
new_x = np.linspace(0, 1)
plt.figure(figsize=(8, 10))
for idx, deg in enumerate(degs):
    # ...적합 계수와 결정계수 계산...
    # 서브플롯 명령
    ax = plt.subplot(4, 2, idx + 1)
    ax.set_xlim(0, 1)
    ax.set_ylim(-1, 1)
    ax.text(0.05, -0.9, f"DEG: {deg}, $R^2$:{sqr:.3f}", fontsize=10)
    ax.plot(x, y, ".k")
    ax.plot(new_x, fit(new_x), "--r", label="DEG: {}".format(deg))
plt.savefig("fitting.png", bbox_inches="tight")
```

`plt.figure()`는 그림의 속성을 지시합니다. 사용한 `figsize=(8, 10)` 속성은 그림의 크기를 지시하며, 가로 8인치, 세로 10인치인 그림을 그릴 것이라는 표시가 됩니다.

4행 2열 그래프 중 `idx + 1`번째<sup>[1](#주석_1)</sup> 그래프를 지시하기 위해 `plt.subplot(4, 2, idx + 1)`를 사용합니다.

만든 그림을 바로 보는 대신 그림파일로 저장하는 명령인 `plt.savefig()`를 사용하여 `fitting.png`로 저장합니다.

---

<a name="주석_1">1</a>: 원소는 0부터 세지만 그림은 1부터 세기 때문에 원소의 번호인 `idx`에 1을 더합니다.
