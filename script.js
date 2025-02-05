                            let isOriginal = true;

                            function link() {
                                const myLink = document.getElementById('myLink');
                                
                                if (isOriginal) {
                                    myLink.href = "rhau_profile.html";
                                    myLink.innerHTML = "Rhaulline's Profile";
                                } else {
                                    myLink.href = "https://www.facebook.com/mikhael.edman";
                                    myLink.innerHTML = "Facebook Profile";
                                }

                                isOriginal = !isOriginal;
