import Card from "./Card";
import React from "react";

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card 
              key={robots[i].id} 
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;