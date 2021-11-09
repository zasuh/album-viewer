import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ChakraProvider,
  Flex,
  Grid,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const u = await axios("https://jsonplaceholder.typicode.com/users");
      const p = await axios("https://jsonplaceholder.typicode.com/photos");

      setUsers(u.data);
      setPhotos(p.data);
    };

    fetchData();
  }, []);

  return (
    <ChakraProvider>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
          {users.map((user, index) => (
            <Box w="100%" key={user.name}>
              <Image
                boxSize="300px"
                src={photos[index]?.url}
                onClick={() => {
                  navigate(`/albums`);
                }}
              ></Image>
              <Center>
                <b>{user.username}</b> / {user.name}
              </Center>
            </Box>
          ))}
        </Grid>
      </Flex>
    </ChakraProvider>
  );
}
