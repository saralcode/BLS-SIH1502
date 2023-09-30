export default function Button({ text="" }) {
  return (
    <button className="select-none py-1 bg-blue-500 text-white active:scale-105 hover:bg-blue-600 transition-all shadow-md p-1.5 px-4 rounded-md">
      {text}
    </button>
  );
}


