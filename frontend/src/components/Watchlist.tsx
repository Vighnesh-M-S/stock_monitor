// src/components/Watchlist.tsx

import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

const Watchlist: React.FC = () => {
  const [symbol, setSymbol] = useState('');
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchWatchlist = async () => {
      const response = await axios.get('http://localhost:8000/api/watchlist/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setWatchlist(response.data.map((item: any) => item.symbol));
    };
    fetchWatchlist();
  }, [token]);

  const handleAddSymbol = async () => {
    await axios.post('http://localhost:8000/api/watchlist/', { symbol }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setWatchlist([...watchlist, symbol]);
    setSymbol('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Watchlist
      </Typography>
      <TextField
        label="Stock Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddSymbol} fullWidth>
        Add to Watchlist
      </Button>
      <List>
        {watchlist.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Watchlist;
