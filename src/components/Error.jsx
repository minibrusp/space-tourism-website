import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur vitae porro architecto quae! Ea minus mollitia iste ipsum illo quis, quidem dolorum magni ut architecto, consectetur placeat sed cupiditate culpa corporis excepturi corrupti atque deleniti esse reprehenderit, eum tempore est officia? Sunt rerum sint laboriosam quis porro nihil veniam.</p>

      <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}