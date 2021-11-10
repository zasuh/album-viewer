import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Album from "./Pages/Album";
import Photo from "./Pages/Photo";
import { Heading, Flex } from "@chakra-ui/react";
import Breadcrumbs from "./Components/Breadcrumbs";

function App() {
  return (
    <div>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Heading p={4}>ALBUM VIEWER</Heading>
      </Flex>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="albums" element={<Album />}>
            <Route index path="photos" element={<Photo />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Breadcrumbs />
      </Flex>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
