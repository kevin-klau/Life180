
const dateString = () => {
  // Create a Date object to get the current date
  const currentDate = new Date();
  
  // Define arrays for the day of the week and month names
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Get the day of the week, month, and date
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  
  // Create the formatted string
  const formattedDate = `${dayOfWeek}, ${month} ${date}`;
  
  // Output the formatted date
  console.log(formattedDate);
  
  return formattedDate;
}

export default dateString;