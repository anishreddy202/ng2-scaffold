'use strict'

const Pages = require('../pages');

describe('Home Page', () => {
  let page = Pages.Home;
  const helpPage = '/customer';

  beforeEach(() => {
    page.get();
  });

  it('page should have message and name', () => {
    expect(page.elements.nameLabel.getInnerHtml()).toEqual('Welcome IRVUI');
    expect(page.elements.messageLabel.getInnerHtml()).toEqual('Irving User Interface Team');
  });
});
