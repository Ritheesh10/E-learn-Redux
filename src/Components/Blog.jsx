import React from "react";

function Blog() {
  return (
    <section>
      <div className="text-center p-5 bg-success text-light">
        <h2>Demo Videos</h2>
        Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
        id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
        aperiam consequatur laboriosam nemo harum praesentium.
      </div>
      <div className="d-flex justify-content-center">
        <iframe
          className="p-5"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/N3AkSS5hXMA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="p-5"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6oFuwhIibo4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="d-flex justify-content-center">
        <iframe
          className="p-5"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uVwtVBpw7RQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="p-5"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SccSCuHhOw0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default Blog;
