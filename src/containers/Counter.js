import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component{
    render(){
        return(
            <p className="lead">Counter : {this.props.newCount}</p>
        )
    }
}

function mapStateToProps(state){
    return({
        newCount: state.newState.count
    })
}

export default connect(mapStateToProps)(Counter);
