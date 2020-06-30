<template>
  <div class="header-container">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="menu-logo" />
    </div>
    <div class="header-container-nav">
      <router-link class="link white" :to="{path: '/'}">
        <span><font-awesome-icon icon="euro-sign"/></span> Currencies
      </router-link>
    </div>
  </div>
</template>

