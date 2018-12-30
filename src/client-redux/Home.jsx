
//当前组件为redux数据组件

// import React, { Component } from 'react';
import { addNum,reduceNum,reducerNumAsync } from '../redux/action';

import { connect } from 'react-redux';

import Home from '../container/home-ui';

export default connect(
  state =>({num:state.num}),
  { addNum,reduceNum,reducerNumAsync }
)(Home);