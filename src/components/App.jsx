import React, { Component } from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            item: '',
            items: []
        };
    }

    addItem () {
        if (!this.state.item) {
            console.log('No item value.');
        } else {
            this.setState(() => {
                items: this.state.items.push(this.state.item);
            });
        }
    }

    render () {
        return (
        <div className="app-container">
            <input value={this.state.item} onChange={(e) => this.setState({ item: e.target.value })} />
            <button onClick={() => this.addItem()} >Submit item</button>

            <FunctionalComponent />
            <ClassComponent />
        </div>
        );
    }
}

export default App;