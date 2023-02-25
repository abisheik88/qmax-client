import axios from "axios";

const baseUrl = "https://userbackend-uc2a.onrender.com"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data--->', data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {

    axios.post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
}
export { getAllToDo, addToDo }