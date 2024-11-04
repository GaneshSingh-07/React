import { useEffect, useState } from "react";
import { Question } from "./Question";
import { questions } from "./qData";
import { menu } from "./menuData";
import { Menu, Banner, Filters } from "./menu";
import { Tabs } from "./Tabs";
import { list } from "./sliderData";
import { Slider } from "./slider";

const tabUrl = "https://www.course-api.com/react-tabs-project";

function App() {
  // Questions Project

  // return (
  //   <section className="flex flex-col w-full h-screen items-center justify-center">
  //     {questions.map((singleQ) => {
  //       return <Question key={singleQ.id} {...singleQ} />;
  //     })}
  //   </section>
  // );

  // Menu Project
  // const [data, setData] = useState(menu);

  // const btnHandler = (value) => {
  //   const newData = menu.filter((item) => item.category === value);
  //   setData(newData);
  // };
  // const allBtn = () => {
  //   setData(menu);
  // };

  // return (
  //   <section>
  //     <Banner />
  //     <Filters btn={btnHandler} allBtn={allBtn} />
  //     <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-3">
  //       {data.map((item) => {
  //         return <Menu key={item.id} {...item} />;
  //       })}
  //     </div>
  //   </section>
  // );

  // Tabs project
  //   const [data, setData] = useState([]);
  //   const [item, setItem] = useState(0);
  //   const [loading, setloadin] = useState(true)

  //   const fetchData = async (url, data, stateFn) => {
  //     try {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       stateFn(data);
  //       setloadin(false)
  //     } catch (error) {
  //       console.log(error);
  //       return;
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData(tabUrl, data, setData);
  //   }, []);

  // if(loading){
  //   return <div className="w-full h-screen flex items-center justify-center">
  //     <div className="w-20 h-20 rounded-full border-8 border-l-violet-500 animate-spin"></div>
  //   </div>
  // }

  //   return (
  //     <section>
  //       <Tabs data={data} item={item} setItem={setItem}/>
  //     </section>
  //   );

  // slider Project

  const checkIndex = (number) => {
    if (number > (list.length-1)) {
      return 0;
    }
    if (number < 0) {
      return (list.length-1);
    }
    return number;
  };

  const [index, setIndex] = useState(0);

  const nexData = () => {
    setIndex(checkIndex(index + 1));
  };
  const prevData = () => {
    setIndex(checkIndex(index - 1));
  };

  useEffect(()=>{
    let setSlider = setInterval(()=>{
      nexData()
    }, 5000)
    return ()=>{
      clearInterval(setSlider)
    }
  },[index])

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="h-screen flex items-center justify-center">
        <button
          type="button"
          className="border-2 ml-2 px-2 rounded-md"
          onClick={() => prevData()}
        >
          Prev
        </button>
      </div>
      <div>
        <Slider data={list} index={checkIndex(index)} stateFn={setIndex} />
      </div>
      <div className="h-screen flex items-center justify-center">
        <button
          onClick={() => nexData()}
          type="button"
          className="border-2 mr-2 px-2 rounded-md"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default App;
