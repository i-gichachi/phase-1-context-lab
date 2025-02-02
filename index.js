// Function to create an employee record
function createEmployeeRecord(data) {
    return {
      firstName: data[0],
      familyName: data[1],
      title: data[2],
      payPerHour: data[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Function to create employee records from an array of arrays
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
  
  // Function to add a timeIn event to an employee's record
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({ type: 'TimeIn', date, hour: parseInt(hour, 10) });
    return this;
  }
  
  // Function to add a timeOut event to an employee's record
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({ type: 'TimeOut', date, hour: parseInt(hour, 10) });
    return this;
  }
  
  // Function to calculate hours worked on a specific date
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }
  
  // Function to calculate wages earned on a specific date
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
  
  // Function to calculate total wages for an employee
  function allWagesFor() {
    const datesWorked = this.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
    return totalWages;
  }
  
  // Function to find an employee record by first name
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
  }
  
  // Function to calculate total payroll for all employees
  function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
    return totalPayroll;
  }
  
  
  

