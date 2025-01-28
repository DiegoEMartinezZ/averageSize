const Count = ({ text, count }) => {
  return (
    <>
      <div className="flex justify-between flex-nowrap my-5">
        <li className="font-light text-sm">{text}</li>
        <li className="font-bold">{count}</li>
      </div>
    </>
  );
};

export default Count;
