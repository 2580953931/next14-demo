"use client";
import Image from "next/image";
import { getInfo } from "@/service/index";
import { useEffect, useState } from "react";

export default function Home() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const getTest = async () => {
      try {
        const data = await getInfo();
        console.log(data);
        setList(data);
        console.log(list);
      } catch (error) {}
    };
    getTest();
  }, []);
  return (
    <div>
      {list.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}
