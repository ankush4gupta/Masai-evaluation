import { useState } from "react";
import "./App.css"

function App() {
  const [match, setMatch] = useState({
    Score: 76,
    Wicket: 2,
    Ball: 50,

  })
  if (match.Score > 100) {
    return <h1>India Won</h1>

  }

  const handlechange = (num, value) => {

    if (value === "Wicket" && match.Wicket < 12) {

      setMatch({ ...match, "Wicket": match.Wicket + num })
      console.log(match.Wicket)
    }
    if (value === "Score") {
      setMatch({ ...match, "Score": match.Score + num })
    }

    if (value === "Ball") {




      setMatch({ ...match, "Ball": match.Ball + num })







    }
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{match.Score}
          <h1 className="scoreCount">
            {
              // show "score" here
            }
          </h1>
        </div>
        <div>

          Wicket:{match.Wicket}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over: {(match.Ball / 6).toFixed(1)}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => handlechange(1, "Score")}>Add 1</button>
        <button className="addScore4" onClick={() => handlechange(4, "Score")}>Add 4</button>
        <button className="addScore6" onClick={() => handlechange(6, "Score")}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => handlechange(1, "Wicket")}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => handlechange(1, "Ball")}>Add 1</button>
      </div>



      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div >
  );
}

export default App;