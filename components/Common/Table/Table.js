import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  getKeys(data) {
    const keys = Object.keys(data[0]);
    return keys;
  }
  render() {
    const keys = this.props.data ? this.getKeys(this.props.data.data) : null;
    return (
      <table>
        <thead>
          <tr>
            {this.props.data ? (
              this.props.data.titles.map((item, i) => <th key={i}>{item}</th>)
            ) : (
              <th>No data</th>
            )}
          </tr>
        </thead>
        <tbody>
          {this.props.data
            ? this.props.data.data.map((item, i) => (
                <tr key={i}>
                  {keys.map((p, i) => (
                    <td key={i}>{item[keys[i]]}</td>
                  ))}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    );
  }
}

export default Table;
