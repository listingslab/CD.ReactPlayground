export default function selectByIndex(state, key, value) {
    const index = state[`index_${key}`][value];
    return state.items[index];
}
