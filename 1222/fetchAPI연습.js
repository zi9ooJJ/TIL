fetch('https://randomuser.me/api/?password=upper,lower,number')
  .then(res => res.json())
  // .then(data => console.log(data))
  // .then(data => console.log(data.results[0].login))
  .then(data => console.log(JSON.stringify(data.results[0].login.password)))
  // json 데이터는 객체형이기 때문에 가져올 때 JSON.stringify() 써서 문자형으로 변환 해주는 것이 좋다.
  .catch(err => console.log(err));

  // url주소를 변수에 담아서 적용.
  const API_URL = "https://jsonplaceholder.typicode.com";

  const fetchPosts = () =>
    fetch(`${API_URL}/posts`)
      .then((response) => response.json())
      .then(data => console.log(data));
  
  fetchPosts();
  
  const fetchUsers = () =>
    fetch(`${API_URL}/users`).then((response) => response.json()).then(response => console.log(response));
  
    fetchUsers();