import {
  Box,
  Button,
  Circle,
  Heading,
  Img,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue as mode,
  LightMode,
  Center
} from '@chakra-ui/react'

import * as React from 'react'
import Fade from 'react-reveal/Fade';

export const Landing = ({ heading, description,cta1, cta2, image, logoImage, play, cta1link, cta2link }) => {
  return (
    <Box
    bg="black">
      <Fade>
      <Box as="section" bg="black" color="white" pt="7.5rem"  >
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Box textAlign="center">

          <Img
              alt="Page icon"
              src={logoImage}
              width="10%"
              m="0 auto"
            />

            <Heading
              as="h1"
              size="3xl"
              fontWeight="extrabold"
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
            >
              {heading}
            </Heading>
            <Text fontSize="xl" mt="4" maxW="xl" mx="auto" >
              {description}
            </Text>
          </Box>

          <Stack
            justify="center"
            direction={{ base: 'column', md: 'row' }}
            mt="10"
            mb="20"
            spacing="4"
          >
            <LightMode>
              <Button
                as="a"
                href={cta1link}
                size="lg"
                colorScheme="yellow"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                {cta1}
              </Button>
              <Button
                as="a"
                href={cta2link}
                size="lg"
                colorScheme="blue"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                {cta2}
              </Button>
            </LightMode>
          </Stack>

          <Box
            mb={{ base: '-20', md: '-40' }}
            className="group"
            cursor="pointer"
            position="relative"
            rounded="lg"
            overflow="hidden"
          >

            {play == 0 &&
            <Circle
              size="20"
              as="button"
              bg="white"
              shadow="lg"
              color="blue.600"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate3d(-50%, -50%, 0)"
              fontSize="xl"
              transition="all 0.2s"
              _groupHover={{
                transform: 'translate3d(-50%, -50%, 0) scale(1.05)',
              }}
            >
              
            </Circle>
            }
          </Box>
        </Box>
        <Img
              alt="Screenshot of Envelope App"
              src={image}
              width="100%"
              // maxW="70rem"
              m="0 auto"
              mt="10rem"
              maxH="50vh"
              maxW ="60vw"
            />
      </Box>
      </Fade>
    </Box>
    
  )
}