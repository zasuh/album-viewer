import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Album from "./Pages/Album";
import { ChakraProvider, Heading, Flex } from "@chakra-ui/react";
import Breadcrumbs from "./Components/Breadcrumbs";

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Heading p={4}>ALBUM VIEWER</Heading>
        <Breadcrumbs />
      </Flex>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="albums" element={<Album />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
