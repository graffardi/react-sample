import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor (props) {
        super(props);

        this.state = {
            // Some stuff here
        };
    }

    render () {
        return (
            <div className="class-component-container">
                ClassComponent return value.
            </div>
        );
    }
}

export default ClassComponent;