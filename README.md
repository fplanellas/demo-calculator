# React Calculator Component
 This is a simple calculator component built with React.js. It allows you to perform basic arithmetic operations on two numbers.

# Usage
Install the required dependencies by running the following command:
npm install

## Features
Addition: Click the + button to add the two input numbers.
Subtraction: Click the - button to subtract the second number from the first number.
Multiplication: Click the * button to multiply the two input numbers.
Division: Click the / button to divide the first number by the second number.

## How it Works
The component uses the useState hook from React to manage the input values (num1 and num2), the result (result), and the error message (error).
When a button is clicked, the calculate function is called with the corresponding operation as an argument.
Inside the calculate function, the input values are parsed as floating-point numbers. If any of the input values is not a valid number, an error message is set.
The result is calculated based on the selected operation using a switch statement. If division by zero is attempted, an error message is displayed.
The error message and result are rendered conditionally based on their values.

## Customization
You can customize the appearance of the calculator by modifying the CSS styles defined in the App.css file. Feel free to adapt it to fit your project's design.

## Dependencies
This component relies on the following dependencies:

react (version 18 or higher)
@mui/material (version 5.0 or higher)

Please ensure these dependencies are installed in your project.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

