import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";

// const WrappedApp = () => (
//     <Provider store={store}>
//         <HashRouter>
//             <Switch>
//                 <Route path="/user/:username" component={App} />
//                 <Route path="/register" component={App} />
//                 <Route path="/forget-password" component={App} />
//                 <Route path="/login" component={App} />
//                 <Route path="/dashboard/:username" component={App} />
//                 <Redirect to="/login" />
//             </Switch>
//         </HashRouter>
//     </Provider>
// )

ReactDOM.render(<App />, document.getElementById("root"));
