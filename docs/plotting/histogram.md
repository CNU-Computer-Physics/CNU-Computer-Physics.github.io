---
title: 히스토그램
---

# 히스토그램 작성

![히스토그램]({{ site.imageurl | append: "histogram_1.png" | absolute_url }})

히스토그램은 데이터의 분포를 그림으로 나타낸 것입니다. 여기서는 1차원 데이터를 히스토그램으로 그립니다.

- 예제 파일: [`02_plotting/03_histogram.py`](https://github.com/CNU-Computer-Physics/Example-and-Practice/blob/main/02_plotting/03_histogram.py)
- 데이터 파일: [`02_plotting/hist.csv`](https://github.com/CNU-Computer-Physics/Example-and-Practice/blob/main/02_plotting/hist.csv)

## 데이터

데이터파일은 1904줄의 1차원 배열이며 각 줄마다 측정한 수치가 들어있습니다.

```txt
8.119651934101998592e+00
1.008247783750474191e+01
4.341979401586036680e+00
7.326366608122442337e+00
1.064307895804619442e+01
...
```

## 스크립트

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
