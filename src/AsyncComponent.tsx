import { useState } from "react";

function DogCard(props) {
  const dog = props.dog;
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className={isLiked ? "dogCard liked" : "dogCard"}
      onClick={() => {
        setIsLiked(!isLiked);
      }}
    >
      <img src={dog.url} alt={`cutePup${dog.id}`} />
    </div>
  );
}

export function AsyncComponentFallback() {
  return <div className="dogCard fallback"></div>;
}

export function AsyncComponent(props) {
  const dogs = props.dogs.read();

  return (
    <ul className="unstyledList">
      {dogs.map((dog) => {
        return (
          <li key={dog.id}>
            <DogCard dog={dog} />
          </li>
        );
      })}
    </ul>
  );
}
