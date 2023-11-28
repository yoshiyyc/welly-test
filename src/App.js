import { useState } from "react";

function App() {
  // 1. JavaScript: 字串反轉
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  console.log(reverseString("Hello")); // 預期輸出: "olleH”

  /////////////////////////

  // 2. JavaScript: 陣列過濾
  function filterNumbersGreaterThanFive(numbers) {
    return numbers.filter((i) => i > 5);
  }

  const numbers = [2, 8, 4, 10, 1, 7];
  console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

  //////////////////////////

  // 3. JavaScript: 重構
  function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`; // Ans: 利用 ES6 的 Template literals（樣板字面值），讓程式碼變得更簡潔及直覺
  }

  console.log(formatName("First", "Last"));

  ///////////////////////////////////////////

  // 4. React: 條件渲染
  // function ConditionalRendering({ isLoggedIn }) {
  //   return isLoggedIn ? <LoggedInContent /> : <NotLoggedInContent />;
  // }

  ///////////////////////////////////////////

  // 5. React: 組件
  const [counter, setCounter] = useState(0);

  function addCount() {
    setCounter(counter + 1);
  }

  function subtractCount() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <div className="container d-flex align-items-center flex-column">
        <h2 className="my-3">{counter}</h2>
        <div className="d-flex">
          <button className="btn btn-primary mx-2 px-4" onClick={addCount}>
            +1
          </button>
          <button className="btn btn-primary mx-2 px-4" onClick={subtractCount}>
            -1
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
