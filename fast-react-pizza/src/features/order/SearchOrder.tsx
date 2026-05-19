import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";

export const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {

    e.preventDefault();
    if(!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
    </form>
  );
};
