// randomly generates 1, 2, or 3
function getRandomOneTwoThree() {
  return Math.floor(Math.random() * 3) + 1;
}

function functionToRetry(param1, param2) {
  // Throw error if getRandomOneTwoThree returns 1
  const rand = getRandomOneTwoThree();
  if (rand === 1) throw new Error("Uh oh!!");

  // Otherwise return the two values being added
  return param1 + param2;
}

async function additionWithRetry(
  inputVar1,
  inputVar2,
  // create a new `operation_id` if one not provided
  operationId = BSON.ObjectId(),
  // count number of attempts
  attemptNumber = 0
) {
  context.functions.execute(
    "handleRetry",
    functionToRetry,
    "additionWithRetry", // MUST BE NAME OF FUNCTION
    operationId,
    attemptNumber,
    inputVar1,
    inputVar2
  );
}

exports = additionWithRetry;
