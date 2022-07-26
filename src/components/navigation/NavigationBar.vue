<script lang="ts" setup>
import TheUser from "./TheUser.vue";
import MenuList from "./menu/MenuList.vue";
import MenuItem from "./menu/MenuItem.vue";
import TheLogo from "./TheLogo.vue";
</script>
<template>
  <TheLogo />
  <MenuList>
    <MenuItem icon="home" />
    <MenuItem icon="movies" />
    <MenuItem icon="tv-series" />
    <MenuItem icon="bookmarks" />
  </MenuList>
  <TheUser />
</template>
