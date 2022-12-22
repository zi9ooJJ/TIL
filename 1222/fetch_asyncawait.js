function fetchUser() {
    var url = 'https://jsonplaceholder.typicode.com/users/1'
    return fetch(url).then((res) => res.json());
}

function fetchTodo() {
    var url = 'https://jsonplaceholder.typicode.com/todos/1'
    return fetch(url).then((res) => {return res.json()});
}

/*
1. fetchUser()를 이용하여 사용자 정보 호출
2. 받아온 사용자 아이디가 '1'이면 Todo 정보 호출
3. 받아온 할 일 정보의 title을 콘솔에 출력
*/
async function TodoTitle() {
    try {
        var user = await fetchUser();
        if (user.id === 1) {
            var todo = await fetchTodo();
            console.log(todo.title); // delectus aut autem
    }
    } catch (error) {
        console.log(error);
    }
    
} 