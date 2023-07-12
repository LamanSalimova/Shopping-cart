import { Flex, Text, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";
export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Flex
      justifyContent="space-between"
      position="sticky"
      top="20px"
      zIndex={5}
    >
      <Text fontSize="24px" fontWeight="700">
        Shopping-Cart
      </Text>
      {cartQuantity > 0 && (
        <Box position="relative" onClick={openCart}>
          <FaShoppingCart fontSize="2rem" color="#fff" />
          <Flex
            position="absolute"
            top="-5px"
            right="-10px"
            width="20px"
            height="20px"
            borderRadius="50%"
            backgroundColor="red"
            color="#fff"
            justifyContent="center"
            alignItems="center"
          >
            {cartQuantity}
          </Flex>
        </Box>
      )}
    </Flex>
  );
}
