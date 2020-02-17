export async function query() {
  const response = await fetch(`/api/books`)
  return await response.json()
}
