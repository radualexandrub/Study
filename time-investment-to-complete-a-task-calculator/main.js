var calculationList = []; // Initialize an empty array to store the calculations

// Check if the calculationList array is stored in local storage
if (localStorage.getItem("calculationList")) {
  // If it is, retrieve it from local storage
  calculationList = JSON.parse(localStorage.getItem("calculationList"));
  displayCalculationList();
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
  // Prevent the form from being submitted
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
    estimatedHours: estimatedHours,
    desiredTime: desiredTimeInDays,
    desiredTimeUnit: desiredTimeUnit,
    hoursPerDay: hoursPerDay,
    addDate: addDate,
    endDate: endDate,
  };

  // Add the calculation object to the list
  calculationList.push(calculation);

  // Save the updated calculationList array to local storage
  localStorage.setItem("calculationList", JSON.stringify(calculationList));

  // Update the inner HTML of the output container
  document.getElementById(
    "outputContainer"
  ).innerHTML = `<p>To complete the task "${taskName}" in ${desiredTimeInDays} days (i.e. ${(
    calculation.desiredTime / 30
  ).toFixed(2)} months), 
          you need to invest ${hoursPerDay.toFixed(
            2
          )} hours per day. By starting today, this task would be completed by ${getFormattedDate(
    endDate,
    true
  )}.</p>`;

  // Display the updated calculation list
  displayCalculationList();
}

function deleteCalculation(index) {
  // Remove the calculation at the given index from the calculationList array
  calculationList.splice(index, 1);

  // Save the updated calculationList array to local storage
  localStorage.setItem("calculationList", JSON.stringify(calculationList));

  // Display the updated calculation list
  displayCalculationList();
}

let taskIdToEdit;
let taskFound;
let taskFoundIndex;
function editCalculation(event, action) {
  if (action === "openModal") {
    // Retrieve Selected Task to Edit
    taskIdToEdit =
      event.target.parentElement.parentElement.getAttribute("data-key");
    taskFound = calculationList.find((task) => task.taskId === taskIdToEdit);
    taskFoundIndex = calculationList.findIndex(
      (task) => task.taskId === taskIdToEdit
    );

    // Populate Modal with Current Task Information
    document.getElementById("taskNameInputEdit").value = taskFound.taskName;
    document.getElementById("estimatedHoursInputEdit").value =
      taskFound.estimatedHours;
    document.getElementById("desiredTimeInputEdit").value =
      taskFound.desiredTime;
    document.getElementById("desiredTimeUnitEdit").value = "days";
  } else if (action === "saveTask") {
    // Get new Task Information
    let taskNewName = document.getElementById("taskNameInputEdit").value;
    let taskNewEstimatedHours = document.getElementById(
      "estimatedHoursInputEdit"
    ).value;
    let taskNewDesiredTimeInDays = document.getElementById(
      "desiredTimeInputEdit"
    ).value;
    let taskNewDesiredTimeUnit = document.getElementById(
      "desiredTimeUnitEdit"
    ).value;

    // Update Task Information
    {
      // Update Task New Name and New Estimated Hourds
      calculationList[taskFoundIndex].taskName = taskNewName;
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
      let newAddDate = new Date();
      let newEndDate = new Date();
      newEndDate.setDate(
        newAddDate.getDate() + parseInt(taskNewDesiredTimeInDays)
      );
      calculationList[taskFoundIndex].addDate = newAddDate;
      calculationList[taskFoundIndex].endDate = newEndDate;

      // Perform the calculation and Update Task New Hours per Day
      let newHoursPerDay = taskNewEstimatedHours / taskNewDesiredTimeInDays;
      calculationList[taskFoundIndex].hoursPerDay = newHoursPerDay;
    }

    // Save & Display the updated calculationList array to local storage
    localStorage.setItem("calculationList", JSON.stringify(calculationList));
    displayCalculationList();
  }
}

function displayCalculationList() {
  // Clear the output container
  document.getElementById("outputTable").innerHTML = "";

  // Check if the calculationList array is empty
  if (calculationList.length === 0) {
    // If it is, display a message
    document.getElementById("outputTable").innerHTML =
      "<p>No calculations to display.</p>";
  } else {
    // If it is not, construct the HTML for the table
    var tableHTML = '<div class="table-responsive">';
    tableHTML += '<table class="table">';
    tableHTML += "<thead>";
    tableHTML += "<tr>";
    tableHTML += '<th scope="col">#</th>';
    tableHTML += '<th scope="col">Task Name</th>';
    tableHTML +=
      '<th scope="col" title="Estimated hours for task completion">Estimated Hours</th>';
    tableHTML +=
      '<th scope="col" title="Desired time to complete the task">Desired Time</th>';
    tableHTML +=
      '<th scope="col" title="Time needed to be invested in hours per day">Hours per Day</th>';
    tableHTML +=
      '<th scope="col" title="Add/Last updated Date">Add/Update Date</th>';
    tableHTML +=
      '<th scope="col" title="Possible end date for task completion">End Date</th>';
    tableHTML += '<th scope="col"></th>';
    tableHTML += '<th scope="col"></th>';
    tableHTML += "</tr>";
    tableHTML += "</thead>";
    tableHTML += "<tbody>";

    // Iterate over the calculationList array
    for (var i = 0; i < calculationList.length; i++) {
      // Get the current calculation
      var calculation = calculationList[i];

      // Construct the HTML for the calculation
      tableHTML += `<tr data-key=${calculation.taskId}>`;
      tableHTML += '<th scope="row">' + (i + 1) + "</th>";
      tableHTML += "<td>" + calculation.taskName + "</td>";
      tableHTML += "<td>" + calculation.estimatedHours + "</td>";
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
            onclick="deleteCalculation(${i})" title="Delete this task">X</button></td>`;
      tableHTML += "</tr>";
    }

    // Close the table HTML
    tableHTML += "</tbody>";
    tableHTML += "</table>";

    // Add the table HTML to the output container
    document.getElementById("outputTable").innerHTML = tableHTML;
  }
}

/* Export and Import Tasks List as JSON */
function exportListAsJSON() {
  // https://stackoverflow.com/questions/33780271/export-a-json-object-to-a-text-file
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

  document.body.removeChild(element);
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
