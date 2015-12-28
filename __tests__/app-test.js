// __tests__/app-test.js
// Jest Unit Test for App
//

jest.dontMock('../src/modules/MainMenu');

import React from 'react/addons';
import MainMenu from '../src/components/mainmenu/MainMenu';
var TestUtils = React.addons.TestUtils;

describe('MainMenu', () => {

  it('should do something goes here', () => {

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <MainMenu/>
    );

  });

});

