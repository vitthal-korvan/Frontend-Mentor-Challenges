import src from "./assets/images/illustration-article.svg"
import avatar from "./assets/images/image-avatar.webp";

import './App.css'

function App() {
  

  return (
    <>
      <main>
        <div className="parent">
          <div className="child">
            <img
              src={src}
              alt="article"
              className="img"
            />
            <h4>Learning</h4>
            <p>Published 23 Dec 2024</p>
            <h1>HTML &amp; CSS FOUNDATION</h1>
            <p>
              These languages are backbone of every website, defining structure
              content and presentation.
            </p>
            <div className="mini">
              <img src={avatar} alt="avatar" />
              <h4>Greg Hooper</h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App
