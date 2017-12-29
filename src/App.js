import React, { Component } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as equipmentActions from './actions/equipment';

class App extends Component {

  componentDidMount(){
  this.props.equipmentActions.fetchEquipment();
}

  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {equipment:state.equipment}
}

function mapDispatchToProps(dispatch) {
  return {
    equipmentActions:bindActionCreators(equipmentActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
