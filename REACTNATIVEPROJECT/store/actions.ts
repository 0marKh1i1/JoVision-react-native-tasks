export const ACTION_TYPE = 'ACTION_TYPE';

export const actionCreator = (payload : any) => {

return {

type: ACTION_TYPE,

payload,

};

};