# Redux

## Standard Redux Patterns

### Action Creator

```javascript
// action creator
export const todosLoaded = todos => {
  return {
    type: 'todos/todosLoaded',
    payload: todos
  }
}

export async function fetchTodos(dispatch, getState) {
  const response = await client.get('/fakeApi/todos')
  dispatch(todosLoaded(response.todos))
}
```
