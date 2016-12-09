//ACTION TYPES CONSTANTS
/*
For larger projects, there are some benefits to defining action types as constants.
http://redux.js.org/docs/recipes/ReducingBoilerplate.html
*/
const BIRTHDAY = 'BIRTHDAY'
const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_SCHOOL = 'CHANGE_SCHOOL'

//ACTION CREATORS
/*
It is another common convention that,
instead of creating action objects inline in the places where you dispatch the actions,
you would create functions generating them.

Action creators changeName & changeSchool are already functions. Let's change addAge to function too.
*/
const addAge = () => ({type: BIRTHDAY})

const changeName = name => ({type: CHANGE_NAME, name})

const changeSchool = school => ({type: CHANGE_SCHOOL, school})

export {
	addAge,
	changeName,
	changeSchool
}