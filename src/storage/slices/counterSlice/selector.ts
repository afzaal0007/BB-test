import type { RootState } from 'storage/types';

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value