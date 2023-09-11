import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Header from "./componenets/Header";
import Feed from "./componenets/Feed";
import SearchResult from "./componenets/SearchResult";
import VideoDetail from "./componenets/VideoDetail";
// import LeftNav from "./componenets/LeftNav"; 
// import LeftNavMenuitem from "./componenets/LeftNavMenuitem";
// import SearchResultVideoCard from "./componenets/SearchResultVideoCard";
// import SuggestionVideoCard from "./componenets/SuggestionVideoCard";
// import VideoCard from "./componenets/VideoCard";


import  {AppContext}  from "./context/contextApi";
const App=()=>{
    return(
         <AppContext>
        <BrowserRouter>
        <div className="flex flex-col h-full">
            <Header />
             <Routes>
                 <Route path="/"  exact  element={<Feed/>} />
                 <Route path="/searchResult/:searchQuerry" element={<SearchResult/>} />
                 <Route path="/video/:id" element={<VideoDetail />} />
             </Routes>
        </div>
        </BrowserRouter>
        </AppContext>
        );
};

export default App;
   
