<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <!-- <router-link to="/Features">Features</router-link> -->

    <a href ='#'>
            {{ title }}
    </a>

    <div class="icon" >
           <img v-if="isOpen"  src="../components/images/icon-arrow-up.svg" alt=""/>
           <img  v-else src="../components/images/icon-arrow-down.svg"/>
    </div>

    <transition name="fade" apear>
         <div class="sub-menu" v-if="isOpen">
            <div class="menu-item">
              <img src="./images/icon-todo.svg" alt="" />
              <router-link to="/services/web">Todo List</router-link>
            </div>
            <div class="menu-item">
              <img src="./images/icon-calendar.svg" alt="" />
              <router-link to="/services/design">Calendar</router-link>
            </div>
            <div class="menu-item">
              <img src="./images/icon-reminders.svg" alt="" />
              <router-link to="/services/videos">Reminders</router-link>
            </div>
            <div class="menu-item">
              <img src="./images/icon-planning.svg" alt="" />
              <router-link to="/services/videos">Planning</router-link>
            </div>
        </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'Features',
  props: ['title'],
  data() {
    return {
      isOpen: false,
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  z-index: 1;
}
nav .menu-item .sub-menu {
  position: absolute;
  top: calc(100% + 5px);
  left: 20%;
  transform: translateX(-50%);
  width:max-content;
  /* border-radius: 0px 0px 16px 16px; */
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
.sub-menu .menu-item > img {
  width: 13px;
  margin-right: 15px;
  padding-top: 5px;
}
</style>
