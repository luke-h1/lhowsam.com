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

    Click Element    class=label
   # the above clicks the label element responsible for setting the dark mode


page should contain luke
    Open Browser           https://luke-h-portfolio.luke-h1.vercel.app/index.html    chrome 
    Page Should Contain    Luke


Scroll
    Open Browser          https://luke-h-portfolio.luke-h1.vercel.app/index.html    Chrome
    Execute JavaScript    window.scrollTo(0, document.body.scrollHeight)
    Sleep                 3
    Close All Browsers







*** Keywords ***

