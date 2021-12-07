import "./App.css";
import Slot from "./component/Slot";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import SlotDetails from "./component/SlotDetails";
import SlotEditDetails from "./component/slotEdit";
function App() {
  return (
    <Router>
      <h1 style={{ textAlign: "center", backgroundColor: "blueviolet" }}>
        Booking app
      </h1>
      <main className="py-3">
        <Container>
          <Route exact path="/" component={Slot} />
          <Route path="/booking/:id" component={SlotDetails} />
          <Route exact path="/edit/:id" component={SlotEditDetails} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
