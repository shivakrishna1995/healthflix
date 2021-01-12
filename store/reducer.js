export default (state = [], { type, payload }) => {
    switch (type) {
        case "LOAD_PRODUCTS":
            return payload;

        default:
            return state;
    }
}