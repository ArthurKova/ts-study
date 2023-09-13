import { FC } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

// enum как переменные

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant?: CardVariant;
  onClick?: (a: number) => void;
}

// если в функцию идет параметр указываем их внутри

// export default function Card({ width, height, children }: CardProps) {
//   return (
//     <div>
//       <span>{width}</span>
//       <span>{height}</span>
//       {children}
//     </div>
//   );
// }

// React.FC

const Card: FC<CardProps> = ({ width, height, children }) => {
  return (
    <div>
      <span>{width}</span>
      <span>{height}</span>
      {children}
    </div>
  );
};

export default Card;
