# Analysis Report
## Input
- The React Native Todo App allows users to input tasks or to-dos that they want to keep track of. Users can enter task descriptions through an input field and click a "Submit" button to add the task to the list. The app also includes a tab bar that lets users select different views: "All," "Completed," and "Incomplete" tasks. The selection from the tab bar acts as input, influencing what tasks are displayed to the user.

## Process
- The app is built using React Native and follows a component-based architecture. It comprises several components, including App, Heading, Input, Button, TodoList, TodoButton and TabBar. The App component serves as the main container, managing the state of tasks, filtering tasks based on the selected tab, and rendering other components. Each Task has Button to mark its status between 'Done' and 'Delete'.

- The TabBar component provides the selection mechanism for filtering tasks based on their completion status. It communicates with the App component by triggering a change in the type state variable

## Output

- The TabBar component provides the selection mechanism for filtering tasks based on their completion status. It communicates with the App component by triggering a change in the type state variable

- In summary, the React Native Todo App is a versatile tool for creating, organizing, and managing tasks. It uses React Native's component structure to efficiently handle user input, process task data, and present filtered task lists to users.