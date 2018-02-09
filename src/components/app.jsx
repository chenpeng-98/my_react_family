import React from 'react';
// import { combinReducers } from 'redux';
import { BrowserRouter as Router, Route, Link, Redirect, Prompt, Switch, widthRouter } from 'react-router-dom';

import '../less/index.less';
import { Header } from './header.jsx';
import { Footer } from './footer.jsx';
import { Mogujie } from './mogujie.jsx';
import { PromptText } from './prompt.jsx';
import { NoMatch } from './noMatch.jsx';
import Back from './back.jsx';
import FragmentAttr from './fragment.jsx';

// export default <Router>
//   <div>
//     <ul className="nav-main">
//       <li><Link to="/">header</Link></li>
//       <li><Link to="/footer">footer</Link></li>
//       <li><Link to="/ebusiness">E-Business</Link></li>
//       <li><Link to="/mogujie">蘑菇街</Link></li>
//       <li><Link to="/prompt">Text Prompt</Link></li>
//       <li><Link to="/test_no_match1">Text No Match1</Link></li>
//       <li><Link to="/test_no_match2">Text No Match2</Link></li>
//     </ul>
//     <Switch>
//       <Route exact path="/" component={Header}/>
//       <Route path="/footer" component={Footer}/>
//       <Route path="/ebusiness" render={() => (
//         <Redirect to={{
//           pathname: '/mogujie'
//         }} />
//       )} />
//       <Route path="/mogujie" component={Mogujie} />
//       <Route path="/prompt" component={PromptText} />
//       <Route exact component={NoMatch} />
//     </Switch>

//     {/* Route twice */}
//     <div>
//       <Route path="/prompt" component={PromptText} />
//     </div>
//   </div>
// </Router>;

export default <Router
  getUserConfirmation={(message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
  }}
  >
  <div>
    <Route render={() => <div>
        <Route exact path="/" render={() =>
          <ul className="nav-main">
            <li><Link to="/header">User Info</Link></li>
            <li><Link to="/footer">footer</Link></li>
            <li><Link to="/mogujie">蘑菇街</Link></li>
          </ul>}
        />
        <Route exact path="/header" component={Header}/>
        <Route path="/footer" component={Footer}/>
        <Route path="/mogujie" component={Mogujie} />
      </div>}
    />
    <Back />
    <FragmentAttr />
  </div>
</Router>;