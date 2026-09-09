import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FirstZustandComponent from '@/components/FirstZustandComponent';
import { Separator } from '@/components/ui/separator';
import SecondZustandComponent from '@/components/SecondZustandComponent';

const UsersPage = () => {
  // State Store Data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // setData((prev)=> )

  useEffect(() => {
    // axios.get('https://api.escuelajs.co/api/v1/users').then((response) => {
    //   setData(response.data);
    // });

    (async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.escuelajs.co/api/v1/users');
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <h1 className='mb-2'>This is Zustand Usage</h1>
      <FirstZustandComponent />
      <SecondZustandComponent />

      <Separator className='my-5' />
      <div>{loading && <p>Loading ....</p>}</div>
      <div>{error && <p>{error}</p>}</div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
        {data.map((user) => (
          <Card className='relative mx-auto w-full max-w-sm pt-0' key={user.id}>
            <div className='absolute inset-0 z-30 aspect-video bg-black/35' />
            <img
              src={user.avatar}
              alt='Event cover'
              className='relative z-20 aspect-video w-full object-cover brightness-60 dark:brightness-40'
            />
            <CardHeader>
              <CardAction>
                {user.role === 'admin' ? (
                  <Badge variant='destructive'>{user.role}</Badge>
                ) : (
                  <Badge variant='secondary'>{user.role}</Badge>
                )}
              </CardAction>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className='w-full'>View Event</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default UsersPage;
