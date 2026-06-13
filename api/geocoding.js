export default async function handler(req, res) {
  const { latitude, longitude } = req.query;

  const response = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );

  if (!response.ok) {
    return res.status(500).json({ error: "Failed getting address" });
  }

  const data = await response.json();
  res.status(200).json(data);
}
