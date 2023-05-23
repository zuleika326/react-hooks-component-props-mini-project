import React from "react";
import blogData from "../data/blog";
import Header from "./header";
import About from "./about";
import ArticleList from "./articleList";
import Article from "./article";

// console.log(blogData);

function App() {
  return(
  <>
    <Header/>
    <About/>
    <ArticleList/>
    <Article/>
  
  </>

  )
}
export default App;
