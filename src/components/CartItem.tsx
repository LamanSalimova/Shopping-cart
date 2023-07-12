import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div>
      <Flex justifyContent="space-between">
        <img src={item.imageUrl} width="125px" height="75px" />
        <Stack>
          <Box>
            {item.name} {quantity > 1 && <Text as="span">x{quantity}</Text>}
          </Box>
          <Box fontSize=".75rem" color="red">
            {formatCurrency(item.price)}
          </Box>
        </Stack>
        <Box fontSize=".65rem">{formatCurrency(item.price * quantity)}</Box>
        <Button
          onClick={() => removeFromCart(item.id)}
          height="100%"
          background="red.600"
          fontSize="1.5rem"
          border="1px solid gray"
          padding=" 2px 8px"
        >
          x
        </Button>
      </Flex>
    </div>
  );
}
