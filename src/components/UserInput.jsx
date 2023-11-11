import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    intialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInputChange(inputIdentifier, newValue) {
    setUserInput((previousInput) => {
      return {
        ...previousInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            value={userInput.intialInvestment}
            onChange={(event) =>
              handleUserInputChange("intialInvestment", event.target.value)
            }
            required
          ></input>
        </p>

        <p>
          <label>Annual investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleUserInputChange("annualInvestment", event.target.value)
            }
            required
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected retrun</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleUserInputChange("expectedReturn", event.target.value)
            }
            required
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) =>
              handleUserInputChange("duration", event.target.value)
            }
            required
          ></input>
        </p>
      </div>
    </section>
  );
}
