import Home from "../pages/Home";
import NewRoom from "../pages/NewRoom";

import { Switch, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/rooms/new" component={NewRoom} />
    </Switch>
  );
}
