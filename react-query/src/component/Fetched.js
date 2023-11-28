import React, { useState } from "react"
import "./App.css"
import fetchLyrics from "./Lycris"
import { useQuery } from "react-query"

function Fetched() {
  const [lyrics, setLyrics] = useState("")

  const fetchSongDetails = (data) => {
    const filterSong = data.filter((item) => item.data === data)
  }

  const { data, error, isError, isLoading } = useQuery("lyrics", fetchLyrics)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error ! {error.message}</div>
  }

  return (
    <>
      <pre>
        {data.map((fetchLyrics, server) => {
          ;<li key={server}>
            <button>{fetchLyrics.Song}</button>{" "}
          </li>
        })}
      </pre>
    </>
  )
}

export default Fetched
