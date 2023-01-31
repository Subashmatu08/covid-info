<template>
  <nav
    class="navbar pl-5 pr-5"
    :class="{ isNavShown }"
    role="navigation"
    aria-label="main navigation"
    style="position: fixed"
  >
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item logo" :class="{ isNavShown }"
        >RJY Covid Info</router-link
      >

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
        <router-link to="/" class="navbar-item" :class="{ isNavShown }" exact
          >Home</router-link
        >
        <router-link
          to="/about"
          class="navbar-item"
          :class="{ isNavShown }"
          active-class="router-link-active"
          >About</router-link
        >
        <router-link
          to="/feedback"
          class="navbar-item"
          :class="{ isNavShown }"
          active-class="router-link-active"
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
  // background-color: rgba(240, 239, 239, 0.288) !important;
  background: transparent !important;
  backdrop-filter: blur(2px);
  box-shadow: 0px 1px 4px rgba(66, 66, 66, 0.199);
}
.isNavShown {
  .logo {
    color: rgb(19, 19, 19) !important;
    background: transparent;
    // -webkit-text-stroke: 1px transparent;
  }
  .navbar-end {
    background-color: transparent !important;
    backdrop-filter: none;
  }
}
.logo {
  // font-family: 'Pattaya', sans-serif;
  font-family: "Azonix", sans-serif;
  font-size: 25px;
  color: rgb(7, 7, 7) !important;
  // background: rgba(253, 253, 253, 0.363);
  margin-top: 5px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  // text-shadow: 1px 1px 1px grey;
  &:focus {
    background: transparent;
  }
  &:hover {
    color: black !important;
    // background: rgba(253, 253, 253, 0.363) !important;
  }
}
// .logo::before {
//   content: "Rjy";
// }
nav a {
  color: black !important;
  text-align: center;
  font-weight: 500;
  margin-top: 5px;
  border: none;
  margin: auto 2px;
  &:hover {
    background: transparent !important;
  }
  &:focus {
    background: transparent !important;
  }
}
.navbar-menu a::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -10%;
  left: 0%;
  width: 0;
  height: 2px;
  background: rgb(72, 241, 191);
}
.navbar-menu a:hover::after {
  width: 100%;
  transition: width 0.4s ease-in-out;
}
// nav a:hover {
//   background-color: transparent !important;
//   border-bottom: 2px solid rgb(72, 241, 191) !important;
//   // border-bottom: 2px solid rgb(53, 177, 140) !important;
// }

nav.isNavShown {
  padding-top: 3px !important;
  padding-bottom: 3px !important;
  background-color: white !important;
  transition: 0.2s ease-in-out;
  box-shadow: 0px 1.5px 7px rgb(66, 66, 66);
}
.navbar-menu a.isNavShown {
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
nav a.router-link-active {
  // border-bottom: 2px solid rgb(72, 241, 191) !important ;
  // border-bottom: 2px solid rgb(53, 177, 140) !important;
  &::after {
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  .navbar-menu,
  .navbar-burger,
  nav a:hover {
    display: none !important;
  }
  // nav a:hover {
  //   display: none;
  // }
  // .navbar-burger {
  //   display: none !important;
  // }
  .logo {
    text-align: center !important;
    font-size: 20px;
    // &::before {
    //   content: 'Rajahmundry';
    // }
    a {
      &:hover {
        color: inherit;
      }
    }
  }

  nav {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    box-shadow: 0px 1.5px 7px rgb(197, 196, 196);
    background-color: white !important;
    display: flex;
    justify-content: center;
  }
  nav.isNavShown {
    height: 78px;
    .logo {
      font-size: 30px;
      transition: font-size 0.2s ease-in-out;
    }
  }
}
</style>
