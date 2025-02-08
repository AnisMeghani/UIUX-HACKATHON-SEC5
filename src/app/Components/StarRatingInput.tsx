'use client'

import React, { createContext, useState } from 'react';
import { TextInput, Box, Flex, Button } from '@sanity/ui';

interface StarRatingInputProps {
  value: number;
  onChange: (val: number) => void;
}

const StarRatingInput: React.FC<StarRatingInputProps> = ({ value = 0, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <Flex>
      {stars.map((star) => (
        <Button
          key={star}
          mode={value >= star ? 'default' : 'ghost'}
          tone="primary"
          onClick={() => onChange(star)}
        >
          ⭐
        </Button>
      ))}
      <Box paddingLeft={2}>
        <TextInput
          type="number"
          value={value.toString()}
          onChange={(e) => onChange(parseFloat(e.currentTarget.value) || 0)}
          placeholder="e.g., 4.5"
        />
      </Box>
    </Flex>
  );
};

export default StarRatingInput;
