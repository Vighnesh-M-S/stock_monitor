// src/components/Dashboard.tsx

import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [stockData, setStockData] = useState<any>({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchWatchlist = async () => {
      const response = await axios.get('http://localhost:8000/api/watchlist/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setWatchlist(response.data.map((item: any) => item.symbol));
    };

    const fetchStockData = async (symbol: string) => {
      const response = await axios.get(`http://localhost:8000/api/stock/${symbol}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStockData((prevData: any) => ({ ...prevData, [symbol]: response.data }));
    };

    fetchWatchlist();
    watchlist.forEach(symbol => {
      fetchStockData(symbol);
    });
  }, [token, watchlist]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <List>
        {watchlist.map((symbol, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={symbol}
              secondary={`Price: ${stockData[symbol]?.['Time Series (1min)']?.[0]?.['1. open'] || 'Loading...'}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Dashboard;
