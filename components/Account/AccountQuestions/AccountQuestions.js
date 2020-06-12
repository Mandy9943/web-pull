import React, { Component } from "react";
import "./AccountQuestions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Select from "./../../Common/Select";
class AccountQuestions extends Component {
  render() {
    return (
      <div>
        <div className="account-questions-wrap-title">
          <div>
            <h3>preguntas</h3>
          </div>
          <div>
            <Select>
              <option>todo</option>
            </Select>
          </div>
        </div>
        <div className="account-questions-wrap-questions">
          <div className="account-questions-wrap-item">
            <span>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </span>{" "}
            en este momento no tienes preguntas
          </div>
        </div>
      </div>
    );
  }
}

export default AccountQuestions;
