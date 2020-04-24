/**
 * @Description All the constants goes here
 */
export enum AppKeys {
  DEFAULT_PROJECT_NAME = 'Project',
  API_URL = 'https://jsonplaceholder.typicode.com'
}
export enum ProjectKeys {
  SCROLL_LIMIT = 10
}

export const PROJECT_TITLE = {prop: 'title', type: 'input', label: 'title'};
export const PROJECT_COMPLETED = {prop: 'completed', type: 'checkbox', label: 'Completed'};

export const DASH_BOARD = [{x: 0, y: 0, rows: 5, cols: 7}];

export const DASH_BOARD_FORM = [{x: 2, y: 0, rows: 5, cols: 3}];
