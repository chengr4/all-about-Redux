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

## Error Handling

- https://stackoverflow.com/questions/58266418/correct-way-of-error-handling-in-react-redux#:~:text=Usually%20the%20best%20approach%20to,passed%20to%20an%20error%20component.&text=The%20error%20component%20doesn

## Q/A

- [How to reset the state of a Redux store?](https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store)
