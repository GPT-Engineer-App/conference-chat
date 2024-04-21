// Complete the Index page component for a conference and online chat application
import { Box, Button, Container, Flex, Heading, Input, Text, VStack, Image } from "@chakra-ui/react";
import { FaVideo, FaPhone, FaUserPlus, FaCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Image src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbXxlbnwwfHx8fDE3MTM3MzEzMzB8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        <Heading as="h1" size="2xl">
          Welcome to the Conference Hub
        </Heading>
        <Text fontSize="xl">Join or start meetings and chat with colleagues.</Text>

        <Flex w="full" justify="center" gap={4}>
          <Button leftIcon={<FaVideo />} colorScheme="blue" size="lg">
            Start Video Call
          </Button>
          <Button leftIcon={<FaPhone />} colorScheme="green" size="lg">
            Start Voice Call
          </Button>
          <Button leftIcon={<FaUserPlus />} colorScheme="purple" size="lg">
            Create Meeting
          </Button>
          <Button leftIcon={<FaCommentDots />} colorScheme="teal" size="lg">
            Open Chat
          </Button>
        </Flex>

        <Box p={4} w="full" bg="gray.100" borderRadius="md">
          <Heading as="h3" size="lg">
            Join a Meeting
          </Heading>
          <Flex mt={4} align="center">
            <Input placeholder="Enter Meeting ID" mr={2} />
            <Button colorScheme="blue">Join</Button>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
