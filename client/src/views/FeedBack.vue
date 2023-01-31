<script>
import emailjs from 'emailjs-com';
export default {
  name: 'ContactUs',
  data() {
    return {
      user_name: '',
      user_email: '',
      message: '',
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          'service_ot7esu9',
          'template_xfi5q28',
          e.target,
          'user_7CE2N3q1vNDjbpnG9IwIn',
          {
            user_name: this.user_name,
            user_email: this.user_email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.user_name = '';
      this.user_email = '';
      this.message = '';
    },
  },
};
</script>
<template>
  <div class="container">
    <h2 class="display-2">
      Have a Question or a Feedback, Fill the form below!
    </h2>
    <form class="contact-form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input
        type="text"
        v-model="user_name"
        name="user_name"
        placeholder="Please Enter Your Name"
        required
      />
      <label>Email</label>
      <input
        type="email"
        v-model="user_email"
        name="user_email"
        placeholder="Please Enter Your Email"
        required
      />
      <label>Message</label>
      <textarea
        name="message"
        placeholder="Give your Feedback"
        v-model="message"
        cols="30"
        rows="5"
        required
      ></textarea>
      <input type="submit" class="text-white bg-primary" value="Send" />
    </form>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  padding: 10vh 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

label {
  float: left;
}

input[type='text'],
[type='email'],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid rgb(44, 148, 117);
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type='submit'] {
  background-color: rgb(53, 177, 140);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: rgb(44, 148, 117);
}
</style>
