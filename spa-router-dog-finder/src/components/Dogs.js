import { Link } from "react-router-dom";
import whiskeyPic from "../images/whiskey.jpg";
import hazelPic from "../images/hazel.jpg";
import tubbyPic from "../images/tubby.jpg";

function Dogs() {
  return (
    <div className="main">
      <div>
        <img src={whiskeyPic} alt="" />
        <p>
          <Link to={`/dogs/Whiskey`}>Whiskey</Link>
        </p>
      </div>
      <div>
        <img src={hazelPic} alt="" />
        <p>
          <Link to={`/dogs/Hazel`}>Hazel</Link>
        </p>
      </div>
      <div>
        <img src={tubbyPic} alt="" />
        <p>
          <Link to={`/dogs/Tubby`}>Tubby</Link>
        </p>
      </div>
    </div>
  );
}

export default Dogs;
