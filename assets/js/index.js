let desc="";
        function showModal(modalId, mod_title) {
               
            if (modalId=="modal1")
            {   desc="A quasar is a powerful and extremely distant celestial object found at the center of some galaxies. It emits an intense amount of energy, making it one of the brightest and most energetic objects in the universe";
                document.getElementById('modal_1_body').innerText=desc;
                document.getElementById('exampleModalLabel1').innerText=mod_title; 
                
            }
            else if (modalId=="modal2")
            {   desc="The majestic view of Earth from Space as captured by the International Space Station.";
                document.getElementById('modal_2_body').innerText=desc;
                document.getElementById('exampleModalLabel2').innerText=mod_title; 
            }
            else
            {
                desc="The moment when Venus came to greet our very own moon, aligning right at the top of the moon."
                document.getElementById('modal_3_body').innerText=desc;
                document.getElementById('exampleModalLabel3').innerText=mod_title; 
            }
            $('#' + modalId).modal('show');
        }
