*** Settings ***
Library    OperatingSystem
Library    SeleniumLibrary


# SUITE SETUP
Suite Setup       Run Keywords    
Suite Teardown    Run Keywords    Close Browser    

# TEST CASES
*** Test Cases ***
Navigate to Browser
    Open Browser     https://luke-h-portfolio.luke-h1.vercel.app/index.html    chrome    
    Close Browser    


Check Dark Mode Works
    Open Browser          https://luke-h-portfolio.luke-h1.vercel.app/index.html    chrome    
    Set Selenium Speed    0.4 Seconds
    Click Element         class=label
    Close Browser         

   # the above clicks the label element responsible for setting the dark mode


page should contain luke
    Open Browser           https://luke-h-portfolio.luke-h1.vercel.app/index.html    chrome 
    Page Should Contain    Luke
    Close Browser          



Scroll
    Open Browser          https://luke-h-portfolio.luke-h1.vercel.app/index.html    Chrome
    Execute JavaScript    window.scrollTo(0, document.body.scrollHeight)
    Sleep                 1
    Execute JavaScript    window.scrollTo(0, document.body.scrollHeight)
    Close All Browsers


Click "projects" link
    Open Browser    https://luke-h-portfolio.luke-h1.vercel.app/index.html    Chrome

    Click Link    class=projects
    sleep         0.5 


Click scroll to top btn & test dark mode still works on different pages
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


*** Keywords ***


# SCROLL PAGE TO LOCATION
Scroll Page To Location
    [Arguments]           ${x_location}                                   ${y_location}
    Execute JavaScript    window.scrollTo(${x_location},${y_location})