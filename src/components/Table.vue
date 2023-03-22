<script lang="ts" setup>
import { inject } from 'vue';
import { FlexysearchProvider } from '../provider/TableProvider.types';
import { ref } from 'vue';

const flexysearchState: FlexysearchProvider = inject('flexysearch') || {} as FlexysearchProvider;
const filtered_data = ref(flexysearchState.filtered_data);
const search_term = ref('');
</script>

<template>
  <v-text-field
    v-model="search_term"
    label="Search"
    required
    @input="flexysearchState.filterData(search_term)"
  />
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Mass</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in filtered_data" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.mass }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
