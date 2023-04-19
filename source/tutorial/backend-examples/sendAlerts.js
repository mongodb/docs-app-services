exports = async function(changeEvent) {

    // Reads the summary field from the latest inserted document
    const fullDocument = changeEvent.fullDocument;
    const summary = fullDocument.summary;

    // Connects to and reads data from your Atlas deployment    
    const mongodb = context.services.get("mongodb-atlas");
    const tasks = mongodb.db("todo").collection("Item");
    const alerts = mongodb.db("todo").collection("alerts");
    const terms = await alerts.distinct("term");

    // Create an alert message that appears in your application's logs
    message = "";
    
    // Checks if the task summary matches any of the terms in the todo.alerts collection
    for (let i = 0; i < terms.length ; i++) {
      if (summary.toLowerCase().includes(terms[i])) {
        message += "The following task has been added to a To-Do list: " + summary +
          ". You have been notified because it contains the alert term, " + terms[i] + ". ";

        // Aggregates any tasks that also contain the term by using an Atlas Search query
        const query = await tasks
        .aggregate([
          {
            $search: {
              compound: {
                must: [{
                  phrase: {
                    query: terms[i],
                    path: "summary",
                  },
                }], 
                mustNot: [{
                  equals: {
                  path: "isComplete",
                  value: true,
                  },
                }],
              },
            },
          },
          {
            $limit: 5,
          },
          {
            $project: {
              _id: 0,
              summary: 1,
            },
          },
        ])
        .toArray();
        relatedTerms = JSON.stringify(query.terms());

      if (relatedTerms != '[]') {
        message += "Related incomplete tasks: ";
        }
      }

      // Return alert message
      console.log(message);
    }
};
