console.log("------Welcome in JS----------");

const step1 = `
  <select>
    <option value="" disabled selected>Select Something</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
  <button onClick="ShowSecondStep()">Next</button>
`;

const step2 = `<form action="" onsubmit="return false">
        <div>
          <label for="email">Email</label>
          <input type="email" />
        </div>
        <div>
          <label for="password">Email</label>
          <input type="password" />
        </div>
        <button onClick="ShowFirstStep()">Back</button>
        <button>Send</button>
      </form>`;

function ShowFirstStep() {
  const leftSide = document.getElementsByClassName("left")[0];
  leftSide.innerHTML = step1;
}

function ShowSecondStep() {
  const leftSide = document.getElementsByClassName("left")[0];
  leftSide.innerHTML = step2;
}

ShowFirstStep();
