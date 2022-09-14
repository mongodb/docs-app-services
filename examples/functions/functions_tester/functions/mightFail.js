async function callFlakyExternalService(val) {
  await sleep(10);
  if (val === 3) {
    return true;
  } else {
    val++;
    throw new Error("broken!");
  }
}
// :snippet-start: recursive-error-handling
// Utility function to suspend execution of current process
async function sleep(milliseconds) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// Set global variables to be used by all calls to `mightFail`
const MAX_RETRIES = 5;
let currentRetries = 0;
let errorMessage = "";

async function mightFail(...inputVars) {
  if (currentRetries === MAX_RETRIES) {
    console.error(
      `Reached maximum number of retries (${MAX_RETRIES}) without successful execution.`
    );
    console.error(errorMessage);
    return;
  }
  try {
    // operation that might fail
    await callFlakyExternalService(...inputVars);
  } catch (err) {
    errorMessage = err.message;
    // throttle retries to be at most every 5000 milliseconds
    await sleep(100);
    currentRetries++;
    mightFail(...inputVars);
  }
}

exports = mightFail;
// :snippet-end:

if (typeof module !== "undefined") {
  module.exports = mightFail;
}
