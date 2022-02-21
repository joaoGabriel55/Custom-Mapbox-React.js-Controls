import React from "react"
import { useCredits } from "../hooks/useCredits"

export function Credits() {
  const { data: credits, isFetching } = useCredits()

  if (isFetching) return <h1>Loading...</h1>

  return <h1>{credits}</h1>
}