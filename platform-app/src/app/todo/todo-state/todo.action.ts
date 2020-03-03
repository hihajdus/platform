import { Todo } from './../../interfaces/todo';
import { createAction, props } from '@ngrx/store';

export const GetTodoAction = createAction('[Todo] - Get Todo');

export const CreateTodoAction = createAction(
	'[Todo] - Create Todo',
	props<Todo>()
);

export const BeginGetTodoAction = createAction(
	'[Todo] - Begin Get Todo'
	);

export const SuccessGetTodoAction = createAction(
	'[Todo] - Success Get Todo',
	props<{ payload: Todo[]} >()
);

export const BeginCreateTodoAction = createAction(
	'[Todo] - Begin Create Todo',
	props<{ payload: Todo[] }>()
);

export const SuccessCreateTodoAction = createAction(
	'[Todo] - Success Create Todo',
	props<{ payload: Todo[] }>()
);

export const ErrorTodoAction = createAction(
	'[Todo] - Error'. props<Error>();
)