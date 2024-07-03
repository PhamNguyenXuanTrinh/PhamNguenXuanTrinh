import React, { useState, useEffect } from "react";
import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import { fetchTokenPrices, getTokenImageUrl } from "../services/tokenService";

const CurrencyConverterForm = () => {
  const [prices, setPrices] = useState({});
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPrices = async () => {
      const data = await fetchTokenPrices();
      setPrices(data);
    };
    fetchPrices();
  }, []);

  const handleConvert = (e) => {
    e.preventDefault();
    if (!fromCurrency || !toCurrency || !amount) {
      setError("Invalid currency.");
      return;
    }
    if (!prices[fromCurrency] || !prices[toCurrency]) {
      setError("Invalid currency.");
      return;
    }
    const rate = prices[toCurrency] / prices[fromCurrency];
    setConvertedAmount(rate * amount);
    setError("");
  };

  return (
    <div className="container mt-5">
      <h2>Currency Converter</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleConvert}>
        <Form.Group className="mb-3">
          <Form.Label>From Currency</Form.Label>
          <InputGroup>
            <Form.Control
              as="select"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="">Select Currency</option>
              {Object.keys(prices).map((symbol) => (
                <option key={symbol} value={symbol}>
                  {symbol}
                </option>
              ))}
            </Form.Control>
            {fromCurrency && (
              <InputGroup.Text>
                <img
                  src={getTokenImageUrl(fromCurrency)}
                  alt={fromCurrency}
                  width="20"
                />
              </InputGroup.Text>
            )}
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>To Currency</Form.Label>
          <InputGroup>
            <Form.Control
              as="select"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="">Select Currency</option>
              {Object.keys(prices).map((symbol) => (
                <option key={symbol} value={symbol}>
                  {symbol}
                </option>
              ))}
            </Form.Control>
            {toCurrency && (
              <InputGroup.Text>
                <img
                  src={getTokenImageUrl(toCurrency)}
                  alt={toCurrency}
                  width="20"
                />
              </InputGroup.Text>
            )}
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Convert
        </Button>
      </Form>
      {convertedAmount !== null && (
        <div className="mt-3">
          <h4>Converted Amount: {convertedAmount.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverterForm;
