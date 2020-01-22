import React from "react";
import { Box, Text, Button } from "@chakra-ui/core";

export default function CurrCard(
  { symbol, label, rate },
  currList,
  setCurrList,
  amount,
  availCurrency,
  setAvailCurrency
) {
  return (
    <Box mx="5" mt="2" pl="5" d="flex" bg="#f3f3f3">
      <Box w="80%">
        <Text>{symbol}</Text>
        <Text>
          {symbol} - {label}
        </Text>
        <Text>
          1 USD = {symbol} {rate}
        </Text>
      </Box>
      <Box pt="10" w="20%">
        {" "}
        {rate * amount}{" "}
      </Box>
      <Button
        onClick={() => {
          let arr = currList.filter(obj => {
            return obj.symbol !== symbol;
          });
          setCurrList(arr);
          let copiedAvail = availCurrency;
          copiedAvail[symbol] = label;
          setAvailCurrency(copiedAvail);
        }}
        bg="#dcdcdc"
        color="black"
        px={4}
        w="5%"
        h="12vh"
      >
        <Text>(-)</Text>
      </Button>
    </Box>
  );
}
