import { useEffect, useState } from "react";
import { api } from "../Api/Api";

export const Read = () => {
    const [userData, setUserData] = useState([])

    const getUserData = async () => {
        try {
            let data = await api.get("/userRead");
            setUserData(data.data)
        } catch (error) {
            console.log("🚀 ~ error:", error);
        }
    }
    
    useEffect(() => {
        getUserData()
    }, [])

    return(
        <>
            {
               userData && userData.map((el) => {
                   return <div key={el._id}>
                        <p>{el._id} - {el.name} - {el.age} - {el.married ? "🤩 Married" : "😭 Not Married"}</p>
                    </div>;
               })
            }
        </>
    )
}