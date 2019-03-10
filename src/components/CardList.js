import Card from "./Card";
import React from "react";

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card 
              key={user.id} 
              id={user.id} 
              name={user.name}
              // example below using robots[index] syntax 
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;