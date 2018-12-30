import { ADD_NUM,REDUCE_NUM } from './action-types';
// import { combineReducers } from 'redux';
// 合并reducer
// combineReducers:合并多个reducer；
const initialState = {
	num:20
}

export const addnum = (state=initialState,action)=>{
	switch(action.type){
		case ADD_NUM:
			return Object.assign({},state,{num:state.num + action.num});
		case REDUCE_NUM:
			return Object.assign({},state,{num:state.num - action.num});
		default:
			return state;
	}
}


// export const addnum = (state=initialState,action) =>{
// 	console.log(state,action)
// 	switch(action.type){
// 		case ADD_NUM:
// 			return Object.assign({},state,{num:state.num + action.num});
// 		case REDUCE_NUM:
// 			return Object.assign({},state,{num:state.num - action.num});
// 		default:
// 			return state;
// 	}
// }
// export default addnum;