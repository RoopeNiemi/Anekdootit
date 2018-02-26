import React from 'react';


class App extends React.Component {
   generateId = () => (100000*Math.random()).toFixed(0)
  
   addVote=(event)=>{
event.preventDefault()
const content=event.target.anecdote.value
    this.props.store.dispatch({
      type:'NEW_ANECDOTE',
      data:{
        content:content,
        id:this.generateId(),
        votes:0,
      }
    })
  }

  vote=(id)=>()=>{
    console.log(id)
    this.props.store.dispatch({
      type:'VOTE',
     data:id
    })
  }
  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addVote}>
          <div><input name="anecdote" /></div>
          <button type="submit">create</button> 
        </form>
      </div>
    )
  }
}

export default App