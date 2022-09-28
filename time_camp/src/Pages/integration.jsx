import { Box, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';

const Integration = () => {
  return (
    <Box>
      <Box border={'1px solid red'} width={'40%'} margin={'auto'}>
        <Box display={'flex'}>
          <Box>
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png" />
          </Box>
          <Box margin={'20px 0 0 20px'}>
            <Text>Trello time tracking</Text>
            <Text>
              Tracking time on all of your chosen Trello cards and boards
              without switching apps? Yes!
            </Text>
          </Box>
        </Box>
        <Box display={'flex'}>
          <Box width={'130px'}></Box>
              <Input marginLeft={"20px"} placeholder="Enter email"/>
        </Box>
        <Box display={'flex'}>
          <Box width={'130px'}></Box>
          <Box display={'flex'}>
            <Text marginTop={'10px'} marginLeft={"20px"}>Or sign up with:</Text>
            <Image
              margin={'0'}
              src="https://cdn-m.timecamp.com/img/logos/google.svg"
            />
            <Text fontSize={'15px'} marginTop={'10px'}>
              By signing up you agree to our{' '}
              <span style={{ color: 'green' }}> Terms and Conditions </span>and
              <span style={{ color: 'green' }}> Privacy Policy. </span>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
            <Text>Trusted by 18,000 teams from all over the world (and still growing!)</Text>
            
        </Box>
      </Box>
    </Box>
  );
};

export default Integration;
