<template>
  <div id="Header">
    <div class="headerContainer">
      <i @click="setShowMenu" class="fas fa-bars"></i>
      <img @click="$router.push('/Calendar')" src="../assets/images/wzlogo.png" alt />
    </div>
  </div>
</template>

<script>
import Identify from "../components/Identify";
export default {
  name: "Header",
  components: {
    Identify,
  },
  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    /* 左側選單呈現(平板以下) */
    setShowMenu() {
      this.showMenu = !this.showMenu;
      this.$emit("getShowMenu", this.showMenu);
    },
  },
  mounted() {},
};
</script>

<style lang='scss'>
</style>