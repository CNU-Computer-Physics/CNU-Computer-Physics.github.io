---
title: 데이터 그래프
---


# 데이터 파일을 그래프로

데이터파일 [`02_plotting/input.csv`](https://github.com/CNU-Computer-Physics/Example-and-Practice/blob/main/02_plotting/input.csv)은 아래와 같이 공백으로 구분한 두 실수로 작성되어 있습니다.

```txt
0.0202184 1.0819082
0.07103606 0.87027612
0.0871293 1.14386208
0.11827443 0.70322051
...         ...
```

이 파일의 첫 번째 열은 x값 두 번째 값은 y값이라고 약속했을 때 이 데이터를 그래프로 그리려고 합니다.

- 예제 파일: [`02_plotting/02_data_plot.py`](https://github.com/CNU-Computer-Physics/Example-and-Practice/blob/main/02_plotting/02_data_plot.py)

## 프로그래밍

### 파일 내용 읽어들이기

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

### 데이터를 그래프로 그리기

```py
import matplotlib.pyplot as plt

if __name__ == "__main__":
    plt.scatter(x, y)
    plt.xlim(0, 5)
    
    plt.ylim(0, 30)
    plt.grid(True)
    # plt.savefig("data_plot_1.png", bbox_inches="tight")
    plt.show()
```

`plt.scatter(x, y)`는 분산형 그래프를 그리는 함수입니다. `plt.xlim(min, max)`과 `plt.ylim(min, max)`은 각 축의 최소값과 최대값을 지정합니다.

주석으로 처리되어 있는 `plt.savefig()`는 결과를 그림 파일로 저장하고록 하는 명령입니다. 10번 줄을 주석 처리하고 9번의 주석을 해제하면 주어진 이름의 그림 파일로 그래프를 출력합니다. 예제 그대로 실행하면 `plt.show()` 명령에 따라 창에 그래프를 표시합니다.

## 결과

![데이터 플롯]({{ site.imageurl | append: "data_plot_1.png" | absolute_url }})

`plt.scatter(x, y)`로 표시한 그래프는 앞의 함수를 그래프로 그렸을 때 사용한 `plt.plot(x, y)`와는 다르게 데이터를 점으로 표시합니다.
