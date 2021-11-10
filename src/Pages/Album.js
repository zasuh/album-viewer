import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Grid, Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Album() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const a = await axios("https://jsonplaceholder.typicode.com/albums");
      const p = await axios("https://jsonplaceholder.typicode.com/photos");

      setAlbums(a.data);
      setPhotos(p.data);
    };

    fetchData();
  }, []);

  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Grid templateColumns="repeat(5, 1fr)" gap={6} p={4}>
        {albums.map((album, index) => (
          <Box w="100%" key={album.title}>
            <Image
              boxSize="300px"
              src={photos[index]?.url}
              onClick={() => {
                navigate(`/albums/photos`);
              }}
            ></Image>
            <b>{album.title}</b>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}
