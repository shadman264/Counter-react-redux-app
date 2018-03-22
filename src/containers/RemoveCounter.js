import React from 'react';
import { Button } from 'reactstrap';
import {decreaseButtClick} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class RemoveCounter extends React.Component{

    removeButtClick(e){
        e.preventDefault();
        this.props.dispatch(decreaseButtClick());
    }

    render(){
        return(
            <Button color="danger" className="float-right" onClick={this.removeButtClick.bind(this)}>Decrese!</Button>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { actions: bindActionCreators(decreaseButtClick, dispatch)}
}

export default connect(mapDispatchToProps)(RemoveCounter);
