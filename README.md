# React Lottery Game

A simple lottery game built with React.

## How It Works

* Click **"Get New Ticket"** to generate a random 3-digit ticket number.
* The digits of the ticket number are added together.
* If the sum of the digits is **15**, you win the lottery.
* Otherwise, you lose.

### Example

```text
Ticket: 159

1 + 5 + 9 = 15
 You won the lottery!
```

## Concepts Used

* React `useState`
* Event handling with `onClick`
* JavaScript functions
* `Math.random()` and `Math.floor()`
* `while` loop
* State updates
* Conditional rendering

## Main Logic

The code is divided into three functions:

```text
generateVal()
     ↓
sumOfDigits()
     ↓
checkSum()
```

* `generateVal()` → generates the ticket number.
* `sumOfDigits()` → calculates the sum of its digits.
* `checkSum()` → checks whether the sum is `15` and updates the result.

## Tech Stack

* React
* JavaScript
* Vite


## Feedback

This is a learning project, and I wrote the logic to practice React and JavaScript fundamentals.

If you see a **cleaner, simpler, or better way** to implement this, feel free to suggest improvements. I’d love to learn from your feedback!
