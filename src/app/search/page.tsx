"use client";

import { useState } from "react";

export default function SearchHome() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
    const data = await res.json();
    setResults(data.items || []);
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어 입력"
      />
      <button onClick={search}>검색</button>
      <ul>
        {results.map((item: any, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: item.title }} />
        ))}
      </ul>
    </div>
  );
}
