// import axios from "axios"
// import { useContext, useEffect, useState } from "react"
// import Ct from "./Ct"
// import { useNavigate } from "react-router-dom"


// const Home = () => {
//   let [prod,setProd]=useState([])
//   let obj=useContext(Ct)
//   let navigate=useNavigate()
//   let [f,setF]=useState(true)
//   useEffect(()=>{
//     axios.get("http://localhost:5001/product").then((res)=>{
//       setProd(res.data)
//     })

//   },[f])
//   let addcart=(prodobj)=>{
//     axios.post("http://localhost:5001/addcart",{'uid':obj.state._id,'pid':prodobj._id,'pimg':prodobj.pimg,'price':prodobj.price,'name':prodobj.name,'qty':1},{"headers":{"Authorization":obj.state.token}}).then((res)=>{
//       let fl=window.confirm('continue shopping?')
//       if(!fl)
//       {
// navigate("/cart")
//       }


//     })

//   }
//   let knowmore=(prodobj)=>{
//     obj.updstate({"proddet":prodobj})
//     navigate("/km")
//   }
//   let edit=(prodobj)=>{
//     obj.updstate({"proddet":prodobj})
//     navigate("/edit")
//   }
//   let del=(pid)=>{
//     console.log(pid)
//     axios.delete(`http://localhost:5001/delprod/${pid}`,{"headers":{"Authorization":obj.state.token,"uid":obj.state._id}}).then((res)=>{
//       console.log(res.data)
// setF(!f)
//     })
//   }

//   return (
//     <div className="container-fluid dflex" style={{"flexWrap":"wrap","justifyContent":"space-evenly","gap":"10px"}}>

//       {
//         prod.map((prodobj)=>{
//           return(<div className="card" style={{"width":"35%"}}>
//             <img src={`http://localhost:5001/${prodobj.pimg}`} className="card-img-top"/>
//             <div className="card-body">
//               <h5 className="card-title text-secondary">{prodobj.name.toUpperCase()}</h5>
//               <p>Price:{prodobj.price}</p>
//               <p>Cat:{prodobj.cat}</p>

//               <button className="btn btn-primary" onClick={()=>knowmore(prodobj)}>Know more</button>
//             { obj.state.token!=""&& <button className="btn btn-warning" onClick={()=>addcart(prodobj)}>Addcart</button>}
//             { obj.state.token!=""&&obj.state.role=="admin"&& <button className="btn btn-danger" onClick={()=>edit(prodobj)}>Edit</button>}
//             { obj.state.token!=""&& obj.state.role=="admin"&&<button className="btn btn-info" onClick={()=>del(prodobj._id)}>Delete</button>}
//               </div>
            

//           </div>)
//         })
//       }

//     </div>
//   )
// }

// export default Home

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Ct from "./Ct"; // Assuming Ct is a context provider
import { useLocation, useNavigate } from "react-router-dom";
import "../Styling/Home.css"
import Hero from "./Hero";

const Home = () => {
// these ishor hero slideshow
const loc = useLocation()

  // State to store products
  let [prod, setProd] = useState([]);

  // Context object
  let obj = useContext(Ct);

  // Navigation hook
  let navigate = useNavigate();

  // State to trigger re-render on delete
  let [f, setF] = useState(true);

  // Fetch products from API on component mount
  useEffect(() => {
    axios.get("http://localhost:5001/product")
      .then((res) => {
        setProd(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [f]);

  // Function to add product to cart
  let addcart = (prodobj) => {
    axios.post("http://localhost:5001/addcart", {
      'uid': obj.state._id,
      'pid': prodobj._id,
      'pimg': prodobj.pimg,
      'price': prodobj.price,
      'name': prodobj.name,
      'qty': 1
    }, {
      headers: {
        "Authorization": obj.state.token
      }
    })
      .then((res) => {
        let fl = window.confirm('Continue shopping?');
        if (!fl) {
          navigate("/cart");
        }
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  // Function to view product details
  let knowmore = (prodobj) => {
    obj.updstate({ "proddet": prodobj });
    navigate("/km");
  };

  // Function to edit product (for admins)
  let edit = (prodobj) => {
    obj.updstate({ "proddet": prodobj });
    navigate("/edit");
  };

  // Function to delete product (for admins)
  let del = (pid) => {
    console.log(pid);
    axios.delete(`http://localhost:5001/delprod/${pid}`, {
      headers: {
        "Authorization": obj.state.token,
        "uid": obj.state._id
      }
    })
      .then((res) => {
        console.log(res.data);
        setF(!f); // Trigger re-render
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (

    // showing slidebar
    <div>
      {loc.pathname === '/' && <Hero />}

    <div className="container-fluid dflex" style={{
      "flexWrap": "wrap",
      "justifyContent": "space-evenly",
      "gap": "10px"
    }}>
      {
        prod.map((prodobj) => {
          return (
            <div className="card">
              <img src={`http://localhost:5001/${prodobj.pimg}`} className="card-img-top" alt={prodobj.name} />
              <div className="card-body">
                <h5 className="card-title text-secondary">{prodobj.name.toUpperCase()}</h5>
                <p>Price: {prodobj.price}</p>
                <p>Cat: {prodobj.cat}</p>

                <button className="btn btn-primary" onClick={() => knowmore(prodobj)}>Know more</button>
                {obj.state.token !== "" && <button className="btn btn-warning" onClick={() => addcart(prodobj)}>Add to Cart</button>}
                {obj.state.token !== "" && obj.state.role === "admin" && <button className="btn btn-danger" onClick={() => edit(prodobj)}>Edit</button>}
                {obj.state.token !== "" && obj.state.role === "admin" && <button className="btn btn-info" onClick={() => del(prodobj._id)}>Delete</button>}
              </div>
            </div>
          );
        })
      }
    </div>
    </div>
  );
};

export default Home;

