import "./App.css";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const POSTS = "https://jsonplaceholder.typicode.com/posts";
function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => axios.get(POSTS).then((response) => response.data),
  });

  console.log("Posts data:", postsQuery.data);
  const newPostMutation = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() =>
        postsQuery.data.push({ id: crypto.randomUUID(), title })
      );
    },
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;

  if (postsQuery.error) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  const postsPerPage = 5;
  const index_of_last_post = currentPage * postsPerPage;
  const index_of_first_post = index_of_last_post - postsPerPage;
  const currentPosts = postsQuery.data.slice(
    index_of_first_post,
    index_of_last_post
  );

  return (
    <div className="container">
      <h1>Hello Roshan, Howdy?</h1>
      {currentPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
      <button onClick={() => newPostMutation.mutate("New post")}>
        Add New
      </button>
      <div>
        {Array.from(
          { length: Math.ceil(postsQuery.data.length / postsPerPage) },
          (_, i) => (
            <button key={i} onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
