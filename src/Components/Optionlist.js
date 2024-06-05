 import {useState,useEffect} from "react";
 function Optionlist(){
    let[stor,setStor] = useState([]);
    let[detail,setDetail] = useState([]);

    async function lists(no){
        let pgno = no;
        let url = "";

        if(pgno == 1){
            url = "https://dummyjson.com/recipes?limit=10&skip=0";
        }

        else if(pgno == 2){
            url = "https://dummyjson.com/recipes?limit=10&skip=10";
        }

        else if(pgno == 3){
            url = "https://dummyjson.com/recipes?limit=10&skip=20";
        }

        var result = await fetch(url);
        var out = await result.json();
        setStor(out.recipes);
        console.log(stor);
    }
    
    function funChange(event){
     let val1 = event.currentTarget.value;
     let val2 = stor.find((ele)=> ele.name === val1);
     setDetail(val2?[val2]:[]);
    }

    function funclick(event){
        event.preventDefault();

        if(event.currentTarget.textContent == 2){
            lists(2);
        }
        else if(event.currentTarget.textContent == 3){
            lists(3);
        }
    }

    useEffect(()=>{
        lists(1);
    },[]);

    return(
        <>
        <select onChange={funChange}>
        <option></option>
        {
            stor.map((x)=>(
                <option>{x.name}</option>
            ))
        }
        </select>

        <ul>
            <li>
                <a href="" onClick={funclick}>2</a>
            </li>

            <li>
                <a href="" onClick={funclick}>3</a>
            </li>
        </ul>

        {
            detail.length > 0 && (
                <div>
                    <h2>selected recipes details</h2>
                    <p>id:{detail[0].id}</p>
                    <p>name:{detail[0].name}</p>
                    <p>cootime:{detail[0].cookTimeMinutes}</p>
                    <p>rating:{detail[0].rating}</p>
                </div>
            )
        }
        </>
    )
}
export default Optionlist;