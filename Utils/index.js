
export const findByTestAtrr = (component, arg) => {
    const wrapper = component.find(`[data-test='${arg}']`);
     return wrapper;
};