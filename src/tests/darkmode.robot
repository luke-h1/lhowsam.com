*** Settings ***
Library    OperatingSystem
Library    SeleniumLibrary


# SUITE SETUP
Suite Setup       Run Keywords    
Suite Teardown    Run Keywords    Close Browser    


*** Variables ***
${URL}        https://luke-h-portfolio.luke-h1.vercel.app/index.html
${BROWSER}    chrome




*** Test Cases ***

Check Dark Mode Works
    check dark mode works


integration test the dark mode switcher
    integration test dark mode 


*** Keywords ***


# SCROLL PAGE TO LOCATION
Scroll Page To Location
    [Arguments]           ${x_location}                                   ${y_location}
    Execute JavaScript    window.scrollTo(${x_location},${y_location})


check dark mode works
    Open Browser          ${URL}         ${BROWSER}    
    Set Selenium Speed    0.4 Seconds
    Click Element         class=label
    Close Browser         



integration test dark mode
    Open Browser               ${URL}         ${BROWSER}
    Scroll Page To Location    0              5000
    Sleep                      1 
    Scroll Page To Location    0              0 
    Sleep                      1 
    Set Selenium Speed         0.4 Seconds
    Click Element              class=label
    sleep                      0.5 
    Click Element              class=label
    sleep                      1 
    Scroll Page To Location    0              5000
    sleep                      1 
    Scroll Page To Location    0              0 
    sleep                      1 
    Click Element              class=label
    sleep                      1 
    Click Element              class=label
    Close All Browsers