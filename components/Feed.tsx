import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";

type Props = {};

function Feed({}: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* Section */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>

      {/* Section */}
      <section className="">
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
