import React,{useState,useEffect} from "react";
import Footer from "./footer";
// import Footer from "./footer";

const Dialog = ({ onClose }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-blue-100 rounded shadow-lg m-10 p-1 ">
          {/* <h2 className="text-xl font-semibold mb-4">Dialog Title</h2> */}
          {/* <p className="mb-4">Dialog Content</p> */}
          <Footer/>
          <button onClick={onClose} className="bg-blue-500 w-full  text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
        </div>
      </div>
    );
  };

export default function Dialogue(){

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    useEffect(() => {
        const showDialogAfterDelay = setTimeout(() => {
          setIsDialogOpen(true);
        }, 3000)
    
        return () => {
            clearTimeout(showDialogAfterDelay); // Clear the timeout if component unmounts before the delay
          };
        }, []);

        const closeDialog = () => {
            setIsDialogOpen(false);
          };


    return(
        <>
        <div>
            {isDialogOpen && <Dialog onClose={closeDialog}/> }
        </div>
           
        </>
    )
}