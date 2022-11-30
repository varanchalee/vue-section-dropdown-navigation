<template>
    <div class="menu-item" @click="Open = !Open">
      <!-- <router-link to="/Company">Company</router-link> -->
      <a href ='#'>
            {{ comprop }}
      </a>

    <div class="icon" >
           <img v-if="Open"  src="../components/images/icon-arrow-up.svg" alt=""/>
           <img  v-else src="../components/images/icon-arrow-down.svg"/>
    </div>
  
    <transition name="fade" apear>
         <div class="sub-menu" v-if="Open">
            <div class="menu-item">
              <router-link to="/services/web">History</router-link>
            </div>
            <div class="menu-item">
              <router-link to="/services/design">Our Team</router-link>
            </div>
            <div class="menu-item">
              <router-link to="/services/videos">Blog</router-link>
            </div>
        </div>
    </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'company',
    props: ['comprop'],
    data() {
      return {
        Open: false,
      };
    },
  };
  </script>

<style scoped>
nav .menu-item .icon {
    width: 10px;
    margin-left: 10px;
}
nav .sub-menu {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  margin: 5px;
  padding: 15px;
  border-radius: 10px;
  z-index: 1;
}
nav .menu-item .sub-menu {
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.sub-menu {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: var(--my-dn-content-text);
  transition: .3s ease-in-out;
  font-size: .75rem;
}
a:hover {
  color: var(--my-dn-title-text);
}
</style>
  