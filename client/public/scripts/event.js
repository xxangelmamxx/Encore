const renderEvent = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())

  const response = await fetch('/events')
  const data = await response.json()

  const eventContent = document.getElementById('event-content')

  let event

  if (data) {
    event = data.find(event => event.id === requestedID)
  }

  if (event) {
    document.getElementById('image').src = event.image
    document.getElementById('name').textContent = event.name
    document.getElementById('artists').textContent = 'Artists: ' + event.artists.join(', ')
    document.getElementById('date').textContent =
      'When: ' +
      new Date(event.date).toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short'
      })
    document.getElementById('venue').textContent = 'Venue: ' + event.venue
    document.getElementById('genre').textContent = 'Genre: ' + event.genre
    document.getElementById('ticketPrice').textContent = 'Ticket Price: ' + event.ticketPrice
    document.getElementById('description').textContent = event.description
    document.title = `Encore - ${event.name}`
  } else {
    const message = document.createElement('h2')
    message.textContent = 'No Events Available'
    eventContent.appendChild(message)
  }
}

renderEvent()
