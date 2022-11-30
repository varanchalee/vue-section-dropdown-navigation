<template>
  <nav>
    <div class="menu-item menu-logo">
      <routerLink to="/"><img src="./images/logo.svg" alt="" /></routerLink>
    </div>
    <Features class="menu-item" title="Features" />
    <Company class="menu-item" comprop="Company" />
    <div class="menu-item">
      <router-link to="/Careers">Careers</router-link>
    </div>
    <div class="menu-item"><router-link to="/About">About</router-link></div>

    <div class="margin-left">
      <div class="menu-item"><router-link to="/Login">Login</router-link></div>
      <div class="menu-item">
        <router-link to="/Register">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Features from "../components/FeaturesMenu.vue";
import Company from "../components/CompanyMenu.vue";
export default {
  name: "navbar",
  components: {
    Features,
    Company,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  /* margin: 0.5rem; */
  font-size: 0.75rem;
  width: 100%;
}

.menu-logo {
  width: 5rem;
}

img {
  width: 4.25rem;
  margin-top: 10px;
}

div .margin-left {
  margin-left: auto;
  margin-right: 1rem;
}

.margin-left .menu-item:nth-child(2) {
  display: inline-block;
  width: 75px;
  padding: 3px 10px;
  align-items: center;
}

.menu-item {
  /* padding: 25px 40px; */
  position: relative;
  display: flex;
  color: var(--my-dn-content-text);
  transition: 0.3s ease-in-out;
  margin: 8px;
  text-decoration: none;
}

.menu-item:hover {
  color: var(--my-dn-content-text);
}

.menu-item:last-of-type {
  border: 1.5px solid var(--my-dn-content-text);
  border-radius: 10px;
}

.menu-item:last-of-type:hover {
  border: 1.5px solid var(--my-dn-title-text);
}

a {
  color: var(--my-dn-content-text);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.8rem;
  transition: 0.3s ease-in-out;
}

a:hover {
  color: var(--my-dn-title-text);
  cursor: pointer;
}

@media (min-width: 960px) {
  nav,
  .margin-left {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
