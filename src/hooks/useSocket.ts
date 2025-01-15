'use client';

import { useEffect, useState } from 'react';

const WS_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'ws://localhost:3000';

export const useSocket = () => {
  const [time, setTime] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      setIsConnected(true);
      setError(null);
      console.log('WebSocket Connected');
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.epochTime) {
          console.log("epoch time", data.epochTime);
          //Update the state to constantly display the time
          setTime(data.epochTime);
        }
      } catch (err) {
        console.error('Parse error:', err);
      }
    };

    ws.onerror = (event) => {
      setError('WebSocket error occurred');
      setIsConnected(false);
      console.error('WebSocket error:', event);
    };

    ws.onclose = () => {
      setIsConnected(false);
      console.log('WebSocket disconnected');
    };

    return () => {
      ws.close();
    };
  }, []);

  return { time, error, isConnected };
};
