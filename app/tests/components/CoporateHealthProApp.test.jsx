var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var configureStore = require('configureStore');
import {CorporateHealthProApp} from 'CorporateHealthProApp';
import CorporateHealthProList from 'CorporateHealthProList';

describe('CorporateHealthProApp', () => {
  it('should exist', () => {
    expect(CorporateHealthProApp).toExist();
  });
});
