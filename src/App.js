import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import CardExample from './components/CardExample';
import TableExample from './components/TableExample';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React + ReactStrap</h1>
                </header>
                <br/>
                <p className="App-intro">
                    This is a single template usign React and ReactStrap, a library that use React and Bootstrap 4
                    <br/>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <br/>
                <TableExample/>
                <br/>
                <CardExample />
                <br/>
                <br/>
                <footer className={"footer"}>
                    <h5>This is a footer using React + Bootstrap</h5>
                    <p>&#174; All rights reserved. [I'm joking]</p>
                </footer>
            </div>
        );
    }
}

export default App;
