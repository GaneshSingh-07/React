export const Tabs = (props) => {
  const { data, item, setItem } = props;
  // const newData = data[item]

  return (
    <section className="flex items-center justify-center h-screen w-full">
      <section className="flex flex-col items-center justify-center h-52">
        {data.map((singleData, index) => {
          return (
            <div key={singleData.id} className="py-2 px-2">
              <button
                type="button"
                onClick={() => {
                  setItem(index);
                }}
                className={
                  index === item
                    ? "border-l-4 w-20 rounded-sm border-blue-400"
                    : "w-20"
                }
              >
                {singleData.company}
              </button>
            </div>
          );
        })}
      </section>
      <section className="w-[60%] h-52 pt-8 ml-8">
        <Desc data={data} item={item} />
      </section>
    </section>
  );
};

const Desc = ({ data, item }) => {
  const {company, dates, duties, title} = data[item];
//   console.log(duties);
  
  return <div>
    <h1 className="text-center text-lg font-bold">{title}</h1>
    <h6 className="text-left text-sm bg-sky-600 inline text-white px-2 rounded-tl-full rounded-br-full">{dates}</h6>
    <p>{duties[item]}</p>
  </div>
};
