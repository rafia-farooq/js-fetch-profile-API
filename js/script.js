const randomFolks = document.querySelector(".random-peeps");
const select = document.querySelector("#users");


const getProfile = async function(number){ 
    const usersRequest = await fetch(`https://randomuser.me/api/?results=${number}&gender=female`);
    const userData = await usersRequest.json();
    const userResults = userData.results;
    // console.log(userResults);
    displayUsers(userResults)
};

// getProfile();

const displayUsers = function(userResults){
    randomFolks.innerHTML = "";

    for(let user of userResults){
        const name = user.name.first;
        const country = user.location.country;
        const image = user.picture.medium;
        // console.log(name, country, image);
        // create a div
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3> ${name} </h3>
        <p>${country}</p>
        <img src=${image} alt="avatar">
        `;
        randomFolks.append(userDiv);
    }    
};

// dropdown functionality 

select.addEventListener("change", function (e) {
    const number = e.target.value;
    getProfile(number);
});
