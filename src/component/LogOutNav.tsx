import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  
  HStack,
  IconButton,
  Spacer,
  Heading,
  useBreakpointValue,
  useColorMode,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiMenu , } from "react-icons/fi";
import { Link } from "react-router-dom";
import  {useState} from 'react'
import { useNavigate } from 'react-router-dom'


//

function LogOutNav() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate()

const [searchInput, setSearchInput] = useState("");
const countries = [{
    name:"أشهر المواشي"
},
{
    name:"تراث"
},
{
    name:"الزي السعودي "
},
{
    name:"ايام زمان "
},
{
    name:"خريطة المملكة "
},
]

// const handleChange = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value);
//   };
  
//   if (searchInput.length > 0) {
//       countries.filter((country) => {
//       return country.name.match(searchInput);
//   });
//   }
//   const searchBar = () => {}

  const logOut =()=>{
    localStorage.removeItem("firestName")
    navigate('/')
  }

  return (
    <div>
      <Box as="section">
        <Box as="nav" h={20}  border={2}>
          {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? 'Dark' : 'Light'}
             </Button> */}

          <Flex
            bg="#d4d0d0"
            boxShadow="lg"
            minWidth="max-content"
            alignItems="center"
            gap="2"
            h={59}
          >
           
            
              <Button onClick={logOut} bg='red.600' variant="ghost" fontSize={20}>
                تسجيل خروج
              </Button>
            
            <Spacer bg="#d4d0d0" />
            <InputGroup w={300}>
              <InputLeftElement pointerEvents="none">
                
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>

   
            <Box p="4" bg="#d4d0d0">
              <Heading bg="#d4d0d0" color={"green"} size="lg">يوم التأسيس</Heading>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default LogOutNav;
