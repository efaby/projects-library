/**
 * @Description All the types and interfaces goes here
 */

export interface Project {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}

export interface User {
  id?: number;
  name?: string;
}
