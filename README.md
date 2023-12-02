Calculator App

This project implements a calculator app with basic arithmetic operations. The ManageOpArr function serves as the nerve center of the calculator, handling various user inputs and operations.
Features

    Basic Operations: Addition, subtraction, multiplication, and division.
    Memory Functions: Save, recall, clear, add, and subtract from memory.
    Advanced Operations: Square root, square, percentage, and sign change.
    Error Handling: Displays "Error" for invalid operations.

Root Component - App

The App component is the root component of the calculator app. It manages the state of operands, operators, output, and memory values. The ManageOpArr function is used to handle operations based on user inputs.
ButtonGrid Component

The ButtonGrid component displays the calculator buttons and handles button clicks. It receives the current button from the user and passes it to the App component for further processing.

The Display component shows the calculator's output, current operation, and memory value.
Button Component

The Button component represents an individual calculator button.

Feel free to explore the code for a detailed understanding of the implementation.