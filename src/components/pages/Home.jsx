import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="container">
      <div className="images">
        <div className="img3"></div>
        <Link to="./plan_your_trip">
          <button id="tripBtn">Plan your trip</button>
        </Link>
      </div>
      <div className="other">
        <div className="otherimg">
          <div className="img1"></div>
          <div className="img2"></div>
          <div className="img4"></div>
          <div className="img5"></div>
        </div>

        <div className="paragraph">
          <div className="para">
            <p>
              Discover the serene beauty of Sri Lanka, where tranquil beaches,
              lush tea plantations, and ancient temples create a peaceful
              atmosphere.
              <br />
              <br />
              Immerse yourself in Sri Lanka's tropical paradise, where
              palm-fringed beaches, crystal-clear waters, and diverse wildlife
              await. <br />
              <br />
              Experience the warmth and charm of Sri Lanka's people, known for
              their friendliness, genuine smiles, and welcoming nature.
            </p>
          </div>
          <div className="list">
            <p>Here are some of the things you can do in Sri Lanka:</p>
            <ul>
              <li>
                Visit the ancient ruins of Anuradhapura, Polonnaruwa, and
                Sigiriya.
              </li>
              <br />
              <li>Relax on one of the many beautiful beaches.</li>
              <br />
              <li>Go surfing, diving, or snorkeling.</li>
              <br />
              <li>Visit the tea plantations in the hill country.</li>
              <br />
              <li>
                Take a cooking class and learn how to make traditional Sri
                Lankan dishes.
              </li>
              <br />
              <li>
                Visit a Buddhist temple or Hindu temple and learn about the
                country's rich culture.
              </li>
              <br />
              <li>
                Go on a safari and see the wildlife, including elephants,
                leopards, and monkeys.
              </li>
            </ul>
            <p>
              Sri Lanka is a safe and friendly country with a rich history and
              culture. It is a great place to visit for a relaxing beach
              vacation, an adventurous outdoor adventure, or a cultural
              experience.
            </p>
          </div>
          <br />
          <br />

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              dolore, temporibus dolor quis nulla sit unde labore incidunt quae
              eaque qui officia, quisquam quo eius quasi, numquam libero?
              Molestiae, iste!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
