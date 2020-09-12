import React, { createContext, useContext, useReducer } from 'react'
export const StateContext = createContext()
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext)

export const initialState = {
	views: {
		timer: true,
		analytics: false
	}
}

export const stateReducer = (state, action) => {
	switch (action.type) {
		case "VIEW_ACTION":
			return {
				...state,
				views: action.views
			};
		default:
			return state;
	}
}
