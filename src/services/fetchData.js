export default async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Request failed");
  }
  const data = await response.json();
  return data;
}
