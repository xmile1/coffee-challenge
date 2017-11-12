import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequestHandler from '../Presentation/RequestHandler';
import { requestAPI } from 'actions';

class RequestHandlerContainer extends Component {

  handleClick = () => {
    this.props.requestAPI(this.props.statusCode)
  }

  render() {
    return (<RequestHandler {...this.props} handleClick={this.handleClick} />)
  }
}

const mapState = (state) => {
  return { statusCode: state.api.statusCode, resStatus: state.api.resStatus }
}

const mapDispatch = { requestAPI }

export default connect(mapState, mapDispatch)(RequestHandlerContainer);
