import React from 'react';
import Review from './Review.jsx';
import ReactDOM from 'react-dom';

class reviewsPagination extends React.Component {
    constructor() {
      super();
      this.state = {
        todos: [],
        currentPage: 1,
        todosPerPage: 2
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
  
    render() {
      const { todos, currentPage, todosPerPage } = this.state;
  
      // Logic for displaying todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  
      const renderTodos = currentTodos.map((review, index) => {
        return <li key={index}> 
        <Review id={review.id} username={review.user} title={review.title} 
        rating={review.rating} timestamp={review.timestamp} content={review.content} 
        likes={10} dislikes={0} spams={0} />
        </li>;
      });
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
  
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });
  
      return (
        <div>
          <ul>
            {renderTodos}
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
      );
    }
  }
/*
  ReactDOM.render(
    <reviewsPagination />,
    document.getElementById('reviewsPagination')
  );
  */
  
  export default reviewsPagination
  
  
  