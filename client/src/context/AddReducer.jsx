export default (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        Employees: [...state.Employees, action.payload],
      };
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        Employees: state.Employees.filter(
          (Employee) => Employee.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
