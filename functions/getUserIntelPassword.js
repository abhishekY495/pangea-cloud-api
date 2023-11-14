export default async (event) => {
  const hashPrefix = event.url.split("").slice(-5).join("");
  const API_URL = "https://user-intel.aws.eu.pangea.cloud/v1/password/breached";
  const API_TOKEN = process.env.VITE_PANGEA_USER_INTEL_API_TOKEN;

  const respone = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      provider: "spycloud",
      hash_type: "sha256",
      hash_prefix: hashPrefix,
      raw: true,
    }),
  });
  const data = await respone.json();

  return Response.json(data);
};
