# Redux-Saga

## Sagas

- A Saga is a Collection of Sub-Transactions (T1, T2, T3, ..., Tn)
- Each Sub-Transaction has a Compensating Transaction 

> Compensating Transaction (Request) must be idempotent (一直 retry 直到成功為止 )

## `takeLatest` vs `takeEvery`

`takeLatest`: Forks a `saga` (a generator funcntion) on each action dispatched to the Store that matches pattern. And automatically **cancels** any previous `saga` task started previously if it's still running.

> 除了停止前一個正在執行的 saga 外，即使 watcher 短時間內收到多個 action，還是只會啟用最後那個 saga. 
> 在處理 AJAX 請求時，我希望只能在最後一個請求的時候得到 response，takeLatest 會非常的有用。 

`takeEvery`: Spawns a `saga` on each action dispatched to the Store that matches pattern.

> 允許多個 saga task 同時被 fork

## `put` vs `putResolve`

https://codesandbox.io/s/redux-saga-example-x77jb?file=/sagas/index.js

## Basic Concepts

### Declarative Effects

- To create Effects, you use the functions provided by the library in the `redux-saga/effects` package.

```javascript
import { call } from 'redux-saga/effects'

function* fetchProducts() {
  // redux-saga middleware will take care of executing those instructions 
  // and giving back the result of their execution to the Generator.
  // call creates "a description" (a plain object) of the effect.
  const products = yield call(Api.fetch, '/products')
  // ...
}
```

### Dispatching actions to the store

## Terms

Effect: An Effect is an object that **contains some information** to be interpreted by the **middleware**



## References

1. [Applying the Saga Pattern • Caitie McCaffrey • GOTO 2015](https://youtu.be/xDuwrtwYHu8)
2. https://github.com/redux-saga/redux-saga
