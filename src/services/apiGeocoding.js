export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `/api/geocoding?latitude=${latitude}&longitude=${longitude}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
