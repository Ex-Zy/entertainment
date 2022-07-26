<script lang="ts" setup>
import TheUser from "./TheUser.vue";
import MenuList from "./menu/MenuList.vue";
import MenuItem from "./menu/MenuItem.vue";
import TheLogo from "./TheLogo.vue";
</script>
<template>
  <TheLogo />
  <MenuList>
    <MenuItem
      iconName="nav-home"
      :iconClasses="['w-4 h-4 md:w-5 md:h-5']"
      class="p-3 md:p-4 lg:p-5'"
      to="/"
    />
    <MenuItem
      iconName="nav-movies"
      :iconClasses="['w-4 h-4 md:w-5 md:h-5']"
      class="p-3 md:p-4 lg:p-5'"
      to="/movies"
    />
    <MenuItem
      iconName="nav-tv-series"
      :iconClasses="['w-4 h-4 md:w-5 md:h-5']"
      class="p-3 lg:p-5'"
      to="/series"
    />
    <MenuItem
      iconName="nav-bookmark"
      :iconClasses="['w-4 h-4 md:w-5 md:h-5']"
      class="p-3 md:p-4 lg:p-5'"
      to="/bookmarks"
    />
  </MenuList>
  <TheUser />
</template>
