# Unhandled Exception in Asynchronous Node.js Server

This repository demonstrates a common error in Node.js servers where an unhandled exception within an asynchronous operation can lead to server crashes.

## Bug Description

The `bug.js` file contains a simple HTTP server.  If you request the `/error` endpoint, an exception is thrown within a `setTimeout` callback.  This exception is not handled properly, causing the server to terminate unexpectedly.

## Solution

The `bugSolution.js` file shows how to properly handle this type of error using error handling within the asynchronous operation or using `process.on('uncaughtException')` for global error handling which is generally discouraged unless necessary, and logging the error appropriately.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`
4. Access `http://localhost:3000/error` in your browser or using a tool like `curl`.

The server will crash and you will see an error message in the console.

## How to test the solution

1. Run `node bugSolution.js`
2. Access `http://localhost:3000/error`.

The server will remain running and you will see a more graceful error message in the console. This demonstrates that the error is handled without crashing the server.