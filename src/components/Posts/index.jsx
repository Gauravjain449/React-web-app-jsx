import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get("/posts");
    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <ReactTable
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
      />
    </div>
  );
};

export default Posts;
