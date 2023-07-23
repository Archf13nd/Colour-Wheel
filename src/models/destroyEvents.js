const destroyEvents = (element, events) => {
for (const key in events) {
    element.removeEventListener(key, events[key].eventCB); 
}
}

export default destroyEvents