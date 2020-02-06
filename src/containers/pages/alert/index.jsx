import React from 'react';
import swal from '@sweetalert/with-react';

const showAlert = () => {
  swal({
    text: 'Search for a movie. e.g. "La La Land".',
    content: "input",
    button: {
      text: "Search!",
      closeModal: false,
    },
  })
  .then(name => {
    if (!name) throw null;
      return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
  })
  .then(results => {
    return results.json();
  })
  .then(json => {
    const movie = json.results[0];
    if (!movie) {
      return swal("No movie was found!");
    }

    const name = movie.trackName;
    const imageURL = movie.artworkUrl100;

    swal({
      title: "Top result:",
      text: name,
      icon: imageURL,
    });
  })
  .catch(err => {
  if (err) {
    swal("Oh noes!", "The AJAX request failed!", "error");
    } else {
      swal.stopLoading();
      swal.close();
    }
  });
}

const RatingAlert = () => {
  return (
    <div>
      <button onClick= { () => showAlert()}>Show Alert</button>
    </div>
  )
}

export default RatingAlert;