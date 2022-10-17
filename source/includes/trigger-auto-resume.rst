If enabled, when this Trigger falls off the oplog
or the resume token cannot be found, the Trigger automatically resumes
processing events. All events from when the resume token
is lost until the Trigger resumes do not have the Trigger fire for them.
