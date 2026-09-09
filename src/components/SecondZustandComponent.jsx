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

const SecondZustandComponent = () => {
  // Consume Data From Zustand Store
  // Consume Actions From Zustand Store
  const { count, reset } = useCount();

  return (
    <Card className='mb-2'>
      <CardHeader>
        <CardTitle>Second Zustand Component</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Count: {count}</p>
      </CardContent>
      <CardFooter>
        <Button className='ms-2' onClick={reset}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SecondZustandComponent;
