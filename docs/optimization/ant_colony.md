---
title: 개미집단 최적화
---

# 개미집단 최적화

이런 경우에 유용하게 사용할 수 있습니다.

- 답이 하나가 아닌 경우
- 답이 여러개일 가능성이 있는 경우

## 프로그램 구조

```python
import matplotlib.pyplot as plt
import numpy as np

area = np.ones([20, 20])  # 지역 생성
start = (1, 1)  # 개미 출발지점
goal = (19, 14)  # 도착해야 하는 지점

pheromone = 1.0  # 페로몬 가산치
volatility = 0.3  # 스탭 당 페로몬 휘발율

def get_neighbors(x, y):
    """x, y와 이웃한 좌표 목록 출력"""

def ant_path_finding():
    """개미 경로 생성"""

def step_end(path):
    """경로를 따라 페로몬을 더하고 전 지역의 페로몬을 한번 휘발시킴"""

if __name__ == "__main__":
  # 계산 및 그래프 작성
```

## 이웃한 좌표 찾기

```python
def get_neighbors(x, y):
    """x, y와 이웃한 좌표 목록 출력"""
    max_x, max_y = area.shape
    return [
        (i, j)
        for i in range(x - 1, x + 2)
        for j in range(y - 1, y + 2)
        if (i != x or j != y) and (i >= 0 and j >= 0) and (i < max_x and j < max_y)
    ]
```

## 개미 경로 생성

```python
def ant_path_finding():
    """개미 경로 생성"""
    path = [start]
    x, y = start
    count = 0
    while x != goal[0] or y != goal[1]:
        count += 1
        if count > 400:
            return None
        neighbors = get_neighbors(x, y)
        values = np.array([area[i, j] for i, j in neighbors])
        p = values / np.sum(values)
        x, y = neighbors[np.random.choice(len(neighbors), p=p)]
        while (x, y) == path[-1]:
            x, y = neighbors[np.random.choice(len(neighbors), p=p)]
        path.append((x, y))
    return path
```

## 지역 페로몬 업데이트

```python
def step_end(path):
    """경로를 따라 페로몬을 더하고 전 지역의 페로몬을 한번 휘발시킴"""
    global area
    if path is None:
        return
    for x, y in set(path):
        area[x, y] += pheromone / len(set(path))
    area[:, :] = area * (1 - volatility)
    return
```

## 더 멋지게 만들기

이런 아이디어를 추가하면 더 멋진 결과를 얻을 수 있습니다.

- [1차원 가우시안 필터](https://docs.scipy.org/doc/scipy/reference/generated/scipy.ndimage.gaussian_filter1d.html)를 사용해서 개미의 경로를 부드럽게 만들어 줄 수 있습니다. 당장의 계산 결에는 영향을 미치지 않겠지만 실제 개미의 움직임에 더 가까운 그래프를 얻을 수 있습니다.
- [가우시안 필터](https://docs.scipy.org/doc/scipy/reference/generated/scipy.ndimage.gaussian_filter.html)를 사용해서 페로몬이 이웃한 지역으로 부드럽게 확산되는 것을 계산에 추가할 수 있습니다. 경로가 고정되는 것을 조금 더 효율적으로 늦춰줄 수 있습니다.
- 예제는 주어진 횟수만큼 반복했지만 조건부 반복(`while`)을 사용해서 경로가 충분히 고정되었거나 페로몬의 변화가 충분히 적을 때 계산을 종료하도록 만들 수 있습니다.

이외에도 생각나는게 있다면 직접 프로그램을 수정해서 더 멋진 결과를 얻어 봅시다.

### 과제: 외판원 문제

[실습 저장소](https://github.com/CNU-Computer-Physics/Example-and-Practice/tree/main/%EC%B5%9C%EC%A0%81%ED%99%94)에는 좌표가 담긴 `tsp_coord.txt`가 있습니다.
