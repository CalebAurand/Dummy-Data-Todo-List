    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }];

    const ordList = document.getElementById('todo-list');
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos);
        console.log(arrayOfTodos[0].title);
        console.log(ordList);
        let title1 = arrayOfTodos[0].title;
        let listI = document.createElement('li');
        let newText = document.createTextNode(title1);
        listI.appendChild(newText);
        ordList.appendChild(listI);
        console.log(listI);
        console.log(ordList);

    }
    
    const populateTodos = () => {
        for(let i =0; i<arrayOfTodos.length; i++){
            let title1 = arrayOfTodos[i].title;
            let listI = document.createElement('li');
            let newText = document.createTextNode(title1);
            listI.appendChild(newText);
            ordList.appendChild(listI);
        }
    }