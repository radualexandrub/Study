let calculationList = []; // Initialize an empty array to store the calculations

// Check if the calculationList array is stored in local storage
if (localStorage.getItem("calculationList")) {
  // If it is, retrieve it from local storage
  calculationList = JSON.parse(localStorage.getItem("calculationList"));
  displayCalculationList(calculationList);
}

function getFormattedDate(dateString, showDayOfWeek = false) {
  let dateObject = new Date(dateString);
  let year = dateObject.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[dateObject.getMonth()];
  let day = dateObject.getDate().toString().padStart(2, "0");

  if (showDayOfWeek) {
    let dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = dayNames[dateObject.getDay()];
    return dayOfWeek + ", " + day + "-" + month + "-" + year;
  }

  return day + "-" + month + "-" + year;
}

function calculateHoursPerDay(event) {
  methodName = "calculateHoursPerDay()";
  event.preventDefault();

  // Get the values of the input fields and dropdown menu
  var taskName = document.getElementById("taskNameInput").value;
  var estimatedHours = document.getElementById("estimatedHoursInput").value;
  var desiredTimeInDays = document.getElementById("desiredTimeInput").value;
  var desiredTimeUnit = document.getElementById("desiredTimeUnit").value;

  if (!(taskName && estimatedHours && desiredTimeInDays)) {
    document.getElementById("outputContainer").innerHTML =
      '<p class="text-danger">Please make sure that all the inputs are not empty.</p>';
    return;
  }

  // Convert the desired time to days if necessary
  if (desiredTimeUnit === "weeks") {
    desiredTimeInDays *= 7;
  } else if (desiredTimeUnit === "months") {
    desiredTimeInDays *= 30;
  }

  // Calculate the End Date (Deadline)
  var addDate = new Date();
  var endDate = new Date();
  endDate.setDate(addDate.getDate() + parseInt(desiredTimeInDays));

  // Perform the calculation
  var hoursPerDay = estimatedHours / desiredTimeInDays;

  // Save the input and output in an object
  var calculation = {
    taskId: Math.random().toString(16).slice(2),
    taskName: taskName,
    checked: false,
    workedHours: 0,
    estimatedHours: estimatedHours,
    desiredTime: desiredTimeInDays,
    hoursPerDay: hoursPerDay,
    addDate: addDate,
    endDate: endDate,
  };

  // Add the calculation object to the list
  calculationList.push(calculation);

  // Save the updated calculationList array to local storage
  localStorage.setItem("calculationList", JSON.stringify(calculationList));
  console.debug(`${methodName} Task was saved ${JSON.stringify(calculation)}`);

  // Update the inner HTML of the output container
  document.getElementById(
    "outputContainer"
  ).innerHTML = `<p>Task "${taskName}" was added to list!</p><p>To complete "${taskName}" in ${desiredTimeInDays} days (i.e. ${(
    calculation.desiredTime / 30
  ).toFixed(2)} months), 
          you need to invest ${hoursPerDay.toFixed(
            2
          )} hours per day. By starting today, this task would be completed by ${getFormattedDate(
    endDate,
    true
  )}.</p>`;

  // Display the updated calculation list
  displayCalculationList(calculationList);

  // Clear all form's inputs
  document.getElementById("addTaskForm").reset();
}

function deleteCalculation(event) {
  const methodName = "deleteCalculation()";
  let taskIdToDelete =
    event.target.parentElement.parentElement.getAttribute("data-key");
  calculationList = calculationList.filter(
    (task) => task.taskId !== taskIdToDelete
  );

  // Save the updated calculationList array to local storage
  localStorage.setItem("calculationList", JSON.stringify(calculationList));
  console.debug(
    `${methodName} task with id=${taskIdToDelete} deleted from list.`
  );

  // Display the updated calculation list
  displayCalculationList(calculationList);
}

let taskIdToEdit;
let taskFound;
let taskFoundIndex;
function editCalculation(event, action) {
  methodName = "editCalculation()";
  if (action === "openModal") {
    // Retrieve Selected Task to Edit
    taskIdToEdit =
      event.target.parentElement.parentElement.getAttribute("data-key");
    taskFound = calculationList.find((task) => task.taskId === taskIdToEdit);
    taskFoundIndex = calculationList.findIndex(
      (task) => task.taskId === taskIdToEdit
    );
    console.debug(`${methodName} Editing Task ${JSON.stringify(taskFound)}`);

    // Populate Modal with Current Task Information
    document.getElementById("taskNameInputEdit").value = taskFound.taskName;
    document.getElementById("workedHoursInputEdit").value =
      taskFound.workedHours;
    document.getElementById("estimatedHoursInputEdit").value =
      taskFound.estimatedHours;
    document.getElementById("desiredTimeInputEdit").value =
      taskFound.desiredTime;
    document.getElementById("desiredTimeUnitEdit").value = "days";
    document.getElementById("addDateInputEdit").value = taskFound.addDate.slice(
      0,
      10
    );
  } else if (action === "saveTask") {
    // Get new Task Information
    let taskNewName = document.getElementById("taskNameInputEdit").value;
    let taskNewEstimatedHours = document.getElementById(
      "estimatedHoursInputEdit"
    ).value;
    let taskNewWorkedHours = document.getElementById(
      "workedHoursInputEdit"
    ).value;
    let taskNewDesiredTimeInDays = document.getElementById(
      "desiredTimeInputEdit"
    ).value;
    let taskNewDesiredTimeUnit = document.getElementById(
      "desiredTimeUnitEdit"
    ).value;
    let taskNewAddDate = document.getElementById("addDateInputEdit").value;

    // Update Task Information
    {
      // Update Task New Name and New Estimated Hours
      calculationList[taskFoundIndex].taskName = taskNewName;
      calculationList[taskFoundIndex].workedHours = taskNewWorkedHours;
      calculationList[taskFoundIndex].estimatedHours = taskNewEstimatedHours;

      // Convert the desired time to days if necessary
      // and Update Task New Desired Time in Days
      if (taskNewDesiredTimeUnit === "weeks") {
        taskNewDesiredTimeInDays *= 7;
      } else if (taskNewDesiredTimeUnit === "months") {
        taskNewDesiredTimeInDays *= 30;
      }
      calculationList[taskFoundIndex].desiredTime = taskNewDesiredTimeInDays;

      // Update Task New Date and End Date
      let newAddDate = new Date(taskNewAddDate);
      let newEndDate = new Date();
      newEndDate.setDate(
        newAddDate.getDate() + parseInt(taskNewDesiredTimeInDays)
      );
      calculationList[taskFoundIndex].addDate = newAddDate.toISOString();
      calculationList[taskFoundIndex].endDate = newEndDate.toISOString();

      // Perform the calculation and Update Task New Hours per Day
      let newHoursPerDay = taskNewEstimatedHours / taskNewDesiredTimeInDays;
      calculationList[taskFoundIndex].hoursPerDay = newHoursPerDay;
    }

    // Save & Display the updated calculationList array to local storage
    localStorage.setItem("calculationList", JSON.stringify(calculationList));
    displayCalculationList(calculationList);
  }
}

function toggleCheckedTask(event) {
  taskIdToEdit =
    event.target.parentElement.parentElement.getAttribute("data-key");
  taskFoundIndex = calculationList.findIndex(
    (task) => task.taskId === taskIdToEdit
  );

  if (event.target.checked) {
    calculationList[taskFoundIndex].checked = true;
  } else {
    calculationList[taskFoundIndex].checked = false;
  }

  localStorage.setItem("calculationList", JSON.stringify(calculationList));
}

document
  .getElementById("inputSearchThroughList")
  .addEventListener("keyup", searchThroughList);
function searchThroughList(event) {
  event.preventDefault();
  let resultedTasksList = [];
  let searchedText = event.target.value.toLowerCase().trim();
  for (const task of calculationList) {
    if (task.taskName.toLowerCase().indexOf(searchedText) !== -1) {
      resultedTasksList.push(task);
    }
  }

  // if input field for Search is empty
  if (!searchedText) {
    displayCalculationList(calculationList);
  } else {
    displayCalculationList(resultedTasksList);
  }
}

function displayCalculationList(list) {
  // Clear the output container
  document.getElementById("outputTable").innerHTML = "";

  // Check if the calculationList array is empty
  if (list.length === 0) {
    // If it is, display a message
    document.getElementById("outputTable").innerHTML =
      "<p>No calculations to display.</p>";
  } else {
    // If it is not, construct the HTML for the table
    var tableHTML = '<div class="table-responsive">';
    tableHTML += '<table class="table">';
    tableHTML += "<thead>";
    tableHTML += "<tr style='color: var(--primary-color)'>";
    tableHTML += '<th class="align-middle" scope="col"></th>';
    tableHTML += '<th class="align-middle" scope="col">#</th>';
    tableHTML += '<th class="align-middle" scope="col">Task Name</th>';
    tableHTML +=
      '<th class="align-middle" scope="col" title="Worked hours for task completion">Worked</th>';
    tableHTML +=
      '<th class="align-middle" scope="col" title="Estimated hours for task completion">Estimated</th>';
    tableHTML +=
      '<th class="align-middle" scope="col" title="Worked / Estimated hours completion rate">%</th>';
    tableHTML +=
      '<th class="align-middle"scope="col" title="Desired time to complete the task">Desired Time</th>';
    tableHTML +=
      '<th class="align-middle" scope="col" title="Time needed to be invested in hours per day">Hours per Day</th>';
    tableHTML +=
      '<th class="align-middle" scope="col" title="Date when Task was added">Add Date</th>';
    tableHTML +=
      '<th class="align-middle" scope="col" title="Possible end date for task completion">End Date</th>';
    tableHTML += '<th class="align-middle" scope="col"></th>';
    tableHTML += '<th class="align-middle" scope="col"></th>';
    tableHTML += "</tr>";
    tableHTML += "</thead>";
    tableHTML += "<tbody>";

    // Iterate over the list array
    for (var i = 0; i < list.length; i++) {
      // Get the current calculation
      var calculation = list[i];

      // Construct the HTML for the calculation
      tableHTML += `<tr data-key=${calculation.taskId}>`;
      tableHTML += `<td title="Toggle task completion" scope="row"><input ${
        calculation.checked ? "checked" : ""
      } class="form-checkbox" type="checkbox" onclick="toggleCheckedTask(event)"></th>`;
      tableHTML += '<td scope="row">' + (i + 1) + "</th>";
      tableHTML += "<td>" + calculation.taskName + "</td>";
      tableHTML += `<td>${calculation.workedHours} hours</td>`;
      tableHTML += `<td>${calculation.estimatedHours} hours</td>`;
      tableHTML += `<td>${(
        (calculation.workedHours / calculation.estimatedHours) *
        100
      ).toFixed(0)}%</td>`;
      tableHTML +=
        "<td>" +
        calculation.desiredTime +
        " days" +
        " (" +
        (calculation.desiredTime / 30).toFixed(2) +
        " months)</td>";
      tableHTML += `<td title="${(calculation.hoursPerDay * 60).toFixed(
        0
      )} minutes">${calculation.hoursPerDay.toFixed(2)}</td>`;
      tableHTML += `<td title="${getFormattedDate(
        calculation.addDate,
        true
      )}">${getFormattedDate(calculation.addDate)}</td>`;
      tableHTML += `<td title="${getFormattedDate(
        calculation.endDate,
        true
      )}">${getFormattedDate(calculation.endDate)}</td>`;
      tableHTML += `<td><button type="button" class="btn btn-primary edit-button" data-toggle="modal" data-target="#taskEditModal"
            onclick="editCalculation(event, 'openModal')" title="Edit this task">Edit</button></td>`;
      tableHTML += `<td><button type="button" class="btn btn-danger delete-button"
            onclick="deleteCalculation(event)" title="Delete this task">X</button></td>`;
      tableHTML += "</tr>";
    }

    // Close the table HTML
    tableHTML += "</tbody>";
    tableHTML += "</table>";

    // Add the table HTML to the output container
    document.getElementById("outputTable").innerHTML = tableHTML;
  }
}

/* Export Tasks List as JSON */
function exportListAsJSON() {
  // https://stackoverflow.com/questions/33780271/export-a-json-object-to-a-text-file
  const methodName = "exportListAsJSON()";
  const filename = `TasksList_${new Date().toISOString().slice(0, 10)}.json`;
  const jsonStr = JSON.stringify(calculationList);

  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(jsonStr)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();
  console.debug(
    `${methodName} ${calculationList.length} tasks exported to JSON File.`
  );
  document.body.removeChild(element);
}

/* Import Tasks List from JSON */
document
  .getElementById("importJSONFileForm")
  .addEventListener("submit", importListAsJSON);
function importListAsJSON(event) {
  event.preventDefault();

  let file = document.getElementById("JSONFileInput");
  let importFileOutputMessage = document.getElementById(
    "importJSONFileFormOutputMessages"
  );
  if (!file.value.length) {
    importFileOutputMessage.innerHTML =
      '<p class="text-danger">Please select a file to continue.</p>';
    return;
  }

  const importListAsJSONonloadCallback = (event) => {
    methodName = "importListAsJSONonloadCallback()";
    let tasksListJSON = JSON.parse(event.target.result);
    console.debug(`${methodName} JSON Read ${JSON.stringify(tasksListJSON)}`);

    // Overwrite or Concatenate to current Tasks list
    let radioInput = Array.from(
      document.getElementsByName("JSONFileRadioInputs")
    ).find((r) => r.checked).value;
    if (radioInput === "JSONFileRadioConcatenateList") {
      calculationList = calculationList.concat(tasksListJSON);
      importFileOutputMessage.innerHTML = `<p>The current Tasks list was concatenated with ${tasksListJSON.length} tasks found from ${file.files[0].name}.</p>`;
    } else if (radioInput === "JSONFileRadioOverwriteList") {
      calculationList = tasksListJSON;
      importFileOutputMessage.innerHTML = `<p>The current Tasks list was overwritten with ${tasksListJSON.length} tasks found from ${file.files[0].name}.</p>`;
    }

    localStorage.setItem("calculationList", JSON.stringify(calculationList));
    displayCalculationList(calculationList);
    document.getElementById("importJSONFileForm").reset();
  };

  let reader = new FileReader();
  reader.onload = importListAsJSONonloadCallback; // Callback event to run when the file is read
  reader.readAsText(file.files[0]); // Read the file

  // Note: If form is reset here, then the first radio button is always selected
  // since everything else is executed before calling the callback function
  // document.getElementById("importJSONFileForm").reset();
}

/* Dark Mode */
const checkboxDarkTheme = document.getElementById("toggleDarkMode");
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    checkboxDarkTheme.checked = true;
  }
}

checkboxDarkTheme.addEventListener("change", toggleDarkTheme);
function toggleDarkTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
