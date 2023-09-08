// snow.js

function snowJSWorking(){
	return true;
}

document.addEventListener("DOMContentLoaded", function () {
    const numSnowflakes = 100; // Set the number of snowflake elements you want

    // Create a container div for the snowflakes
    const snowfallContainer = document.createElement('div');
    snowfallContainer.id = 'snowfall'; // Give it an ID for styling or selecting later
    document.body.appendChild(snowfallContainer);

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Generate a random direction between -1 and 1
        const direction = Math.random() * 2 - 1;
        
        snowflake.style.setProperty('--start-x', Math.random());
        snowflake.style.setProperty('--direction', direction.toString());
        snowflake.style.setProperty('animation-delay', `${i * 0.1}s`); // Adjust the delay as needed

        // Append each snowflake to the snowfallContainer
        snowfallContainer.appendChild(snowflake);
    }

    // Add event listener to toggle snow on button click
    const toggleSnowButton = document.getElementById('toggleSnow');
    toggleSnowButton.addEventListener('click', function () {
        snowfallContainer.classList.toggle('hidden');
    });
});
