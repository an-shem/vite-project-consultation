interface Props {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: Props) {
  return (
    <button
      type="button"
      className="p-5 w-full bg-[#1F27F5] text-xl font-semibold text-center text-white rounded-[4px]"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
