import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from "mobx-react";

const App = observer(() => <div>hi</div>);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


