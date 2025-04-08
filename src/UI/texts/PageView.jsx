const PageView = ({ icon: Icon, text }) => {
  return (
    <>
      <section>
        <h1 className="flex justify-center items-center text-center mb-8 text-sm border-y-4 rounded-sm border-green-200 font-medium py-2">
          <Icon className="mx-1 block" />
          {text}
        </h1>
      </section>
    </>
  );
};

export default PageView;
