---
title: 데이터 피팅
---

# 데이터 피팅

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
    sqr = 1 - np.sqrt(np.average(np.power(fit(x) - y, 2)))
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

