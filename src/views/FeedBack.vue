<template>
  <div class="container">
    <div class="simply" style="height: 30vh"></div>
    <h1 class="is-size-2 pt-2">This is The FeedBack Page</h1>
    <p class="is-size-5">Page under Construction</p>
    <div class="form-container">
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label
            >Your Role:
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label
          >
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
    <div class="simply" style="height: 50vh"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  components: {},
  setup() {
    onMounted(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    });
  },
};
</script>

<style lang="scss"></style>
