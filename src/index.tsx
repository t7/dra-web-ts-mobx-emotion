import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { history, injectables } from '#router';

import { App } from './App';

import { create } from 'jss';

import { MobxIntlProvider, defaultLocale } from '#i18n';

import { EmotionWrapper, MUIWrapper } from '#themes';

// START: material-ui CSS-in-JSS specificty imports
import JssProvider from 'react-jss/lib/JssProvider';
const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('material-ui-insertion-point') as any,
});

// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
// the goal is to have the material-ui styles appear first in the <head> so that other CSS-in-JS
// libraries (styled-components, etc) which append to the end of <head> will always be last, which
// means they will take precedence when the specificity of a given CSS class is the same, which is
// desirable to avoid specificity hacks or !important
// (jss as any).options.insertionPoint = 'material-ui-insertion-point'; // tslint:disable-line:no-any
// END: material-ui CSS-in-JSS specificty imports

// JssProvider is controlling material-ui jss <head> insertion point to get lowest precedence possible
// it hooks into a custom comment in the html-template.ejs HTML template

// ThemeProvider the HOC for internal React component theming vis styled-components

// MuiThemeProvider is the material-ui theme provider HOC

// Provider is the mobx-react IoC/DI HOC

// IMPORTANT:
//   IF USING <Route children> instead of <Route render> or <Route component>
//   it's is so that we can do page exit animations/transitions seamlessly. when
//   children is used, the component is always rendered, and component itself gets
//   to choose whether to render or not.  it can do this by looking at the injected
//   match data, which will be null if the route is not active

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <Provider {...injectables}>
      <EmotionWrapper>
        <MUIWrapper>
          <MobxIntlProvider defaultLocale={defaultLocale}>
            <App history={history} />
          </MobxIntlProvider>
        </MUIWrapper>
      </EmotionWrapper>
    </Provider>
  </JssProvider>,
  document.getElementById('root'),
);
