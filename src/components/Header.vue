<template>
  <div class="header-container">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="menu-logo" />
    </div>
    <div class="header-container-nav">
      <router-link :to="{path: '/'}">
        <span><font-awesome-icon icon="euro-sign"/></span> Currencies
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.header-container {
  width: 100%;
  height: 50px;
  background-color: #f26522;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  .logo {
    display: flex;
    flex: 0 0 22%;
    height: 30px;
    padding: 10px 0 10px 20px;
    img {
      width: 30px;
    }
  }
  &-nav {
    display: flex;
    flex: 0 0 73%;
    justify-self: start;
    align-items: center;
  }
}
</style>
