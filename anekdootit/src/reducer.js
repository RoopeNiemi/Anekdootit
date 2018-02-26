const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000*Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  if(action.type==='VOTE'){
    console.log('state now: ',state)
    console.log('action', action.data)
   const id=action.data
   const anecdoteObject=state.find(n=> Number(n.id)===Number(id))
   const newVotes=anecdoteObject.votes+1
    const changedAnecdote={...anecdoteObject, votes:newVotes}
    state=state.map(anecdote=> anecdote.id !== id ? anecdote : changedAnecdote)
}
if(action.type==='NEW_ANECDOTE'){
 state=[...state,action.data] 
}
state=state.sort(function(a,b){
  return b.votes-a.votes
})
return state

}

export default reducer