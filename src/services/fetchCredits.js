
export async function fetchCredits() {
  await (await fetch("https://api.github.com/joaoGabriel55")).json()

  return crypto.randomUUID()
}