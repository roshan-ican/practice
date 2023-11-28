import axios from "axios"

async function fetchLyrics() {
  const data = await axios.get("http://localhost:8081/fetchlyrics/");
  return data
}

export default fetchLyrics
