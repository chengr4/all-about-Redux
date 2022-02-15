import * as actions from './actionType';

/**
 * Sends notifications from Task Management
 * @param {*} data 
 * @returns An action object
 */
export const sendTMNotification = (data) =>({
  type: actions.SEND_TM_NOTIFICATION,
  data
});
