import { Grid, GridItem } from "@chakra-ui/react";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

export default function Store() {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={3}
      marginTop="40px"
    >
      {storeItems.map((item) => (
        <GridItem background="#122936" key={item.id}>
          <StoreItem {...item} />
        </GridItem>
      ))}
    </Grid>
  );
}
