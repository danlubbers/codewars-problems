// https://www.codewars.com/kata/unexpected-parsing/train/javascript

// This code is buggy. Can you fix it?

function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {
      status: msg
    }
  }

console.log(getStatus(true).status, "busy");
