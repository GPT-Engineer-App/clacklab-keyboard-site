import { Container, Box, VStack, HStack, Text, Heading, Button, Image, IconButton, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={0} align="stretch">
        {/* Header */}
        <Box as="header" bg="white" boxShadow="sm" p={4}>
          <HStack justifyContent="space-between">
            <Heading size="lg">Clacklab</Heading>
            <HStack spacing={4}>
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Products</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
            </HStack>
          </HStack>
        </Box>

        {/* Hero Section */}
        <Box as="section" bg="gray.100" p={8} textAlign="center">
          <VStack spacing={4}>
            <Heading size="2xl">Experience the Premium Touch</Heading>
            <Text fontSize="lg">Discover the finest mechanical keyboards crafted for enthusiasts and professionals.</Text>
            <Button colorScheme="teal" size="lg">
              Shop Now
            </Button>
          </VStack>
        </Box>

        {/* Products Section */}
        <Box as="section" p={8}>
          <VStack spacing={8}>
            <Heading size="xl">Our Products</Heading>
            <HStack spacing={8}>
              <VStack spacing={4} align="start">
                <Image src="https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjAxfGVufDB8fHx8MTcxNTY1OTAzMnww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" borderRadius="md" />
                <Text fontSize="lg" fontWeight="bold">
                  Clacklab Pro
                </Text>
                <Text>High-performance mechanical keyboard with customizable RGB lighting.</Text>
                <Button colorScheme="teal">Learn More</Button>
              </VStack>
              <VStack spacing={4} align="start">
                <Image src="https://images.unsplash.com/photo-1592683855405-3f272c7e462a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjAyfGVufDB8fHx8MTcxNTY1OTAzMnww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" borderRadius="md" />
                <Text fontSize="lg" fontWeight="bold">
                  Clacklab Lite
                </Text>
                <Text>Compact and portable mechanical keyboard for on-the-go typing.</Text>
                <Button colorScheme="teal">Learn More</Button>
              </VStack>
              <VStack spacing={4} align="start">
                <Image src="https://images.unsplash.com/photo-1627405085366-ee229985ecda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjAzfGVufDB8fHx8MTcxNTY1OTAzMnww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" borderRadius="md" />
                <Text fontSize="lg" fontWeight="bold">
                  Clacklab Custom
                </Text>
                <Text>Build your own keyboard with our customizable options.</Text>
                <Button colorScheme="teal">Learn More</Button>
              </VStack>
            </HStack>
          </VStack>
        </Box>

        {/* Footer */}
        <Box as="footer" bg="gray.800" color="white" p={8}>
          <VStack spacing={4}>
            <HStack spacing={4}>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
              <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
            </HStack>
            <Text>&copy; {new Date().getFullYear()} Clacklab. All rights reserved.</Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
