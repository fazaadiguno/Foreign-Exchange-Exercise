import React from "react";
import { Select, Button, Box } from "@chakra-ui/core";

export default function CurrSelect(
  availCurrency,
  selected,
  setSelected,
  currList,
  setCurrList,
  rates,
  setAvailCurrency,
  isClicked,
  setIsClicked
) {
  return (
    <>
      <Box d={isClicked ? "flex" : "none"} mx="5">
        <Select
          onChange={e => {
            setSelected(e.target.value);
          }}
          variant="filled"
          placeholder="Select option"
        >
          {Object.keys(availCurrency).map((x, y) => {
            return (
              <option key={y} value={x}>
                {x}
              </option>
            );
          })}
        </Select>
        <Button
          ml="1"
          onClick={() => {
            let selectedRate = rates[selected];
            let temp = {
              label: availCurrency[selected],
              symbol: selected,
              rate: selectedRate
            };
            let copiedAvail = availCurrency;
            delete copiedAvail[selected];
            setCurrList([...currList, temp]);
            setAvailCurrency(copiedAvail);
            setIsClicked(false);
          }}
        >
          {" "}
          Submit
        </Button>
      </Box>
      <Button
        mr="5"
        ml="5"
        d={isClicked ? "none" : "flex"}
        onClick={() => {
          setIsClicked(true);
        }}
      >
        (+) Add Currency
      </Button>
    </>
  );
}
