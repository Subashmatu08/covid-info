<template>
  <div class="container">
    <div class="simply" style="height: 20vh"></div>
    <!-- <h1 class="is-size-2 pt-2">This is The feedback Page</h1>
    <p class="is-size-5">Page under Construction</p> -->

    <form
      name="feedback"
      method="POST"
      netlify-honeypot="bot-field"
      netlify
      class="form-container"
    >
      <input type="hidden" name="form-name" value="feedBack" />
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            name="Name"
            class="input"
            type="text"
            placeholder="Please Enter Your Name"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            name="email"
            class="input"
            type="Email"
            placeholder="Please Enter Your Email"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <!-- <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span> -->
        </div>
        <!-- <p class="help is-danger">This email is invalid</p> -->
      </div>

      <div class="field">
        <label class="label">Feedback</label>
        <div class="control">
          <textarea
            name="Message"
            class="textarea"
            required
            placeholder="Enter Your Message"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <!-- <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div> -->
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
