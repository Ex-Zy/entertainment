<script lang="ts" setup>
import TheUser from "./TheUser.vue";
import MenuList from "./menu/MenuList.vue";
import MenuItem from "./menu/MenuItem.vue";
import TheLogo from "./TheLogo.vue";
</script>
<template>
  <TheLogo />
  <MenuList>
    <MenuItem iconName="nav-home" to="/" />
    <MenuItem iconName="nav-movies" to="/movies" />
    <MenuItem iconName="nav-tv-series" to="/tv-series" />
    <MenuItem iconName="nav-bookmark" to="/bookmarks" />
  </MenuList>
  <TheUser />
</template>
