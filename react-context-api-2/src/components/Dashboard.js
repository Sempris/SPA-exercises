import { useContext } from "react";
import UserContext from "../context/UserContext";

function Dashboard() {
  const { state } = useContext(UserContext);

  return (
    <div>
      {state.user && (
        <div className="App">
          <h3>First Name: {state.user.first_name}</h3>
          <h3>Last Name: {state.user.last_name}</h3>
          <h3>Email: {state.user.email}</h3>
          <div>
              <img src={state.user.avatar} alt="pic" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
