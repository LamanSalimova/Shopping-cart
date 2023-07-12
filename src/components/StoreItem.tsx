import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export default function StoreItem({
  id,
  name,
  price,
  imageUrl,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div>
      <Card maxW="sm" background="transparent">
        <CardBody>
          <Image
            src={imageUrl}
            alt={name}
            borderRadius="lg"
            width="70%"
            height="40%"
            margin="0 auto"
          />
          <Flex mt="6" justifyContent="space-between">
            <Heading size="md" color="#fff">
              {name}
            </Heading>
            <Text color="#fff" fontSize="2xl">
              {formatCurrency(price)}
            </Text>
          </Flex>
        </CardBody>
        <Divider />
        <CardFooter>
          {quantity === 0 ? (
            <Button
              background="#2196f3"
              color="#fff"
              margin="0 auto"
              width="full"
              onClick={() => increaseCartQuantity(id)}
            >
              Add to cart
            </Button>
          ) : (
            <Stack width="full" gap={3}>
              <Flex gap={3} margin="0 auto">
                <Button
                  background="#2196f3"
                  color="#fff"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <Flex color="#fff" alignItems="center" justifyContent="center">
                  <Text as="span" paddingRight="10px">
                    {quantity}
                  </Text>
                  in cart
                </Flex>
                <Button
                  background="#2196f3"
                  color="#fff"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </Flex>

              <Box>
                <Button
                  background="#e65b65"
                  color="#fff"
                  margin="0 auto"
                  width="full"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </Box>
            </Stack>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
