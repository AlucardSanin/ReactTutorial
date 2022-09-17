import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"
//stylesheet
import "./functionBased/App.css"
// This App uses and old version of react-router-dom npm install react-router-dom@5.2.0
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)