function startGPS(current_location, new_location) {
  if (current_location === new_location){
    return 'You are already at the Denver International Airport! Would you like to go somewhere else?';
  } else {
  return `Taking you from ${current_location} to ${new_location}! Getting directions now!`;
  }
}

module.exports = {
  startGPS,
  createUser,
  // makePizza,
  // findRemainder
}