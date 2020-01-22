import React, { useState, useEffect } from "react";
import CurrCard from "./components/CurrCard";
import CurrSelect from "./components/CurrSelect";
import { Box, Text, Input } from "@chakra-ui/core";

function App() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(10);
  const [currList, setCurrList] = useState([]);
  const [availCurrency, setAvailCurrency] = useState({
    IDR: "Indonesian Rupiah",
    EUR: "Euro",
    GBP: "British Pound",
    SGD: "Singapore Dollar",
    JPY: "Japanese Yen",
    CAD: "Canadian Dollar",
    CHF: "Swiss Franc",
    INR: "Indian Rupee",
    MYR: "Malaysian Ringgit",
    KRW: "South Korean Won"
  });
  const [selected, setSelected] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
      .then(res => res.json())
      .then(data => {
        setRates(data.rates);
        setCurrList([
          {
            label: "Indonesian Rupiah",
            symbol: "IDR",
            rate: data.rates["IDR"]
          },
          { label: "Euro", symbol: "EUR", rate: data.rates["EUR"] },
          {
            label: "British Pounds",
            symbol: "GBP",
            rate: data.rates["GBP"]
          },
          {
            label: "Singaporean Dollars",
            symbol: "SGD",
            rate: data.rates["SGD"]
          }
        ]);

        setAvailCurrency({
          JPY: "Japanese Yen",
          CAD: "Canadian Dollar",
          CHF: "Swiss Franc",
          INR: "Indian Rupee",
          MYR: "Malaysian Ringgit",
          KRW: "South Korean Won"
        });
      });
  }, []);

  return (
    <div className="App">
      <Box d="flex" bg="#161616" w="100%" mb="4" p={4} color="white">
        <Box>
          <Text>USD - United States Dollars</Text>
          <Text> USD </Text>
        </Box>
        <Input
          type="number"
          onChange={e => {
            console.log(e.target.value);
            setAmount(e.target.value);
          }}
          w="50%"
          ml="20"
          mr="5"
          mt="6"
          label="Insert an amount"
          placeholder={amount}
        />
      </Box>
      {currList.map(x =>
        CurrCard(
          x,
          currList,
          setCurrList,
          amount,
          availCurrency,
          setAvailCurrency
        )
      )}
      <br />
      {CurrSelect(
        availCurrency,
        selected,
        setSelected,
        currList,
        setCurrList,
        rates,
        setAvailCurrency,
        isClicked,
        setIsClicked
      )}
    </div>
  );
}

export default App;
