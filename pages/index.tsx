import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import PullService from "../src/services/pullService";

const getPulls = async () => {
  const service = new PullService();
  let _pulls = [];

  const data: any = await service.getAll();

  for (const id in data) {
    if (Object.prototype.hasOwnProperty.call(data, id)) {
      const content = data[id];
      _pulls.push(content);
    }
  }

  return _pulls;
};

const Home = () => {
  const [data, setData] = useState({ name: "", des: "" });
  const [pulls, setpulls] = useState<{ name: string; des: string }[]>();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const service = new PullService();
    service
      .post(data)
      .then((data) => {
        console.log("seccess", data);
        getAllPulls();
      })
      .catch((err) => {
        console.log("Was a error", err);
      });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getAllPulls();
  }, []);

  const getAllPulls = () => {
    getPulls().then((data) => {
      setpulls(data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} />
        <input type="text" name="des" onChange={handleChange} />
        <input type="submit" />
      </form>
      <ul>
        {pulls.map((pull, i) => {
          return (
            <li key={i}>
              <div>name : {pull.name}</div>
              <div>descrption : {pull.des}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
