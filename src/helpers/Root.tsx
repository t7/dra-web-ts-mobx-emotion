import React, { Component } from 'react';

declare let process: any; // tslint:disable-line:no-any
declare let require: any; // tslint:disable-line:no-any no-reserved-keywords

export class Root extends Component {
  private renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default; // tslint:disable-line:no-require-imports
      return <DevTools />;
    }
    return null;
  }

  public render() {
    return (
      <main>
        {this.props.children}
        {/* {this.renderDevTool()} */}
      </main>
    );
  }
}
