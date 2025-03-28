document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    let form = event.target;
    let formData = new FormData(form);

    try {
      // Send data to Make using fetch()
      let response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (response.ok) {
        // Redirect ONLY after a successful submission
        window.location.href = "/thank-you.html";
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an issue submitting the form.");
    }
  });
