---
title: 분자동역학
---

# 여러 입자의 운동

뉴턴의 프린키피아에서 태양, 지구 그리고 달의 세 천체에 대한 궤도를 그리는 문제로 시작한 삼체 문제(3-body problem)는 이후 앙리 푸앵카레에 의해 일반해가 불가능하다는 것을 증명할 때까지 많은 사람들이 빠져들었던 난제 중 하나였습니다.

여기서는 삼체문제를 확장하여 중력을 주고받는 N개의 입자가 어떤 궤도를 그리는지 알아내기 위해 벌렛(verlet) 방법을 사용합니다.


----- [코멘트] ---------------------------------------------------------------

그림에 대한 설명이 필요할 것 같습니다.

시뮬레이션 결과가 닫힌 궤도가 아닌 열린 궤도처럼 보이는데 이것이 맞은 결과 인가요?

태양계를 예로 들면, 수성, 금성, 지구, 화성, 목성 등등이 여러 중력을 주고 받고 있음에도 닫힌 궤도를 갖고 있는 것과 상반된 결과인 것 같습니다.


설명에서는 N 개의 입자에 대해 중력을 주고 받을 때 궤도를 구하는 방법이라 소개되었는데, 현 코드 상에서는 두 입자간의 중력으로 인해 궤도가 어떻게 바뀌는지만 나와 있습니다.

제 생각에 def 로 정의하고 main 부분에서 N 개의 입자에 대해 각각 중력을 계산하고 궤도를 보정하는 식으로 코딩한 것 같은데 코드 전반적인 부분에 대해 소개를 해 주었으면 합니다.

------------------------------------------------------------------------------




## 다체문제

![코드 결과](../assets/particle_dynamics_1.png)

N개의 입자가 중력을 주고받는 상황에서 각 입자가 그리는 궤적을 추적합니다. 벌렛 방법으로 기술하는 각 입자의 운동방정식은 이렇게 쓰입니다.

$$ \begin{align} x(t_{i+1}) &= x(t_i) + v(t_i)h + \frac{1}{2} a(t_i)h^2 \\ v(t_{i+1}) &= v(t) +  \frac{a(t_{i+1}) + a(t_i)}{2} h \end{align} \\  h = t_{i+1} - t_i $$

벌렛 방법은 아래 과정을 거칩니다.

1. $ t_0 = 0 $일 때의 초기값 $ x(0) $과 $ v(0) $, 시간 간격 $ h $를 설정합니다.
2. $ t_1 = t_0 + h $ 일 때의 식 (1)을 풀고 새로운 위치에서의 $ a(t_i) $을 구합니다.
3. 앞서 구한 $ a(t_i) $를 이용해 식(2) 풀어 저장합니다.
4. $ t_i $의 $ i $를 증가시키면서 원하는 만큼 반복합니다.

### 위치와 속도의 점화식

```python
def verlet_x(x, v, a):
    """위치 점화식"""
    dx = v * h + 0.5 * a * h ** 2
    return x + dx

```



```python
def verlet_v(v, a):
    """속도 점화식"""
    dv = a * h
    return v + dv
```

### 주고받는 중력으로부터 가속 계산

```python

def acceleration(xy1, xy2, m2):
    """중력을 계산하고 가속도로 출력"""
    r_sq = (xy2[0] - xy1[0]) ** 2 + (xy2[1] - xy1[1]) ** 2
    theta = np.arctan2(xy2[1] - xy1[1], xy2[0] - xy1[0])
    force = m2 / r_sq
    return np.array([force * np.cos(theta), force * np.sin(theta)])
```

### 벌렛으로 궤도 구하기

```python
def particle_motion(time, pos=[], vel=[], mass=[]):
    """벌렛 방법으로 입자의 궤도 작성"""
    pos_arr, vel_arr = [], []
    # 위치와 속도 배열 초기화
    for _pos, _vel in zip(pos, vel):
        vel_arr.append(np.zeros([time.shape[0], 2]))
        pos_arr.append(np.zeros([time.shape[0], 2]))
        pos_arr[-1][0, :] = _pos
        vel_arr[-1][0, :] = _vel
    # 운동 배열 채우기
    for idx in range(1, time.shape[0]):
        for num, pos, vel in zip(range(len(pos_arr)), pos_arr, vel_arr):
            acc0 = np.zeros(2)
            for pidx in [i for i in range(len(pos_arr)) if i != num]:
                m2 = mass[pidx]
                xy1 = pos[idx - 1]
                xy2 = pos_arr[pidx][idx - 1]
                acc0 += acceleration(xy1, xy2, m2)
            pos[idx, :] = verlet_x(pos[idx - 1], vel[idx - 1], acc0)
            acc1 = np.zeros(2)
            for pidx in [i for i in range(len(pos_arr)) if i != num]:
                m2 = mass[pidx]
                xy1 = pos[idx]
                xy2 = pos_arr[pidx][idx]
                acc1 += acceleration(xy1, xy2, m2)
            vel[idx, :] = verlet_v(vel[idx - 1], (acc0 + acc1) / 2)
    return pos_arr
```

