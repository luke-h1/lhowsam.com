*** Settings ***
Library    OperatingSystem
Library    SeleniumLibrary


# SUITE SETUP
Suite Setup       Run Keywords    
Suite Teardown    Run Keywords    Close Browser    

# TEST CASES
*** Test Cases ***


Check Dark Mode Works
    check dark mode works



Click "projects" link
    check project link works 


integration test the dark mode switcher
    integration test dark mode 



*** Keywords ***


# SCROLL PAGE TO LOCATION
Scroll Page To Location
    [Arguments]           ${x_location}                                   ${y_location}
    Execute JavaScript    window.scrollTo(${x_location},${y_location})


check dark mode works
    Open Browser          https://luke-h-portfolio.luke-h1.vercel.app/index.html    chrome    
    Set Selenium Speed    0.4 Seconds
    Click Element         class=label
    Close Browser         


check project link works
    Open Browser    https://luke-h-portfolio.luke-h1.vercel.app/index.html    Chrome
    Click Link      class=projects
    sleep           0.5 


integration test dark mode
    Open Browser               https://luke-h-portfolio.luke-h1.vercel.app/index.html    Chrome
    Scroll Page To Location    0                                                         2000
    Sleep                      1 
    Click Element              class=scrollToTopBtn
    Sleep                      1 
    Set Selenium Speed         0.4 Seconds
    Click Element              class=label
    sleep                      0.5 
    Click Element              class=label
    sleep                      1 
    Click Link                 class=projects
    sleep                      2 
    Scroll Page To Location    0                                                         2000
    sleep                      1 
    Click Element              class=scrollToTopBtn 
    sleep                      1 
    Click Element              class=label
    sleep                      1 
    Click Element              class=label
    Close All Browsers