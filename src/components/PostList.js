import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as equipmentActions from '../actions/equipment';

class PostList extends Component {
  constructor() {
    super();

    this.state = {
      filterCriteria: '',
    }

  }
  render() {
    let filteredGear = this.props.equipment.filter(equipment =>
      equipment.name.toLowerCase().includes(this.state.filterCriteria.toLowerCase())).map(equipment => <Post key={equipment.id} gear={equipment} />);
    return (
      <div>
        {filteredGear}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return { equipment: state.equipment };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(equipmentActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
