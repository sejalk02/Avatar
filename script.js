let input = document.querySelector(".name");
        let UserName = document.querySelector(".UserName");
        let submit = document.querySelector(".submit");

        submit.addEventListener('click', () => {
            let name = input.value;
            let imageUrl = "https://joesch.moe/api/v1/" + encodeURIComponent(name);
            let imgElement = document.getElementById("img");

            imgElement.onload = () => {
                UserName.innerText = name;
                input.value = ""; 
            };

            imgElement.src = imageUrl;
        });