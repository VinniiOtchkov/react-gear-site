import React, { Component } from 'react';
import PostInput from './PostInput';
import PostList from './PostList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as equipmentActions from '../actions/equipment';

class Main extends Component {

  handleSubmit(value) {
    this.props.equipmentActions.addEquipment(value);
  }
  render() {
    return (
      <main className="container">
        <PostInput onSubmit={this.handleSubmit.bind(this)} />
        <PostList />
      </main>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    equipmentActions: bindActionCreators(equipmentActions, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Main);
