import React from "react"
import "./styles.scss"

export type DetailProps = {
  summary: string
  description: string
}

export const Details: React.FC<{ item: DetailProps }> = ({ item: { summary, description } }) => {
  return (
    <details>
      <summary>{summary}
        <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#222222" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </span>
      </summary>
      <p>{description}</p>
    </details>
  )
}

