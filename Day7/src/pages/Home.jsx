import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import fetchContext from "../context/myContext";

export default function Home(props) {
  // useEffect(() => {}, []);

  const { countryData } = useContext(fetchContext);

  console.count("--------Home Page Loaded-----------");

  //  useEffect(callback,[props.myCount])

  return (
    <>
      <div className='container flex flex-wrap gap-5'>
        {/* <Card />
        <Card />
        <Card /> */}
        {countryData?.map((val, i) => {
          return (
            <Card key={i} title={val.name.common} imageUrl={val.flags.png} />
          );
        })}
      </div>
    </>
  );
}

const data = [
  {
    name: " sit amet consectetur adipisicing elit. Eaque, tempora.",
    url: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tempora.",
    url: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tempora.",
    url: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tempora.",
    url: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tempora.",
    url: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tempora.",
    url: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, tempora.",
    url: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
];
