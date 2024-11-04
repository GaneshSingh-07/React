const CATEGORY = ["breakfast", "lunch", "shakes"];

export const Menu = (props) => {
  const { id, title, category, price, img, desc } = props;
  return (
    <section className="flex flex-col items-center justify-center mt-4">
      <img src={img} alt="image" className="w-1/2 rounded-md h-48 md:h-[60%] md:w-[84%]" />
      <p className="font-sans font-semibold space-x-16 md:space-x-4">
        <span>{title}</span>
        <span>${price}</span>
      </p>
      <p className="w-[80%] md:w-full md:px-2 md:h-44">{desc}</p>
    </section>
  );
};
export const Banner = () => {
  return (
    <div className="text-center my-4 bg-orange-400">
      <p className="font-semibold">MENU</p>
    </div>
  );
};

export const Filters = (props) => {
  const { btn, allBtn } = props;
  return (
    <section className="flex justify-center space-x-4">
      <button
        onClick={() => allBtn()}
        type="button"
        className="px-4 rounded-md bg-orange-300 hover:bg-orange-500 transition-colors duration-200"
      >
        All
      </button>
      {CATEGORY.map((item, index) => {
        return (
          <button
            onClick={() => {
              btn(item);
            }}
            key={index}
            type="button"
            className="px-4 rounded-md bg-orange-300 hover:bg-orange-500 transition-colors duration-200"
          >
            {item}
          </button>
        );
      })}
    </section>
  );
};
