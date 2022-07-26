<template>
  <section
    class="flex flex-col min-h-screen antialiased bg-blue-dark text-white"
  >
    <aside
      class="flex items-center justify-between h-[56px] sm:px-4 md:px-6 bg-blue-default"
    >
      <slot name="navbar">Default navigation content</slot>
    </aside>
    <main class="grow">
      <slot name="header" />
      <slot name="page">Default page content</slot>
    </main>
  </section>
</template>
