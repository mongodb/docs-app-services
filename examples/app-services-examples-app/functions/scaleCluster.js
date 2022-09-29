async function scaleCluster(
  username,
  password,
  projectId,
  clusterName,
  clusterProvider,
  scaleInstanceSize
) {
  const axios = require("axios");
  const url = `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters/${clusterName}`;
  const auth = {
    username,
    password,
  };
  const headers = {
    "Content-Type": ["application/json"],
    "Accept-Encoding": ["bzip, deflate"],
  };

  // Set the request body
  const body = {
    providerSettings: {
      providerName: clusterProvider,
      instanceSizeName: scaleInstanceSize,
    },
  };

  const { data } = await axios.patch(url, body, { auth, headers });
  return data;
}

exports = scaleCluster;
