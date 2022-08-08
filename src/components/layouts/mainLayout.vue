<template>
  <section class="flex max-w-[1440px] m-auto flex-col lg:flex-row h-screen">
    <aside
      class="flex items-center justify-between h-[56px] md:h-[72px] md:m-6 md:mb-0 md:rounded-lg shrink-0 px-4 md:px-6 lg:h-auto lg:flex-col lg:sticky lg:top-0 bg-blue-default lg:rounded-[20px] lg:m-8 lg:py-8 relative"
    >
      <slot name="navbar">Default navigation content</slot>
    </aside>
    <main class="grow p-4 md:p-6 lg:my-8 overflow-auto">
      <slot name="page">Default page content</slot>
    </main>
  </section>
</template>
