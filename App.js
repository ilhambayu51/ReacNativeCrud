import React, {Component} from 'react';
import {Platform, Stylesheet, View, Text} from 'react-native';
import Rootstack from './crud/Navigator/Rootstack';

export default class App extends Component {
  render() {
    return <Rootstack />;
  }
}
