<template>
  <nav
    class="navbar pl-5 pr-5"
    :class="{ isNavShown }"
    role="navigation"
    aria-label="main navigation"
    style="position: fixed"
  >
    <div class="navbar-brand">
      <p
        class="navbar-item logo"
        :class="{ isNavShown }"
        href="http://localhost:8080/#/"
        target="_blank"
      >
        Rjy Covid Info
      </p>

      <a
        role="button"
        class="navbar-burger"
        @click="isMenuShown = !isMenuShown"
        :class="{ 'is-active': isMenuShown, isNavShown }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isMenuShown }"
    >
      <div class="navbar-end">
        <router-link to="/" class="navbar-item" :class="{ isNavShown }"
          >Home</router-link
        >
        <router-link to="/about" class="navbar-item" :class="{ isNavShown }"
          >About</router-link
        >
        <router-link to="/feedback" class="navbar-item" :class="{ isNavShown }"
          >FeedBack</router-link
        >
        <!-- <router-link
          to="/commercial"
          class="navbar-item"
          :class="{ isNavShown }"
          >Commercial</router-link
        >
        <router-link to="/news" class="navbar-item" :class="{ isNavShown }"
          >News</router-link
        >
        <router-link to="/products" class="navbar-item" :class="{ isNavShown }"
          >Products</router-link
        >
        <router-link to="/services" class="navbar-item" :class="{ isNavShown }"
          >Services</router-link
        >
        <router-link
          to="/getintouch"
          class="navbar-item"
          :class="{ isNavShown }"
          >Get In Touch</router-link
        > -->

        <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {{hero}}
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  // props : {
  //     hero : String
  // }
  setup() {
    const isMenuShown = ref(false);
    const isNavShown = ref(false);
    function handleScroll() {
      if (window.scrollY > 1) {
        isNavShown.value = true;
      } else if (window.scrollY <= 1) {
        isNavShown.value = false;
      }
    }
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    return {
      isMenuShown,
      isNavShown,
    };
  },
};
</script>

<style lang="scss">
/* .navbar{
  width: 100vw !important;
} */
nav {
  position: fixed !important;
  /* background-color: rgba(255, 255, 255, 0.6) !important; */
  background-color: transparent !important;
  width: 100%;
}
.isNavShown {
  .logo {
    color: rgb(19, 19, 19);
    background: transparent;
  }
}
.logo {
  font-family: "Pattaya", sans-serif;
  font-size: 30px;
  color: rgb(19, 19, 19);
  background-color: rgba(128, 128, 128, 0.288);
  backdrop-filter: blur(2px);
  margin-top: 5px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
nav a {
  color: black !important;
  border-bottom: 1px solid transparent;
  text-align: center;
  font-weight: 500;
  margin-top: 5px;
  background-color: rgba(128, 128, 128, 0.288);
  backdrop-filter: blur(2px);
}
nav a:hover {
  background-color: transparent !important;
  border-bottom: 2px solid rgb(72, 241, 191);
}
nav a:focus {
  background-color: transparent !important;
}
nav.isNavShown {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  background-color: white !important;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 1.5px 7px grey;
}
nav a.isNavShown {
  color: black !important;
  background-color: transparent;
}
.navbar-menu {
  box-shadow: none !important;
}
navbar-burger.isNavShown {
  color: black !important;
}
.navbar-burger {
  height: auto;
}
@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: transparent !important;
  }
  .logo {
    background-color: transparent;
  }
  nav a:hover {
    border-bottom: none;
  }
}
</style>
