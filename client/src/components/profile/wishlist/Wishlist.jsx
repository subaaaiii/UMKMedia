import React, { useEffect, useState } from "react";
import { api } from "../../../api/api";
import WishlistCard from "../../global-component/card/wishlist-card/WishlistCard";

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);
    //const [count, setCount] = useState(0);

    const fetchWishlist = async () => {
       try {
        const token = JSON.parse(localStorage.getItem("auth"));
        const response = await api.get(
          `${process.env.REACT_APP_API_BASE_URL}/kelasWishlist/myWishlist`,
          {
            headers: {
              Accept: "application/json", "Content-Type": "application/Json",
              Authorization: token,
            },
          }
        )
         setWishlist(response.data.data);
          console.log(response);
     } catch (error) {
        console.log(error);
      }
     };
  
    useEffect(() => {
      fetchWishlist();
      
    }, []);
    console.log(wishlist.wishlist)

    useEffect(() => {
      console.log(wishlist)
    },[wishlist]);

  return (
    <div className="flex flex-col">
      <p className="text-[24px] md:text-[32px] font-bold leading-[72px] mb-[16px] text-black">
        Wishlist
      </p>
      <p className="mb-[37px] text-[24px] font-normal leading-[72px] text-black500">Course yang disimpan</p>
      <div className="grid grid-cols-1  lg:grid-cols-2  xl:grid-cols-3  gap-[24px]">
      {/* {wishlist.map((wishlist, ) =>  { */}
        {wishlist.map((wishlist, index) => {
          const dataRating = wishlist.kelas_bisni.kelas_ratings;
          console.log(dataRating);
          const getSum = dataRating.reduce(
            (acc, obj) => acc + obj.nilai,
            0
          );
          const getAvarage = Number(getSum / dataRating.length).toFixed(1);
          return (
            
          <WishlistCard key={index} wishlist={wishlist} 
           index={index}
          star={isNaN(getAvarage) ? Number(0) : getAvarage}
          />
          );
          })}
        
      {/* //setCount((prev) => prev+1)
      // return (
      // //<div>{count}</div>
      // // <WishlistCard wishlist={wishlist} />
      // )
      //})} */}
      </div>
    </div>
  );
}

export default Wishlist;