import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./Store/Store.jsx";

 // Import your Redux store

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap the app with the Redux Provider */}
      <Auth0Provider
        domain="dev-aecynpb7daj85dgm.us.auth0.com"
        clientId="EWkorGxDh19At9061adWjX1XB5QYqcNF"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
