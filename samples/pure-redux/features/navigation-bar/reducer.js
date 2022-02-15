import * as actions from './actionType';

const initState = {
  data: []
};

export default function reducer(
    state = initState,
    action,
) {
  const {type, data} = action;

  switch (type) {
    case actions.SEND_TM_NOTIFICATION:
      return {
        ...state,
        data: data
      };
    default:
      return state;
  }
}
