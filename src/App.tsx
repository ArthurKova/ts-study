import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
// import { users } from "./components/data/users";
// import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import { UserItem } from "./components/UserItem";
import { TodoItem } from "./components/TodoItem";
import { Events } from "./components/Events";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodo();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Typescript</h1>
      <Events />
      <Card width="200" height="300">
        <button>button</button>
      </Card>
      {/* <UserList users={users} /> */}
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
}

export default App;
