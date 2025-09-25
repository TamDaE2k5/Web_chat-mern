import { useEffect, useState } from "react";

function HelloUser() {
  // state để lưu tên user
  const [name, setName] = useState("");

  // useEffect sẽ chạy sau khi component được render
  useEffect(() => {
    // Gọi API từ backend
    fetch("http://localhost:5000/api/user") 
      .then(function(res){ return res.json()} ) // (res.json() = promise - tìm hiểu thêm)       // chuyển dữ liệu từ JSON string → object
      // = res.json().then((data)=>data.name)
      .then((data) => {
        setName(data.name);
      })
      .catch(err => console.error("Error fetching user:", err));
  }, []); // [] đảm bảo chỉ gọi API 1 lần khi load trang
  return (
    <h1 className="hello-text">Hello {name}</h1> 
  );
}

export default HelloUser;
