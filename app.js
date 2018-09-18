const state = {
  action: "",
  userInput_Search: "",
  userInput_Name: "",
  userInput_Number: "",
  userInput_Phone: "",
  submitButton: "",
  employeeList: [
    {
      name: "Jan",
      officeNum: 1,
      phoneNum: "222-222-2222"
    },
    {
      name: "Juan",
      officeNum: 304,
      phoneNum: "489-789-8789"
    },
    {
      name: "Margie",
      officeNum: 789,
      phoneNum: "789-789-7897"
    },
    {
      name: "Sara",
      officeNum: 32,
      phoneNum: "222-789-4654"
    },
    {
      name: "Tyrell",
      officeNum: 3,
      phoneNum: "566-621-0452"
    },
    {
      name: "Tasha",
      officeNum: 213,
      phoneNum: "789-766-5675"
    },
    {
      name: "Ty",
      officeNum: 211,
      phoneNum: "789-766-7865"
    },
    {
      name: "Sarah",
      officeNum: 345,
      phoneNum: "222-789-5231"
    }
  ]
}

const _functions = {
  render: function (...props) {
    props.forEach(e => {  
      _functions.append(e);
   });
  },
  append: (content) => {
    const div = document.createElement('div');
    div.appendChild(content);
    buildGUI.mainContent().appendChild(div);
  },
  getInput: function () {
    let data = new Object();
    data.name = document.querySelector("#userInput").value;
    data.officeNum = document.querySelector("#numberInput").value;
    data.phoneNum = document.querySelector("#phoneInput").value;
    return data;
  },
  addListeners: {
    printClick: function () {
      buttons.get("#print").addEventListener("click", buildGUI.createTable);      
    },
    verifyClick: function () {
      buttons.get("#verify").addEventListener("click", buildGUI.createVerifyScreen);      
    },
    lookUpClick: function () {
      buttons.get("#lookup").addEventListener("click", buildGUI.createLookUpScreen);      
    },
    containsClick: function () {
      buttons.get("#contains").addEventListener("click", buildGUI.createContainsScreen);
    },
    updateClick:  function () {
      buttons.get("#update").addEventListener("click", buildGUI.createUpdateScreen);
    },
    addClick:   function () {
      buttons.get("#add").addEventListener("click", buildGUI.createAddScreen);
    },
    deleteClick:  function () {
      buttons.get("#delete").addEventListener("click", buildGUI.createDeleteScreen);
    }
  },
  printEmp: function (employee) {
    let results = document.querySelector("#results");
    let empInstance = document.createElement('div');

    let name = document.createElement('p'); name.textContent = `Name: ${employee.name}`;
    let officeNum = document.createElement('p'); officeNum.textContent = `Office Number: ${employee.officeNum}`;
    let phoneNum = document.createElement('p'); phoneNum.textContent = `Phone: ${employee.phoneNum}`;
    let lineSpace = document.createElement('br');

    empInstance.appendChild(name);
    empInstance.appendChild(officeNum);
    empInstance.appendChild(phoneNum);
    empInstance.appendChild(lineSpace);

    results.appendChild(empInstance);
    
  },
  verify: function () {
    let userInput = document.querySelector("#userInput").value;
    let results = document.querySelector("#results");
    let emp = template.getEmp();
    let exists = false;

    state.employeeList.forEach( e => {
      if(userInput === e.name){
        exists = true;
        emp = e;
      }
    })
    
    results.textContent = exists ? "Employee Found" : "Employee Not Found";

    let data = {
      exists: exists,
      emp: emp
    }

    return data;
  },
  lookup: function () {
    let data = _functions.verify();
    let results = document.querySelector("#results");
    results.innerHTML = "";

    if(data.exists) {
      _functions.printEmp(data.emp);
    } else {
      results.textContent = "Employee Not Found";
    }

  },
  contains: function () {
    let results = document.querySelector("#results");
    results.innerHTML = "";
    let searchString = document.querySelector("#userInput").value;
    let matchedList = [];

    matchedList = state.employeeList.filter(
        employee => employee.name.toLowerCase().includes(searchString.toLowerCase()));

    if(matchedList.length > 0 ){
      matchedList.forEach ( e => { _functions.printEmp(e); })
    } else {
      results.textContent = "Employees Not Found";
    }
  },
  update: function () {
    let data = _functions.verify();
    let results = document.querySelector("#results");
    let input = _functions.getInput();

    results.innerHTML = "";

    if(data.exists) {
      data.emp.name = input.name;
      data.emp.officeNum = input.officeNum;
      data.emp.phoneNum = input.phoneNum;
      _functions.printEmp(data.emp);
    } else {
      results.textContent = "Employee Not Found";
    }
    
  },
  add:  function () {
    let data = _functions.verify();
    let results = document.querySelector("#results");
    let input = _functions.getInput();

    results.innerHTML = "";

    if(data.exists) {
      data.emp.name = input.name;
      data.emp.officeNum = input.officeNum;
      data.emp.phoneNum = input.phoneNum;
      _functions.printEmp(data.emp);
    } else {
      state.employeeList.push(input);
      _functions.printEmp(input);
    }

  },
  delete: function () {
    let data = _functions.verify();
    let results = document.querySelector("#results");

    results.innerHTML = "";

    if(data.exists) {
      for(let i = 0; i < state.employeeList.length; i ++) {
        if(data.emp.name === state.employeeList[i].name) {
          state.employeeList.splice(i, 1);
        }
      }
      results.textContent = "Employee Deleted";
    } else {
      results.textContent = "Employee Not Found";
    }
  }
}

_functions.addListeners.printClick();
_functions.addListeners.verifyClick();
_functions.addListeners.lookUpClick();
_functions.addListeners.containsClick();
_functions.addListeners.updateClick();
_functions.addListeners.addClick();
_functions.addListeners.deleteClick();