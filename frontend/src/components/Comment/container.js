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
                    handleMaxlength = {this._handleMaxlength}
                    textState={"default"}
                    title="입력영역"
                />
                <Comment 
                    {...this.state}
                    handleInputChanage = {this._handleInputChanage}
                    textState={"disabled"}
                    title="입력영역"
                />
                <Comment 
                    {...this.state}
                    handleInputChanage = {this._handleInputChanage}
                    textState={"readOnly"}
                    title="입력영역"
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
    _handleMaxlength = event => {
        const { target: { value } } = event;
        const { total } = this.state;

        if( total < value.length ){
            this.setState({
                comment: value.slice(0, total)
            });
        }
    }
}

export default Container;