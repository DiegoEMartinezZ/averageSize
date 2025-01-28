const Date = ({ text, date }) => {
  return (
    <>
      <div className="flex justify-between flex-nowrap my-5">
        <li className="font-light text-sm">{text}</li>
        <li className="font-bold text-sm">{date}</li>
      </div>
    </>
  );
};

export default Date;
