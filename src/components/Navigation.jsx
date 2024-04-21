import { Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <Box p="4" bg="gray.100" display="flex" justifyContent="space-between">
      <Link as={RouterLink} to="/">Home</Link>
      <Link as={RouterLink} to="/team">Team</Link>
    </Box>
  );
}

export default Navigation;