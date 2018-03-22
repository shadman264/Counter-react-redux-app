import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseButtClick } from '../actions';

class AddCounter extends React.Component{

    addButtClick(e){
        e.preventDefault();
        this.props.dispatch(increaseButtClick());
    }

    render(){
        return(
            <Button color="success" onClick={this.addButtClick.bind(this)}>Increase!</Button>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(increaseButtClick, dispatch)}
}

export default connect(mapDispatchToProps)(AddCounter);
