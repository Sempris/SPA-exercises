import { useParams } from "react-router-dom";
import whiskeyPic from "../images/whiskey.jpg";
import hazelPic from "../images/hazel.jpg";
import tubbyPic from "../images/tubby.jpg";

function Dog() {
  const params = useParams();
  const dogs = [
    {
      name: "Whiskey",
      id: 0,
      image: whiskeyPic,
      age: 4,
      facts: [
        "Whiskey loves eating popcorn",
        "Whiskey is a terrible guard dog",
        "Whiskey wants to cuddle with you",
      ],
    },
    {
      name: "Hazel",
      id: 1,
      age: 0,
      image: hazelPic,
      facts: [
        "Hazel has a lot of energy",
        "Hazel is highly intelligent",
        "Hazel loves people more than dogs",
      ],
    },
    {
      name: "Tubby",
      id: 2,
      age: 4,
      image: tubbyPic,
      facts: [
        "Tubby is really stupid",
        "Tubby does not like walks",
        "Angelina hates Tubby",
      ],
    },
  ];

  let currData = dogs.find((x) => x.name === params.dog);

  return (
    <div className="result">
      <h2>Name: {currData.name}</h2>
      <h3>Age: {currData.age}</h3>
      <h4>{currData.facts[0]}</h4>
      <h4>{currData.facts[1]}</h4>
      <h4>{currData.facts[2]}</h4>
    </div>
  );
}

export default Dog;
