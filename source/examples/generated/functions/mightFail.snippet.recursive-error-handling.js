// Utility function to suspend execution of current process
async function sleep(milliseconds) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// Set variables to be used by all calls to `mightFail`
const MAX_RETRIES = 5;
let currentRetries = 0;
let errorMessage = "";


async function mightFail(...inputVars) {
  if (currentRetries === MAX_RETRIES) {
    console.error(
      `Reached maximum number of retries (${MAX_RETRIES}) without successful execution.`
    );
    console.error("Error Message:", errorMessage);
    return;
  }
  let res;
  try {
    // operation that might fail
    res = await callFlakyExternalService(...inputVars);
  } catch (err) {
    errorMessage = err.message;
    // throttle retries to be at most every 5000 milliseconds
    await sleep(5000);
    currentRetries++;
    res = await mightFail(...inputVars);
  }
  return res;
}

exports = mightFail;
