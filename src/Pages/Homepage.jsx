import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  Button
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { delete_todo, getCountry } from "../Redux/action.js";
import { Link } from "react-router-dom";
import axios from "axios";
const Homepage = () => {
  const { countries } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  console.log(countries)
 
  const handleRemove = (id)=> {
      axios.delete(`http://localhost:8080/countries/${id}`)
      .then(()=> dispatch(delete_todo(id)))
      .catch((error)=> console.error(error));
  }
  return (
   
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc">
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc">
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}
            {countries.map((country) => (
                <Tr>
                <Td>{country.country}</Td>
                <Td>{country.city}</Td>
                <Td>{country.population}</Td>
            <td>
            <Link key={country.id} to={`/country/${country.id}`}
            //  /country/:id
             ><Button>edit</Button></Link>
            </td>
       
           <td>  <Button onClick={()=>handleRemove(country.id)}>delete</Button></td>
              </Tr>
       
      ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
