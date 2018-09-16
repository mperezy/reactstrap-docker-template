import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Header from './components/Header';
import Message from './components/Message';
import CardExample from './components/CardExample';
import TableExample from './components/TableExample';
import Resources from './components/Resources';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header logo={logo}/>
                <br/>
                <Message />
                <br/>
                <TableExample/>
                <br/>
                <CardExample />
                <br/>
                <Resources />
                <br/>
                <br/>
                <Footer />
            </div>
        );
    }
}

export default App;
