import React from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "NYX",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src=""
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>NYX</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src=""
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>79.<sup>99</sup></td>
            <td>NYX</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src=""
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>110.<sup>99</sup></td>
            <td>NYX</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src=""
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>39.<sup>99</sup></td>
            <td>NYX</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src=""
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>119.<sup>99</sup></td>
            <td>NYX</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src=""
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>49.<sup>99</sup></td>
            <td>NYX</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;