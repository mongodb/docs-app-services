const axios = require("axios");
const { getAuthTokens } = require("./utils");
require("dotenv").config();

async function listSecrets(groupId, appId, accessToken) {
  const endpoint = `https://realm.mongodb.com/api/admin/v3.0/groups/${groupId}/apps/${appId}/secrets`;
  const { data: res } = await axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
}

async function createSecret(
  groupId,
  appId,
  accessToken,
  secretName,
  secretValue
) {
  const endpoint = `https://realm.mongodb.com/api/admin/v3.0/groups/${groupId}/apps/${appId}/secrets`;
  const data = { name: secretName, value: secretValue };
  const { data: res } = await axios.post(endpoint, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log("Created secret: " + secretName);
  return res;
}

async function updateSecret(
  groupId,
  appId,
  accessToken,
  secretId,
  secretName,
  secretValue
) {
  const endpoint = `https://realm.mongodb.com/api/admin/v3.0/groups/${groupId}/apps/${appId}/secrets/${secretId}`;
  const data = { name: secretName, value: secretValue };
  const { data: res } = await axios.put(endpoint, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log("Updated secret: " + secretName);
  return res;
}

async function run() {
  const {
    PUBLIC_API_KEY,
    PRIVATE_API_KEY,
    APP_SERVICES_GROUP_ID,
    APP_SERVICES_APP_ID,
  } = process.env;
  const { access_token } = await getAuthTokens(PUBLIC_API_KEY, PRIVATE_API_KEY);
  const currentSecrets = await listSecrets(
    APP_SERVICES_GROUP_ID,
    APP_SERVICES_APP_ID,
    access_token
  );
  const secretNames = Object.keys(process.env).filter((key) =>
    key.startsWith("APP_SECRET_")
  );

  const secretsPromises = secretNames.map((secretName) => {
    const found = currentSecrets.find(({ name, _id }) => {
      if (name === secretName) {
        return updateSecret(
          APP_SERVICES_GROUP_ID,
          APP_SERVICES_APP_ID,
          access_token,
          _id,
          secretName,
          process.env[secretName]
        );
      }
    });
    return (
      found ||
      createSecret(
        APP_SERVICES_GROUP_ID,
        APP_SERVICES_APP_ID,
        access_token,
        secretName,
        process.env[secretName]
      )
    );
  });
  await Promise.all(secretsPromises);
}

run();
