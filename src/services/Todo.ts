// Sercices
import Api from './Api';

// Utils
import request from '../utils/request';


class Todo extends Api {
  static getTodos<T>() {
    return request<T>('GET', 'todos');
  }
}

export default Todo;