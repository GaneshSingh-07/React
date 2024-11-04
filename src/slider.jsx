export const Slider = (props) => {
    const {data, index} = props;
    const {id, image, name, title, quote} = data[index];
    return <section className="flex flex-col items-center justify-center w-full h-full">
        <img src={image} alt={title} className="w-44 h-44 rounded-full"/>
        <h1 className="text-xl font-semibold">{name}</h1>
        <h1>{title}</h1>
        <p className="w-[80%]">{quote}</p>
    </section>
}