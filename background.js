async function getJson(url) {
  const response = await fetch(url)
  return response.json()
}

var resp = await getJson("https://memoizer.herokuapp.com/rec")

export const obj = resp






