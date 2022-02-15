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

    const filterTodos = () => {
        clearTodos();
        setUserId();
    }

    function clearTodos() {
        let todos = document.querySelectorAll('li');
        // todos.remove();
        for(let i =0; i<todos.length; i++){
            todos[i].remove();
        }
        
    }

    function setUserId() {
        const userId = document.getElementById('userIdIn').value;
        console.log("userId is: "+ userId);
        console.log(arrayOfTodos);
        let results = arrayOfTodos.filter(todo => todo.userId===parseInt(userId));
        console.log(results);
    
        for(let i=0; i<results.length; i++){
            let title = results[i].title;
            let listI = document.createElement('li');
            let newText = document.createTextNode(title);
            listI.appendChild(newText);
            ordList.appendChild(listI);
        }
    
    }

    //Next step create a button that will remove these todos and show only the ones that are completed
    //Next step create a button that will remove these todos and show only the ones that are NOOOOT completed


    //ADVANCED - build another column for complete todos
    //sort the todos on just one click
        //show only the selected userID's todos
        //displays the completed todos in one column
        //and the incomplete todos in another.