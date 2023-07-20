const destroyEvents = (eventsData) => {
for (const key in eventsData.activeListeners) {
    eventsData.element.removeEventListener(key, eventsData.activeListeners[key]); // Fails
}
}

export default destroyEvents