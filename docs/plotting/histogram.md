---
title: 히스토그램
---

# 히스토그램 작성

![히스토그램]({{ site.imageurl | append: "histogram_1.png" | absolute_url }})

히스토그램은 데이터의 도수분포를 그림으로 나타낸 것입니다. 여기서 소개할 matplotlib의 `hist`함수는 영역을 구간으로 나눈 계급을에 따라 데이터를 분류하고 누적량을 그래프와 데이터로 출력합니다.

## 1차원 히스토그램

- 예제 파일: [`02_plotting/03A_histogram.py`](https://github.com/CNU-Computer-Physics/Example-and-Practice/blob/main/02_plotting/03A_histogram.py)
- 데이터 파일: [`02_plotting/hist.csv`](https://github.com/CNU-Computer-Physics/Example-and-Practice/blob/main/02_plotting/hist.csv)

### 1차원 데이터

데이터파일은 1904줄의 1차원 배열이며 각 줄마다 측정한 수치가 들어있습니다.

```txt
8.119651934101998592e+00
1.008247783750474191e+01
4.341979401586036680e+00
7.326366608122442337e+00
1.064307895804619442e+01
...
```

### 1차원 히스토그램 그리기

히스토그램을 사용하여 각 데이터의 도수 분포를 집계하고 결과를 그래프로 표시합니다.

```python
import numpy as np
import matplotlib.pyplot as plt

data = np.loadtxt("hist.csv")
n, bins, p = plt.hist(data, bins=40, color="#00796B")
plt.title("Energy Spectrum")
plt.xlabel("Energy(keV)")
plt.ylabel("Intensity #")
plt.xlim(0, 12)
plt.grid()
plt.show()
```

데이터를 `np.loadtxt()`로 읽은 후 `plt.hist()`에 전달하여 출력합니다. 여기서 `bins` 속성은 몇 개의 계급으로 표시할지를 정합니다. 잘 와닿지 않는다면 이 속성값을 2와 10으로 바꾼 뒤 그래프가 어떻게 나오는지 살펴보도록 합니다.

- `plt.hist()`의 [공식 API 문서](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html)

## 2차원 히스토그램

- 예제 파일: [`02_plotting/03B_histogram.py`](https://github.com/CNU-Computer-Physics/Example-and-Practice/blob/main/02_plotting/03B_histogram.py)
- 데이터 파일: [`02_plotting/hist2D.csv`](https://github.com/CNU-Computer-Physics/Example-and-Practice/blob/main/02_plotting/hist2D.csv)

### 2차원 데이터

2치원 데이터는 csv 형식으로 작성되어 있습니다. 쉼표 `,`를 기준으로 x와 y로 나뉘어 5000줄로 작성되어 있습니다.

```csv
-2.738838974609301147e+00, -6.367595643836828856e+00
1.963398912200970958e+00, 6.984811270124598792e+00
8.283667139098009002e+00, -1.337330966827691192e+01
..., ...
```

### 2차원 히스토그램 그리기

```python
import numpy as np
import matplotlib.pyplot as plt

data = np.loadtxt("hist2D.csv", delimiter=", ")

fig, ax = plt.subplots()
hist = ax.hist2d(data[:, 0], data[:, 1], bins=40, range=([0, 10], [0, 10]))
fig.colorbar(hist[3], ax=ax)
plt.xlabel("Position X")
plt.ylabel("Position Y")
plt.grid()
plt.show()
```

2차원 히스토그램은 `hist2d()`를 사용하여 표시할 수 있습니다. 별도로 색상바를 표시하기 위해 `hist`의 결과값을 사용합니다.

- `plt.hist2d()`의 [공식 API 문서](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist2d.html)

### 결과

![히스토그램]({{ site.imageurl | append: "histogram_2.png" | absolute_url }})

2차원 히스토그램은 2차원 평면에서 높이를 표시하기 어렵기 때문에 색상을 사용해서 한 차원을 더 표시합니다. 히스토그램을 그리는 함수는 결과값으로 계급과 수치를 내놓기 때문에 이후 분석에도 활용할 수 있습니다.
