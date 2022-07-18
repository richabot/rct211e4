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
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { delete_todo, getCountry } from "../Redux/action.js";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
const Homepage = () => {
  const location = useLocation();
  const { countries } = useSelector((state) => state);
  const dispatch = useDispatch();
///sort
//const [sortBy, setSortBy] = useState(urlSort || "");

  const [searchParams, setSearchParams] = useSearchParams();

  const urlSort = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState(urlSort || "");

  const handleSort = (e) => {
    let radioValue = e.target.value;
    setSortBy(radioValue);
  };
  useEffect(() => {
    if (sortBy) {
      let params = {};
      
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
      // dispatch( getCountry({ params: { sortBy } }));
    }
    // eslint-disable-next-line
  }, [searchParams, sortBy,dispatch]);
  useEffect(() => {
    if (!countries.length || location.search) {
      const sortBy = searchParams.get("sortBy");

      const getBooksParams = {
        params: {
         
          _sort: sortBy && "population",
          _order: sortBy,
        },
      };
      dispatch(getCountry(getBooksParams));

      //if deselect all filter
    } else if (location.search === "") {
      dispatch(getCountry());
    }
  }, [location.search]);
/////



  

  // useEffect(() => {
  //   dispatch(getCountry());
  // }, [dispatch]);

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
            <Radio data-cy="asc" value="asc"  name="soryBy"  onChange={handleSort}>
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc"  name="soryBy"  onChange={handleSort}>
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
