                            let counter = 0;

                            function link() {
                                const myLink = document.getElementById('myLink');

                                counter++;
                                
                                if (counter == 1) {
                                    myLink.href = "rhau_profile.html";
                                    myLink.innerHTML = "Rhaulline's Profile";
                                } else if(counter == 2) {
                                    myLink.href = "alt_profile.html";
                                    myLink.innerHTML = "Alternate Profile";
                                } else {
                                    myLink.href = "https://www.facebook.com/mikhael.edman";
                                    myLink.innerHTML = "Facebook Profile";
                                    counter = 0;
                                }

                                
                            }
