//unit tests to ensure that adding a task correctly increases the array length

const { task, addTask } = require('/home/daughter/Moringa/JavaScript_Learning/Module2/ClassGroupWork/taskFlow.js');

describe("addTask", () => {
  beforeEach(() => {
    // Clear the task array before each test
    task.length = 0;
  });

  test("adding a task increases the array length", () => {
    expect(task.length).toBe(0); // initially empty

    addTask("Module 3", "Not Started", "high");

    expect(task.length).toBe(1); // length should increase by 1
  });

  test("new task has correct properties", () => {
    addTask("Module 4", "In Progress", "medium");

    expect(task[0]).toEqual({
      title: "Module 4",
      status: "In Progress",
      priority: "medium"
    });
  });
});

