import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
function Piechart()
{
   const [studentstate, setStudentstate]= useState([]);
   const [studentNumber, setStudentNumber]= useState([]);

   useEffect( ()=>{
       const sState=[];
       const sNumber=[];
       const getStudentdata= async()=>{
       const reqData= await fetch(`${process.env.REACT_APP_BASE_URL}/getallUsers`,
       {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
         },
       });
       const resData= await reqData.json();       
       for(let i=0; i< resData.data.length; i++)
       {
        //console.log(resData.data[i].primary);
        sState.push(resData.data[i].state);
        sNumber.push(parseInt(resData.data[i].primary+resData.data[i].upper_primary+resData.data[i].secondary));
       }
       setStudentstate(sState);
       setStudentNumber(sNumber);
        console.log(resData.data[0].primary);
        console.log(resData.length); 
       }

    getStudentdata();

   },[]);

    return(
        <React.Fragment>
          <div className="flex-col items-center justify-center">
            <div className="container-fluid mb-3 mt-10">
                <h3 className="mt-3">Welcome to Piechart </h3>
                <Chart 
                type="pie"
                width={1150}
                height={550}

                series={ studentNumber }                

                options={{
                        title:{ text:"Student PieChart"
                        } , 
                       noData:{text:"Empty Data"},                        
                      labels:studentstate                     

                 }}
                >
                </Chart>
                
            </div>
            <Link to={"/addstudent"}>
                    <div className={"px-[420px] pt-10"}>
                        <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
                         Back to Main Page
                        </button>
                    </div>
              </Link>
            </div>
        </React.Fragment>
    );
}
export default Piechart;