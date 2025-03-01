// import React, { useContext, useEffect, useState } from 'react'
// import Ct from './Ct'
// import axios from 'axios'
// import { Link, useNavigate } from 'react-router-dom'
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
// const Km = () => {
//     let obj=useContext(Ct)
//     let [prodobj,setProd]=useState("")
//     let [rv,setRv]=useState({"text":"","rt":5})
//     const [hover, setHover] = React.useState(-1);
//     let navigate=useNavigate()
   
//     useEffect(()=>{
//         setProd(obj.state.proddet)
        

//     },[])
//     let add=()=>{
//         axios.post("http://localhost:5001/addcart",{'uid':obj.state._id,'pid':prodobj._id,'pimg':prodobj.pimg,'price':prodobj.price,'name':prodobj.name,'qty':1},{"headers":{"Authorization":obj.state.token}}).then((res)=>{
           
//       navigate("/cart")
            
      
//     })
// }
// let addcom=()=>{
//   axios.put("http://localhost:5001/addcomment",{...rv,"name":obj.state.name,"_id":prodobj._id},{"headers":{"Authorization":obj.state.token}}).then((res)=>{
//     setProd(res.data)
//     setRv({"text":"","rt":5})
//   })
// }
//   return (
//     <div>
//        {prodobj!=""&& <div className="card">
//             <img src={`http://localhost:5001/${prodobj.pimg}`} className="card-img-top"/>
//             <div className="card-body">
//               <h5 className="card-title text-secondary">{prodobj.name.toUpperCase()}</h5>
//               <p>Price:{prodobj.price}</p>
//               <p>Cat:{prodobj.cat}</p>
//               <p>Desc:{prodobj.desc}</p>
//               <h1>Comments Added by Users:</h1>
//               {
//                 prodobj.comm.map((com)=>{
//                   return(
//                     <div>
//                       <h3>{com.name}</h3>
//                       <p>{com.text}</p>
//                       <Rating name="half-rating-read" defaultValue={com.rt} precision={0.5} readOnly />
//                       </div>
//                   )
//                 })
//               }
//               {obj.state.token!=""&&<div>
//                 <input type='text' onChange={(e)=>setRv({...rv,"text":e.target.value})} name="text" value={rv.text}/>
//                 <Rating
//         name="hover-feedback"
//         value={rv.rt}
//         precision={0.5}
//         onChange={(event, newValue) => {
//         setRv({...rv,"rt":newValue});
//         }}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//       />
//       <button onClick={addcom}>Addcom</button>

//                 </div>}
//               <button onClick={add}>Addcart</button>
//             <button><Link to="/">GotoProducts</Link></button>

//                   </div>
            

//           </div>}
//     </div>
//   )
// }

// export default Km

import React, { useContext, useEffect, useState } from 'react';
import Ct from './Ct';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import "../Styling/Km.css";

const Km = () => {
    let obj = useContext(Ct);
    let [prodobj, setProd] = useState("");
    let [rv, setRv] = useState({ "text": "", "rt": 5 });
    const [hover, setHover] = useState(-1);
    let navigate = useNavigate();

    // useEffect(() => {
    //     setProd(obj.state.proddet);
    // }, []);

    
    useEffect(() => {
        if (obj.state.proddet) {
            setProd(obj.state.proddet);
        }
    }, [obj.state.proddet]);
    


    let add = () => {
        axios.post("http://localhost:5001/addcart", { 'uid': obj.state._id, 'pid': prodobj._id, 'pimg': prodobj.pimg, 'price': prodobj.price, 'name': prodobj.name, 'qty': 1 }, { "headers": { "Authorization": obj.state.token } }).then(() => {
            navigate("/cart");
        });
    };

    let addcom = () => {
        axios.put("http://localhost:5001/addcomment", { ...rv, "name": obj.state.name, "_id": prodobj._id }, { "headers": { "Authorization": obj.state.token } }).then((res) => {
            setProd(res.data);
            setRv({ "text": "", "rt": 5 });
        });
    };

    return (
        <div className="km-container"> {/* Unique wrapper */}
            {prodobj !== "" && prodobj.pimg && (
                
                <div className="km-card card shadow p-3 mb-5 bg-white rounded">
                    <img src={`http://localhost:5001/${prodobj.pimg}`} className="km-img card-img-top img-fluid" alt="Product" />
                    <div className="km-body card-body">
                        <h5 className="km-title card-title">{prodobj.name.toUpperCase()}</h5>
                        <p><strong>Price:</strong> {prodobj.price}</p>
                        <p><strong>Category:</strong> {prodobj.cat}</p>
                        <p><strong>Description:</strong> {prodobj.desc}</p>

                        <h1 className="mt-4 km-heading">Comments Added by Users:</h1>
                        {prodobj.comm.map((com) => (
                            <div key={com._id} className="km-comment mb-3">
                                <h3>{com.name}</h3>
                                <p>{com.text}</p>
                                <Rating name="half-rating-read" defaultValue={com.rt} precision={0.5} readOnly />
                            </div>
                        ))}

                        {obj.state.token !== "" && (
                            <div className="km-comment-box mt-4">
                                <h3>Leave a Comment:</h3>
                                <input type='text' onChange={(e) => setRv({ ...rv, "text": e.target.value })} name="text" value={rv.text} className="km-input form-control mb-3" placeholder="Enter your comment" />
                                <Rating
                                    name="hover-feedback"
                                    value={rv.rt}
                                    precision={0.5}
                                    onChange={(event, newValue) => setRv({ ...rv, "rt": newValue })}
                                    onChangeActive={(event, newHover) => setHover(newHover)}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                <button onClick={addcom} className="km-btn btn btn-primary mt-2">Add Comment</button>
                            </div>
                        )}

                        <button onClick={add} className="km-btn btn btn-success mt-4">Add to Cart</button>
                        <button className="km-btn btn btn-secondary mt-4 ms-2">
                            <Link to="/" className="text-decoration-none text-white">Go to Products</Link>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Km;

