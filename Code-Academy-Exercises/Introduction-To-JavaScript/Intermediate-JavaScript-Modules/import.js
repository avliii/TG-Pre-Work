import Airplane from './airplane';
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}
displayFuelCapacity();
/* I imported a module from a file and created a function to access and display its properties */
