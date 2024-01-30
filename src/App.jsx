
import Navbar from "./Blog_components/header";
import Footer from "./Blog_components/footer";
import Blog from "./Blog_components/Card";
// import Testimonials from "./Testimonial"


const blogData = [
  {
    id: 1,
    title: "intro to react",
    content:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.",
    imagePath: "https://source.unsplash.com/random/couples",
    category: "react",
  },
  {
    id: 2,
    title: "intro to JAVASCRIPT",
    content:
      "lo fw fe fA paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.w fw wws fw",
    imagePath: "https://source.unsplash.com/random/house",
    category: "javascript",
  },
  {
    id: 3,
    title: "intro to SASS",
    content:
      "aaa fenwA paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. efwwwwwwws fw",
    imagePath: "https://source.unsplash.com/random/technology",
    category: "sass",
  },
  {
    id: 4,
    title: "intro to BOOTSTRAP",
    content:
      "l fwcvwA paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.e fw njnw efwwwwwwws fw",
    imagePath: "https://source.unsplash.com/random/edventure",
    category: "bootstrap",
  },
  {
    id: 5,
    title: "intro to TAILWIND",
    content:
      "lorevA paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.m i fwef fw",
    imagePath: "https://source.unsplash.com/random/team",
    category: "Tailwind",
  },
];

// const testimonial=[
//   {
//     id:1,
//     review:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."
//   },
//   {
//     id:1,
//     review:"A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."
//   },

// ]

export default function App() {
  return (
    <>
      <Navbar />
      <Blog data={blogData} />
      {/* <Testimonials reviews={testimonial} /> */}
      <Footer />
    </>
  );
}
