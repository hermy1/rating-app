
import axios from "axios";
export default function RatingData() {

// const ratingDats = () => {
  // const [rateData setRateData] = useState([])
  // const results = []

    axios
      .get("http://localhost:3000/rateData/")
      .catch((error) => console.log(error.message))
      .then((response) => {

       return (response.data)
        
        
      });

    

  // return (
  //   // <div>
  //   //   {console.log('h')}
  //   // </div> 
  //   {}
  // )
}


// export const myData = [
//   {
//     comment: "sssssssssssssssssss989ssssssssssssssss",
//     rate: 9,
//     time: "2:53:12 PM",
//     id: "82",
//   },
// ];

// export default myData;
