
// Listen for submit
document.querySelector('#zipForm').addEventListener('submit', getLocationInfo);

// Listen for delete
document.querySelector('body').addEventListener('click', deleteLocation);

function getLocationInfo(e) {
    e.preventDefault();
    // console.log("Hello");
    // Get zip value from input
    const zip = document.querySelector('.zip').value;

    // Make request
    fetch(`https://api.zippopotam.us/SE/${zip}`)
        .then(response => {
            // console.log('Hello');
            if (response.status != 200) {
                showIcon('remove');
                document.querySelector('#output').innerHTML = `
                    <article class="message is-danger">
                        <div class="message-body">Invalid Zipcode (range: 10005 : 98499), please try again</div>
                    </article> 
                `;
                throw Error(response.statusText);
            } else {
                showIcon("check");
                return response.json();
            }
        })
        .then(data => {
            // Show location info
            // console.log(data);
            let output = '';
            data.places.forEach(place => {
                output += `
                    <article class="message is-primary">
                        <div class="message-header">
                        <p>Location Info</p>
                        <button class="delete"></button>
                        </div>
                        <div class="message-body">
                            <ul>
                                <li><strong>City: </strong>${place["place name"]}</li>
                                <li><strong>Country: </strong>${data.country}</li>
                                <li><strong>Longitude: </strong>${place["longitude"]}</li>
                                <li><strong>Latitude: </strong>${place["latitude"]}</li>
                            </ul>
                        </div>
                    </article>
                `;
            });

            // Insert into output div
            document.querySelector('#output').innerHTML = output;
        })
        .catch(err => {
            // console.log('Aqui');
            document.querySelector('#output').innerHTML = `
                    <article class="message is-danger">
                        <div class="message-body">Invalid Zipcode (range: 10005 : 98499), please try again</div>
                    </article> 
                `;
            console.log(err)
        });
}

// Show check or remove icon
function showIcon(icon) {
    // Clear icons
    document.querySelector('.icon-remove').style.display = "none";
    document.querySelector('.icon-check').style.display = "none";
    // Show corrent icons
    document.querySelector(`.icon-${icon}`).style.display = "inline-flex";
}

function deleteLocation(e) {
    // console.log("Hello2");
    if (e.target.className == 'delete') {
        document.querySelector('.message').remove();
        document.querySelector('.zip').value = '';
        document.querySelector('.icon-check').remove();
    }
}