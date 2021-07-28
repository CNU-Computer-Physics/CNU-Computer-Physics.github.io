---
title: 룽게-쿠타 방법
---

# 룽게-쿠타 방법

룽게-쿠타 방법(Runge–Kutta method)은 초기값을 가지고 있는 운동에 대해 쓸 수 있는 방법입니다. 여기서는 일반적으로 사용하는 4차 룽게 쿠타 방법을 소개합니다. 초기값이 다음과 같을 때,

$$ f(t_0) = x_0 $$

룽게-쿠타 방법의 점화식은 다음과 같습니다. ($n = 0,1,2,...$)

$$ x_{n+1} = x_n + h \frac {k_1 + 2 k_2 + 2 k_3 + k_4} {6} $$

$k$는 각각 아래와 같이 계산합니다.

$$ \begin {align*} k_1 &= f(t_n, x_n) \\ k_2 &= f(t_n + \frac {h} {2}, x_n + \frac {h k_1} {2} ) \\ k_3 &= f(t_n + \frac {h} {2}, x_n + \frac {h k_2} {2} ) \\ k_4 &= f(t_n + h, x_n + h k_3 ) \end {align*} $$

의 점화식을 얻습니다. 여기서 $ h $는 0보다 큰 충분히 작은 값입니다. 처음 값의 기울기와 끝 값의 기울기, 각각의 중간에 해당하는 기울기를 이용해서 정확도를 높이는 방법입니다.

## 룽게-쿠타 함수

```python
def RK_method(func, x0, t0, t1, h=0.01):
    """룽게-쿠타 방법
    func: 함수(t, x)
    x0: x 초기값
    t0, t1, h: 시간의 시작값, 끝값, 간격
    """
    time = np.arange(t0, t1, h)
    x = np.zeros(time.shape)
    x[0] = x0
    for idx in range(1, x.shape[0]):
        k1 = func(time[idx - 1], x[idx - 1])
        k2 = func(time[idx - 1] + h / 2, x[idx - 1] + k1 / 2)
        k3 = func(time[idx - 1] + h / 2, x[idx - 1] + k2 / 2)
        k4 = func(time[idx - 1] + h, x[idx - 1] + k3)
        dx = (k1 + 2 * k2 + 2 * k3 + k4) * h / 6
        x[idx] = x[idx - 1] + dx
    return time, x
```

## 예제: 준비중
