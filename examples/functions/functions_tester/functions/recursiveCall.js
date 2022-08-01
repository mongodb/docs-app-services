// utility function to suspend execution of current thread
async function sleep(milliseconds) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function mightFail(...inputVars) {
  try {
    await callExternalService(...inputVars);
  } catch (_) {
    // throttle retries to be at most every 5000 milliseconds
    await sleep(5000);
    mightFail(...inputVars);
  }
}

exports = mightFail;
