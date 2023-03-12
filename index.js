// Write your solution in this file!
const employee = {
  name: 'Sam',
  streetAddress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updateEmployee = {...employee};
  updateEmployee[key] = value;
  return updateEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
};

function deleteFromEmployeeByKey(employee, key) {
  const deleteEmployeeKey = {...employee};
  delete deleteEmployeeKey[key];
  return deleteEmployeeKey;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
};
