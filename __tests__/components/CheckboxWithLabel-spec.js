/** @jsx React.DOM */
'use strict';
jest.dontMock('./../../__app/components/CheckboxWithLabel');
describe('CheckboxWithLabel', function() {
  it('changes the text after click', function() {
    var React = require('react/addons');
    var CheckboxWithLabel = require('./../../__app/components/CheckboxWithLabel');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    // Verify that it's Off by default
    var label = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, 'label');
    expect(label.getDOMNode().textContent).toEqual('Off');

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, 'input');
    TestUtils.Simulate.change(input);
    expect(label.getDOMNode().textContent).toEqual('On');
  });
});
