import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function List(props) {
  return (
    <div>
      {props.expenseList.map(function (expense) {
        return (
          <div>
            <Card>
              <Card.Body
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Card.Title>{expense.date}</Card.Title>
                <Card.Text>{expense.title}</Card.Text>
                <Card.Text> Cost: ${expense.amount}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
