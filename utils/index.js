export const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString();
}

export const TimePicker = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM"];

export const BookAppointmentFormInitialValues = {
    name: "Name",
    email: "Email Address",
    phone: "Phone Number",
    date: "00.00.0000",
    time: "00:00am",
    store: "",
    service: "Add Services",
}