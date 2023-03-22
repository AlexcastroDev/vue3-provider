
<template>
  <slot></slot>
</template>

<script lang="ts">
import { reactive, provide, toRefs } from 'vue';
import { FlexysearchState } from './TableProvider.types'
import MockData from './data'

const state: FlexysearchState = reactive({
  filtered_data: MockData,
});

export default {
  setup() {
    const filterData = (search_term: string) => {
      const payload = MockData.filter((item) => {
        const values = Object.values(item).join(' ').toLowerCase();
        const pattern = new RegExp(search_term.toLowerCase());
        return pattern.test(values);
      });
      state.filtered_data = payload;
    };

    provide('flexysearch', {...toRefs(state), filterData });
  },
};
</script>