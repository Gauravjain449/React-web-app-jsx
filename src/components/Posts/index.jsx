import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

import { raw_data } from "./text";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    let xx = raw_data.split(";");
    let flt_xx = xx.filter(x => x.indexOf("singh") > 0);
    //console.log(flt_xx);

    // const response = await axios.get("/posts");
    setPosts(flt_xx);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map(x => (
        <div>{x}</div>
      ))}
      
      {/* <ReactTable
        data={posts}
        columns={[
          {
            Header: "Id",
            width: 40,
            accessor: "id"
          },
          {
            Header: "User Id",
            width: 60,
            accessor: "userId"
          },
          {
            Header: "Title",
            accessor: "title"
          },
          {
            Header: "Body",
            accessor: "body"
          }
        ]}
      /> */}
    </div>
  );
};

export default Posts;
