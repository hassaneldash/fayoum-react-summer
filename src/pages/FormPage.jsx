import React, { useRef, useState } from 'react';
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const FormPage = () => {
  /* Controlled Input */
  const [inputValue, setInputValue] = useState('');

  /* Uncontrolled Input */
  const uncontrolledInputValue = useRef();
  const [value, setValue] = useState(null);

  return (
    <div>
      {/* Controlled Input */}
      <Field>
        <FieldLabel htmlFor='input-demo-api-key'>Controlled Input</FieldLabel>
        <Input
          id='username'
          type='text'
          placeholder='Please enter your username'
          onChange={(e) => {
            console.log(e);
            console.log(e.target);
            console.log(e.target.value);

            setInputValue(e.target.value);
          }}
        />
        <FieldDescription>Controlled Input Value: {inputValue}</FieldDescription>
      </Field>

      <Separator className='my-3' />

      {/* Uncontrolled Input */}

      <Field>
        <FieldLabel htmlFor='input-demo-api-key'>Uncontrolled Input</FieldLabel>
        <Input
          id='username'
          type='text'
          placeholder='Please enter your username'
          ref={uncontrolledInputValue}
        />

        <Button
          onClick={() => {
            setValue(uncontrolledInputValue.current.value);
          }}>
          Submit Value
        </Button>
        
        <FieldDescription>Uncontrolled Input Value: {value}</FieldDescription>
      </Field>
    </div>
  );
};

export default FormPage;
