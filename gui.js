const buttons = {
  get: function(selector) {
    return document.querySelector(selector);
  }
};

const template = {
  getEmp: function() {
    let emp = new Object();
    emp.name = "default";
    emp.officeNum = "N/A";
    emp.phoneNum = "N/A";
    return emp;
  }
};

const buildGUI = {
  mainContent: function() {
    return document.querySelector("#content");
  },
  createSlogan: function () {
    let sloganDiv = document.createElement("div");
    sloganDiv.textContent = "The Minimalist Directory.";
    return sloganDiv;
  },
  createSingleInputScreen: function() {
    
    buildGUI.mainContent().innerHTML = "";
    $(buildGUI.mainContent()).css("background-color", "rgba(153,115,121, 0.9)");
    let inputForm = document.createElement("div");
    let top = document.createElement("section");
    let bottom = document.createElement("section");

    let userInput = document.createElement("input");
    // <i class="fas fa-search"></i>
    let inputSubmit = document.createElement("i");
    // let divider = document.createElement("hr");
    let results = document.createElement("div");

    inputForm.setAttribute("id", "inputForm");

    top.setAttribute("id", "top");
    bottom.setAttribute("id", "bottom");
    userInput.setAttribute("id", "userInput");
    userInput.setAttribute("class", "userInput");
    inputSubmit.classList.add("fas");
    inputSubmit.classList.add("fa-search");
    inputSubmit.setAttribute("id", "submitButton");
    results.setAttribute("id", "results");
    // inputSubmit.textContent = "Text";

    top.appendChild(buildGUI.createSlogan());
    top.appendChild(userInput);
    top.appendChild(inputSubmit);
    // top.appendChild(divider);

    bottom.appendChild(results);

    inputForm.appendChild(top);
    inputForm.appendChild(bottom);

    _functions.render(inputForm);
  },
  createMultipleInputScreen: function() {
    buildGUI.mainContent().innerHTML = "";
    $(buildGUI.mainContent()).css("background-color", "rgba(153,115,121, 0.9)");
    /****************************************************/

    let rowOne = document.createElement("div");

    let nameLabel = document.createElement("div");
    nameLabel.textContent = "Name";
    nameLabel.setAttribute("class", "label");

    let nameInput = document.createElement("input");
    nameInput.setAttribute("id", "userInput");
    nameInput.setAttribute("class", "userInput");

    rowOne.appendChild(nameLabel);
    rowOne.appendChild(nameInput);

    /****************************************************/

    let rowTwo = document.createElement("div");

    let numberLabel = document.createElement("div");
    numberLabel.textContent = "Number";
    numberLabel.setAttribute("class", "label");

    let numberInput = document.createElement("input");
    numberInput.setAttribute("id", "numberInput");
    numberInput.setAttribute("class", "userInput");

    rowTwo.appendChild(numberLabel);
    rowTwo.appendChild(numberInput);

    /****************************************************/

    let rowThree = document.createElement("div");

    let phoneLabel = document.createElement("div");
    phoneLabel.textContent = "Phone";
    phoneLabel.setAttribute("class", "label");

    let phoneInput = document.createElement("input");
    phoneInput.setAttribute("id", "phoneInput");
    phoneInput.setAttribute("class", "userInput");

    rowThree.appendChild(phoneLabel);
    rowThree.appendChild(phoneInput);

    /****************************************************/

    let inputSubmit = document.createElement("div");
    inputSubmit.setAttribute("id", "submitButton");
    inputSubmit.textContent = "Text";

    /****************************************************/

    // let divider = document.createElement("hr");

    /****************************************************/

    let results = document.createElement("div");
    results.setAttribute("id", "results");

    /****************************************************/

    let top = document.createElement("section");
    top.setAttribute("id", "top");
    top.appendChild(buildGUI.createSlogan());
    top.appendChild(rowOne);
    top.appendChild(rowTwo);
    top.appendChild(rowThree);
    top.appendChild(inputSubmit);
    // top.appendChild(divider);

    /****************************************************/

    let bottom = document.createElement("section");
    bottom.setAttribute("id", "bottom");
    bottom.appendChild(results);

    /****************************************************/

    let inputForm = document.createElement("div");
    inputForm.setAttribute("id", "inputForm");
    inputForm.appendChild(top);
    inputForm.appendChild(bottom);

    buildGUI.mainContent().appendChild(inputForm);

  },
  createTable: function() {
    buildGUI.mainContent().innerHTML = "";
    $(buildGUI.mainContent()).css("background-color", "rgba(153,115,121, 0.9)");
    var table = document.createElement("table");
    table.classList.add("display");
    table.setAttribute("id", "employeeTable");

    var tableHead = document.createElement("thead");
    var headerRow = document.createElement("tr");

    var nameColumn = document.createElement("th");
    nameColumn.innerHTML = "Name";

    var officeNumColumn = document.createElement("th");
    officeNumColumn.innerHTML = "Office Number";

    var phoneNumColumn = document.createElement("th");
    phoneNumColumn.innerHTML = "Phone Number";

    headerRow.appendChild(nameColumn);
    headerRow.appendChild(officeNumColumn);
    headerRow.appendChild(phoneNumColumn);
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);

    var tableBody = document.createElement("tbody");

    state.employeeList.forEach(e => {
      let row = document.createElement("tr");

      let name = row.insertCell(0);
      name.innerHTML = e.name;

      let officeNum = row.insertCell(1);
      officeNum.innerHTML = e.officeNum;

      let phoneNum = row.insertCell(2);
      phoneNum.innerHTML = e.phoneNum;

      tableBody.appendChild(row);
    });

    table.appendChild(tableBody);

    buildGUI.mainContent().appendChild(table);

    $("#employeeTable").DataTable();
    $("#employeeTable").css("text-align", "center");
    // $("#employeeTable_wrapper").css("margin", "50px");
  },
  createVerifyScreen: function() {
    buildGUI.createSingleInputScreen();
    document.querySelector("#userInput").setAttribute("placeholder", "Enter name to verify");
    buttons.get("#submitButton").addEventListener("click", _functions.verify);
  },
  createLookUpScreen: function() {
    buildGUI.createSingleInputScreen();
    document.querySelector("#userInput").setAttribute("placeholder", "Enter name to look up");
    buttons.get("#submitButton").addEventListener("click", _functions.lookup);
  },
  createContainsScreen: function() {
    buildGUI.createSingleInputScreen();
    document.querySelector("#userInput").setAttribute("placeholder", "Search for..");
    buttons.get("#submitButton").addEventListener("click", _functions.contains);
  },
  createUpdateScreen: function() {
    buildGUI.createMultipleInputScreen();
    document.querySelector("#submitButton").textContent = "Update";
    buttons.get("#submitButton").addEventListener("click", _functions.update);
  },
  createAddScreen: function() {
    buildGUI.createMultipleInputScreen();
    document.querySelector("#submitButton").textContent = "Add";
    buttons.get("#submitButton").addEventListener("click", _functions.add);
  },
  createDeleteScreen: function() {
    buildGUI.createSingleInputScreen();
    document.querySelector("#userInput").setAttribute("placeholder", "Enter name to delete");
    buttons.get("#submitButton").addEventListener("click", _functions.delete);
  }
};

const _buildGUI = {
  mainContent: function() {}
};
