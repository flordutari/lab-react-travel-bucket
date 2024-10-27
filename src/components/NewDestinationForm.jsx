import React from 'react'

const NewDestinationForm = ({handleChange, handleSubmit, input}) => {
  return (
    <>
          <form onSubmit={handleSubmit}>
            <input
              value={input.name}
              name="name"
              type="text"
              placeholder="Add new destination"
              onChange={handleChange}
            />
            <input type="text"
            value={input.continent}
            name='continent'
            onChange={handleChange}
            placeholder="Add continent"/>

            <input type="text"
            value={input.image}
            name='image'
            onChange={handleChange}
            placeholder="Add image url"/>

            <input type="text"
            value={input.notes}
            name='notes'
            onChange={handleChange}
            placeholder="Additional notes"/>
            <button type="submit">Add to list</button>
          </form>
    </>
  )
}

export default NewDestinationForm