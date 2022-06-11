import {addPost, InitialStateProfilePageType, PostDataType, profileReducer, removePost} from "./profile-reducer";


let initialState: InitialStateProfilePageType

beforeEach(() => {
	initialState = {
		posts: [
			{
				id: '1',
				message: "It's my 4nd post from profileReducer initialState (connected with Redux by Dimich legacy code)",
				likesCount: 5
			},
			{id: '2', message: "Hi, how are you now?", likesCount: 7},
			{id: '3', message: "Where are you from?", likesCount: 9}
		] as PostDataType[],
		//newPostText: "",
		profile: null,
		status: ''// null
	}
})


test(`correct posts should be added`, ()=>{
	//  1.start data
	let action = addPost(`it-incubator`)

	// 2. action
	let newState = profileReducer(initialState, action)
	// 3. expectation
	expect(newState.posts.length).toBe(4)
	expect(newState.posts[3].message).toBe(`it-incubator`)

})

test(`correct post should be removed`, ()=>{
	let action = removePost(`1`)
	let newState = profileReducer(initialState, action)
	expect(newState.posts.length).toBe(2)
	expect(newState.posts).toEqual([
		{ id: '2', message: 'Hi, how are you now?', likesCount: 7 },
		{ id: '3', message: 'Where are you from?', likesCount: 9 }
	])
	console.log(newState)
})

