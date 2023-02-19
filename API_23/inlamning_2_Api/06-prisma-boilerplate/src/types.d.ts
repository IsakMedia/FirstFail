/**
 * Type Definitions
 */

export type CreateUserData = {
	first_name: string,
	last_name: string,
	email: string,
	password: string,
}

export type UpdateUserData = {
	first_name?: string,
	last_name?: string,
	email?: string,
	password?: string,
}

