export function getGreeting() {
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
        return "Good morning...";
    } else if (hours < 18) {
        return "Good afternoon...";
    } else {
        return "Good evening...";
    }
}