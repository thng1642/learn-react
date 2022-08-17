import React, { useState, useEffect } from "react"
import  logo from './logo.png' // import img (1)
import Select from "react-select"
import axios from "axios";

export default function City() {

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ];

    const [selected, setSelected] = useState('');
    // const [optionList, setOptionList] = useState([]);

    const fetchData = () => {

      axios.get('http://localhost:8081/api/cities')
      .then((response) => {
        
        const {data} = response;
        
        if (response.status === 200) {
          // setOptionList(data);
          // console.log(data);
          // console.log(optionList);
          // const arrayObject = Object.entries(data).map((e)=>({[e[0]]: e[1]}));

          let tmp = data.map((item) => {
            item.label = item.name;
            item.value = item.id;
            delete item['name'];
            delete item["id"];
            // item.id = item.id;
            
            return item;
          });
          // console.log(tmp)
          setSelected(tmp);
        }
        else {}
      })
      .catch((error) => console.log(error));
    }

    useEffect(()=> {
      fetchData();
    }, [])
    // let myCities = {};
    

    // const handleChange = (selectedOption) => {
    //   console.log("handleChange", selectedOption);
    //   console.log(cities);
    // }
    return (
        <>
         <Select options={selected}>

         </Select>
        </>
    )
}