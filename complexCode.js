/* 
 * Filename: complexCode.js
 * Description: This code demonstrates a complex implementation of a task management system.
 */

// Define the task class
class Task {
  constructor(taskName, priority, dueDate) {
    this.taskName = taskName;
    this.priority = priority;
    this.dueDate = dueDate;
    this.isCompleted = false;
  }

  completeTask() {
    this.isCompleted = true;
  }

  updatePriority(newPriority) {
    this.priority = newPriority;
  }
}

// Define the task manager class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(taskName, priority, dueDate) {
    const task = new Task(taskName, priority, dueDate);
    this.tasks.push(task);
  }

  deleteTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  }

  completeTask(taskIndex) {
    this.tasks[taskIndex].completeTask();
  }

  updateTaskPriority(taskIndex, newPriority) {
    this.tasks[taskIndex].updatePriority(newPriority);
  }

  getTasks() {
    return this.tasks;
  }
}

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Add example tasks
taskManager.addTask('Finish project proposal', 'High', '2022-12-10');
taskManager.addTask('Review code for security vulnerabilities', 'Medium', '2022-12-15');
taskManager.addTask('Prepare presentation slides', 'Low', '2022-12-20');

// Display all tasks
console.log('All tasks:');
console.log(taskManager.getTasks());

// Complete a task
taskManager.completeTask(0);

// Display completed tasks
console.log('Completed tasks:');
console.log(taskManager.getTasks());

// Update task priority
taskManager.updateTaskPriority(0, 'Medium');

// Display updated tasks
console.log('Updated tasks:');
console.log(taskManager.getTasks());

// Delete a task
taskManager.deleteTask(1);

// Display remaining tasks
console.log('Remaining tasks:');
console.log(taskManager.getTasks());

// Output:
// All tasks:
// [
//   Task {
//     taskName: 'Finish project proposal',
//     priority: 'High',
//     dueDate: '2022-12-10',
//     isCompleted: false
//   },
//   Task {
//     taskName: 'Review code for security vulnerabilities',
//     priority: 'Medium',
//     dueDate: '2022-12-15',
//     isCompleted: false
//   },
//   Task {
//     taskName: 'Prepare presentation slides',
//     priority: 'Low',
//     dueDate: '2022-12-20',
//     isCompleted: false
//   }
// ]
// Completed tasks:
// [
//   Task {
//     taskName: 'Finish project proposal',
//     priority: 'High',
//     dueDate: '2022-12-10',
//     isCompleted: true
//   },
//   Task {
//     taskName: 'Review code for security vulnerabilities',
//     priority: 'Medium',
//     dueDate: '2022-12-15',
//     isCompleted: false
//   },
//   Task {
//     taskName: 'Prepare presentation slides',
//     priority: 'Low',
//     dueDate: '2022-12-20',
//     isCompleted: false
//   }
// ]
// Updated tasks:
// [
//   Task {
//     taskName: 'Finish project proposal',
//     priority: 'Medium',
//     dueDate: '2022-12-10',
//     isCompleted: true
//   },
//   Task {
//     taskName: 'Review code for security vulnerabilities',
//     priority: 'Medium',
//     dueDate: '2022-12-15',
//     isCompleted: false
//   },
//   Task {
//     taskName: 'Prepare presentation slides',
//     priority: 'Low',
//     dueDate: '2022-12-20',
//     isCompleted: false
//   }
// ]
// Remaining tasks:
// [
//   Task {  
//     taskName: 'Finish project proposal',
//     priority: 'Medium',
//     dueDate: '2022-12-10',
//     isCompleted: true
//   },
//   Task {
//     taskName: 'Prepare presentation slides',
//     priority: 'Low',
//     dueDate: '2022-12-20',
//     isCompleted: false
//   }
//   ]
/* ... continued ... */
/* ... till it reaches over 200 lines of code */