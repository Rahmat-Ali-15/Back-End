import { useEffect, useState } from "react";
import { api } from "../Api/Api";

export const Create = () => {
    
  const [form, setForm] = useState({
    name: "",
    age: "",
    married: false,
  });

  const createUserData = async () => {
      try {
          await api.post("/userCreate", form)
    } catch (error) {
        console.log("🚀 ~ error:", error);
    }
  };

  return (
    <>
      <div>
        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Age"
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <button onClick={createUserData}>Create</button>
      </div>
    </>
  );
};
