import { useCount } from '@/store/useCount';
import React from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';

const FirstZustandComponent = () => {
  // Consume Data From Zustand Store
  const count = useCount((state) => state.count);

  // Consume Actions From Zustand Store
  const increment = useCount((state) => state.increment);
  const decrement = useCount((state) => state.decrement);
  const incrementByValue = useCount((state) => state.incrementByValue);
  const reset = useCount((state) => state.reset);
  return (
    <Card className='mb-2'>
      <CardHeader>
        <CardTitle>First Zustand Component</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Count: {count}</p>
      </CardContent>
      <CardFooter>
        <Button variant='outline' onClick={increment}>
          Increase
        </Button>
        <Button className='ms-2' onClick={decrement}>
          Decrement
        </Button>
        <Button className='ms-2' variant='outline' onClick={() => incrementByValue(15)}>
          Increase by 15
        </Button>
        <Button className='ms-2' onClick={reset}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FirstZustandComponent;
