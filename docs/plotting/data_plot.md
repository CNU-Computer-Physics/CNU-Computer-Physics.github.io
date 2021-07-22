---
title: 데이터 그래프
---


# 데이터 파일을 그래프로

```python
import matplotlib.pyplot as plt

x = []
y = []

with open("input.csv", "r") as f:
    for line in f.readlines():
        items = line.split(" ")
        x.append(float(items[0]))
        y.append(float(items[1]))

if __name__ == "__main__":
    plt.scatter(x, y)
    plt.xlim(0, 5)
    plt.ylim(0, 30)
    plt.grid(True)
    plt.show()
```

## 파일 불러오기

```py
x = []
y = []

with open("input.csv", "r") as f:
    for line in f.readlines():
        items = line.split(" ")
        x.append(float(items[0]))
        y.append(float(items[1]))

```

`with open({파일}, {모드}) as {더미}:`는 파일을 열어서 사용하기 위한 문법입니다. {파일}을 {모드}로 읽어서 {더미}에 변수로 저장합니다. 즉, 위의 예시에서는 `input.csv`를 읽기(`r`)모드로 변수 f에 저장합니다.

`f.readlines()`는 파일 내용을 한줄씩 문자열로 읽어 리스트형 변수로 만듭니다. 각 문자열(`line`)을 공백을 기준으로 분할하고 각각을 `x`변수와 `y`변수에 추가(`append()`)합니다. 문자열을 수치로 받아들일 수 있도록 `float()`를 사용하여 변수의 자료형을 변경합니다.

> `with`표현은 블록이 끝나는 지점에서 자동으로 `f.close()`를 수행합니다.

## 그래프로 그리기

```py
import matplotlib.pyplot as plt

if __name__ == "__main__":
    plt.scatter(x, y)
    plt.xlim(0, 5)
    
    plt.ylim(0, 30)
    plt.grid(True)
    plt.show()
```

`plt.scatter(x, y)`는 분산형 그래프를 그리는 함수입니다.

`plt.xlim(min, max)`과 `plt.ylim(min, max)`은 각 축의 최소값과 최대값을 지정합니다.
