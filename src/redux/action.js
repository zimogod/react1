import * as types from './action-types';
//action是一个函数，action creator 是一个函数对象
//action的作用是用来派发动作或操作
export const addNum = (num)=>({
	type:types.ADD_NUM,
	num
})

export const reduceNum = (num)=>({
	type:types.REDUCE_NUM,
	num
})
//异步分发或者派生action
export const reducerNumAsync = (num) =>{
	return dispatch=>{
		setTimeout(() => {
		  dispatch(reduceNum(num))
		}, 1000)
	}
}

//写action
// export const addNum = (num)=>(
// 	{
// 		type:types.ADD_NUM,
// 		num
// 	}
// )
// export const reduceNum = (num)=>(
// 	{
// 		type:types.REDUCE_NUM,
// 		num
// 	}
// )

// export const reducerNumAsync = (num) =>{
// 	return dispatch=>{
// 		setTimeout(() => {
// 		  dispatch(reduceNum(num))
// 		}, 2000)
// 	}
// }