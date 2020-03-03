import { Todo } from './../../interfaces/todo';

export class TodoState {
	Todo: Array<Todo>;
	TodoError: Error;
}

export const initializeState = (): TodoState => {
	return {
		Todo: Array<Todo>(), TodoError: null
	};
}
