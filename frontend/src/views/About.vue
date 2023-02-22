<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({})
</script>

<template>
  <div>
    <label for="locale"> locale </label>
    <select v-model="$i18n.locale">
      <option> en </option>
      <option> zh </option>
    </select>
    <p> message: {{ t('about') }} </p>
  </div>
</template>

<style scoped></style>

<i18n lang="yaml">
  en:
    about: "About"
  zh:
    about: "关于"
</i18n>
