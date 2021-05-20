<template>
  <nav
    class="navbar pl-5 pr-5"
    :class="{ isNavShown }"
    role="navigation"
    aria-label="main navigation"
    style="position: fixed"
  >
    <div class="navbar-brand">
      <p class="navbar-item logo" :class="{ isNavShown }">&nbsp;Covid Info</p>

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
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
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
nav {
  position: fixed !important;
  width: 100%;
  background-color: rgba(240, 239, 239, 0.288) !important;
  backdrop-filter: blur(2px);
}
.isNavShown {
  .logo {
    color: rgb(19, 19, 19);
    background: transparent;
  }
  .navbar-end {
    background-color: transparent !important;
    backdrop-filter: none;
  }
}
.logo {
  font-family: "Pattaya", sans-serif;
  font-size: 30px;
  color: rgb(19, 19, 19);
  margin-top: 5px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.logo::before {
  content: "Rjy";
}
nav a {
  color: black !important;
  border-bottom: 1px solid transparent;
  text-align: center;
  font-weight: 500;
  margin-top: 5px;
  border: none;
}
nav a:hover {
  background-color: transparent !important;
  border-bottom: 2px solid rgb(72, 241, 191) !important;
}
nav a:focus {
  background-color: transparent !important;
}
nav.isNavShown {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  background-color: white !important;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 1.5px 7px rgb(197, 196, 196);
}
nav a.isNavShown {
  color: black !important;
  background-color: transparent;
  border-bottom: none;
}
.navbar-menu {
  box-shadow: none !important;
}
.navbar-burger {
  height: auto;
}

@media screen and (max-width: 1024px) {
  .navbar-menu {
    display: none;
  }
  nav a:hover {
    display: none;
  }
  .navbar-burger {
    display: none !important;
  }
  .logo {
    text-align: center !important;
    font-size: 25px;
  }
  nav {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    box-shadow: 0px 1.5px 7px rgb(197, 196, 196);
    background-color: white !important;
    display: flex;
    justify-content: center;
    .logo::before {
      content: "Rajahmundry";
    }
  }
  nav.isNavShown {
    .logo {
      font-size: 30px !important;
      transition: 0.3s ease-in-out;
    }
  }
}
</style>
