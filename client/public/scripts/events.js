const renderEvents = async () => {
  const response = await fetch('/events')
  const data = await response.json()

  const mainContent = document.getElementById('main-content')

  if (data) {
    const cardsGrid = document.createElement('div')
    cardsGrid.classList.add('cards-grid')

    data.map(event => {
      const card = document.createElement('article')
      card.classList.add('card')

      const topContainer = document.createElement('div')
      topContainer.classList.add('top-container')
      topContainer.style.backgroundImage = `url(${event.image})`

      const bottomContainer = document.createElement('div')
      bottomContainer.classList.add('bottom-container')

      const name = document.createElement('h3')
      name.textContent = event.name
      bottomContainer.appendChild(name)

      const date = document.createElement('p')
      date.textContent = new Date(event.date).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
      bottomContainer.appendChild(date)

      const venue = document.createElement('p')
      venue.textContent = event.venue
      bottomContainer.appendChild(venue)

      const genre = document.createElement('p')
      genre.textContent = event.genre
      bottomContainer.appendChild(genre)

      const ticketPrice = document.createElement('p')
      ticketPrice.textContent = event.ticketPrice
      bottomContainer.appendChild(ticketPrice)

      const link = document.createElement('a')
      link.textContent = 'See Details >'
      link.setAttribute('role', 'button')
      link.href = `/events/${event.id}`
      bottomContainer.appendChild(link)

      card.appendChild(topContainer)
      card.appendChild(bottomContainer)
      cardsGrid.appendChild(card)
    })

    mainContent.appendChild(cardsGrid)
  } else {
    const message = document.createElement('h2')
    message.textContent = 'No Events Available'
    mainContent.appendChild(message)
  }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
  window.location.href = '/404.html'
} else {
  renderEvents()
}
