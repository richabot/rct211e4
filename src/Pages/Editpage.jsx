import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React,{useState} from "react";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
// import {  UpdateAPI } from "../Redux/action";
import {  useNavigate, useParams } from "react-router-dom";
import { getCountry } from "../Redux/action";
export const Editpage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  // const handleSubmit = (e) => {
    // e.preventDefault();
    // const city = e.target[0].value;
    // const population = e.target[1].value;
    // if (city && population) {
    //   dispatch(UpdateAPI({ city,population, id }));
    //   navigate("/");
    // }
    const[city,setcity]=useState()
    const[population,setpopulation]=useState()
console.log(city,"city")
console.log(population,"population")

const updatedata =()=>{
  
axios
.patch(`http://localhost:8080/countries/${id}`, {
  
  city: city,
  population:Number(population),

})
.then((r) =>dispatch(getCountry()))
navigate("/")



}

  
  return (
  
     <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input data-cy="capital-city" value={city} type="text" onChange={(e)=>(setcity(e.target.value))} />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input data-cy="population" type="text" value={population} onChange={(e)=>(setpopulation(e.target.value))} />
      </Box>
      <Button data-cy="update-button" onClick={updatedata}>Update</Button>
    </Box>

  );
  }
export default Editpage;