import type { JSX } from 'react';

interface Props {
  brand: string;
  color: string;
}

export default function Car(props: Props): JSX.Element {
  const { brand, color } = props;
  return (
    <div>
      <div style={{ backgroundColor: color, color: 'white' }}>
        Brand: {brand} color: {color}
      </div>
    </div>
  );
}
