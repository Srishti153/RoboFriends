import React from "react";
import Card from "./card";
import "./list.css";

const List = ({robots}) => {
     return (
    <div>
      <div className="row">
      {
        robots.map((user, i) => {
          return (
              <div className="column"> 
              <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}  />
            </div>
          );
        })
      }
      </div>
    </div>
  );
}

export default List;