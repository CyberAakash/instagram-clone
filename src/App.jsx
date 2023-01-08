import { React, useState, useEffect } from "react";
import "./App.css";

// import logo from "../src/assets/Instagram_logo.png";
import clogo from "../src/assets/insta-color-logo-copy.png";
import { BsFillMoonStarsFill } from "react-icons/bs";

import Post from "../src/components/post/Post";

// import { post_images } from "../src/constants/link";


// import {p1, p2, p3} from "../src/assets/post";


// Firebase DAtabases
// import db from './firebase';



function App() {
  // DARKmode
  const [darkMode, setDarkMode] = useState(false);

  // POSTs
  const [posts, setPosts] = useState([
    {
      username: "sample1",
      caption: "Sample text 1",
      imageUrl:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    },
    {
      username: "sample2",
      caption: "Sample text 2",
      imageUrl:
        "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    },
  ]);

  // UseEffect
  // useEffect(() => {
  //   // this is where code runs
  //   db.collection('posts').onSnapshot(snapshot => {
  //     // every time a post is added , this code fires up
  //     setPosts(snapshot.docs.map(doc => doc.data()))
  //   });
  // }, []);


  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="m-0 bg-primary_bg h-full w-screen dark:bg-[#232323] dark:text-white">
        <nav class="app_header bg-primary_bg py-2 shadow-lg fixed top-0 z-10 w-full dark:bg-[#171717] dark:text-white dark:drop-shadow-3xl dark:sha">
          <div class="container mx-auto flex items-center justify-between px-4">
            <div class="flex items-center">
              <a href="/" class="no-underline">
                <img
                  className="app_headerImage  w-32 h-20 object-contain transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 dark:grayscale-0 dark:hover:grayscale"
                  src={clogo}
                  alt="instagram"
                />
              </a>
              {/* <ul class="ml-4 flex text-sm">
              <li>
                <a href="/docs/" class="text-gray-100 hover:text-gray-300">
                  Docs
                </a>
              </li>
              <li>
                <a href="/blog/" class="text-gray-100 hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/community/" class="text-gray-100 hover:text-gray-300">
                  Community
                </a>
              </li>
            </ul> */}
            </div>
            <div class="flex items-center">
              <a
                href="/docs/getting-started"
                class="px-3 py-2 rounded-full text-sm font-semibold text-gray-100 bg-gray-900 hover:bg-gray-700 dark:text-[#F43B86]"
              >
                Login
              </a>
              <div className="ml-6 dark">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="instaGrad cursor-pointer text-2xl"
                />
              </div>
            </div>
          </div>
        </nav>

        {/* <h1 className="text-center text-lg text-[1.5rem] pt-[12%] mb-8 mt-12">
          My First Instagram Cloning Project 😋
        </h1> */}


        {/*START POST */}


        {/* <Post username="cyberaakash" imageurl={p[1]} /> */}
        {/* <Post username="cyberaakash" imageUrl="" caption="Its so lovely ❤" />
      <Post username="sriram" imageUrl="" caption="Be brave! " />
      <Post username="sathya" imageUrl="" caption="I am the Topper 💥" /> */}

        {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

        {/* {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))} */}

        {/* <div>
          {post_images.map((post_image, index) => (
            <Post key={post_image.id} {...post_image} />
          ))}
        </div> */}

        {/* END POST */}

        <div className="h-screen"></div>
      </div>
    </div>
  );
}

export default App;
