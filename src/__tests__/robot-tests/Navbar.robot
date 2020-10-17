*** Settings *** 
Library  SeleniumLibrary 

Suite Setup       Run Keywords    
Suite Teardown    Run Keywords    Close Browser 
*** Variables *** 
${BASE_URL}  http://localhost:3000/ 
${PROJECTS_URL}  http://localhost:3000/projects
${CONTACT_URL}  http://localhost:3000/contact 
${BROWSER}  chrome 

*** Test Cases *** 
check navbar items route correctly 
  check home route
  check projects route 
  check contact route 
   


*** Keywords *** 
check home route 
  Open Browser   ${BASE_URL}  ${BROWSER}
  Maximize Browser Window
  Click Element  //*[@class="nav-links" and text()="Home"] 
  Location Should Be  ${BASE_URL} 
  Close Browser  


check projects route 
  Open Browser  ${BASE_URL}  ${BROWSER}
  Maximize Browser Window
  Click Element  //*[@class="nav-links" and text()="Projects"] 
  Location Should Be  ${PROJECTS_URL} 
  Close Browser 

check contact route 
  Open Browser  ${BASE_URL}  ${BROWSER}
  Maximize Browser Window
  Click Element  //*[@class="nav-links" and text()="Get In Touch"] 
  Location Should Be  ${CONTACT_URL} 
  Close Browser 