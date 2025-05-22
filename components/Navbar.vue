<script setup lang="ts">
import  md5  from "md5"
let isLoggedIn = false;

let avatarURL = null;
if(isLoggedIn) {
let userData = { email: "neon@saahild.com"}

  avatarURL = `https://gravatar.com/avatar/${md5(userData.email)}?d=identicon`;
}
</script>
<template>
    <div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">Artophage</a>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <div v-if="isLoggedIn">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Your avatar"
            :src="avatarURL" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="/api/logout">Logout</a></li>
      </ul>
      </div>
      <div v-else>
 <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="/api/login">Login</a></li>
      </ul>
    </div>
      </div>
    </div>
  </div>
</div>
</template>