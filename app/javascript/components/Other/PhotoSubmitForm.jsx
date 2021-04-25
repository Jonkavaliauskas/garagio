import React from 'react';

const PhotoSubmitForm = props => {

    const submitPost = formData => {
        const config = {
          method: "POST",
          headers: {
            "Authorization": localStorage.getItem("token"),
            "Accept": "application/json"
          },
          body: formData
        }
        return fetch(POSTS_URL, config)
          .then(res => res.json());
      }

    const handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData(event.target)
        submitPost(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="caption">
              Caption
              <input type="text" name="caption" />
          </label>
          <label htmlFor="image" >
              Upload image
              <input type="file" name="image" accept="image/*" />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
  
}

export default PhotoSubmitForm;