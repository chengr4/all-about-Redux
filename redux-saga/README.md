# Redux-Saga

## Sagas

- A Saga is a Collection of Sub-Transactions (T1, T2, T3, ..., Tn)
- Each Sub-Transaction has a Compensating Transaction 

> Compensating Transaction (Request) must be idempotent (一直 retry 直到成功為止 )

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

## Terms

Effect: An Effect is an object that **contains some information** to be interpreted by the **middleware**



## References

1. [Applying the Saga Pattern • Caitie McCaffrey • GOTO 2015](https://youtu.be/xDuwrtwYHu8)
2. https://github.com/redux-saga/redux-saga
