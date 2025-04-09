<template>
  <NuxtLayout name="default">
    <div
      class="flex flex-col items-center justify-center py-12 text-center px-4 fade-in"
    >
      <img
        src="/maintance/underconstruct.png"
        alt="Under Construction"
        class="w-64 h-auto mb-6"
      />
      <h1 class="text-4xl font-bold text-gray-800 dark:text-white">
        Coming Soon
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        This page is currently under development.
      </p>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
