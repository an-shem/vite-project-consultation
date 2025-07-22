import { buttonStyles } from './styles';

interface Props {
  title: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
}

export default function Button({ title, type, onClick }: Props) {
  return (
    <button type={type} className={buttonStyles} onClick={onClick}>
      {title}
    </button>
  );
}
