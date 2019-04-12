import React, { Component } from 'react';
import Comment from './presenter';

class Container extends Component {
    state = {
        total: 500,
        comment: ""
    }

    render() {
        return (
            <div>
                <Comment 
                    {...this.state}
                    handleInputChanage = {this._handleInputChanage}
                    textState={"default"}
                />
                <Comment 
                    {...this.state}
                    textState={"disabled"}
                />
                <Comment 
                    {...this.state}
                    textState={"readOnly"}
                />
            </div>
        );
    }

    _handleInputChanage = event => {
        const { target: { value } } = event;

        this.setState({
            comment: value
        });
    }
}

export default Container;