*** Settings ***
Library    OperatingSystem
Library    SeleniumLibrary


# SUITE SETUP
Suite Setup       Run Keywords    
Suite Teardown    Run Keywords    Close Browser    

# TEST CASES
*** Test Cases ***
turn dark mode on
    Open Browser    https://locahost:3000   chrome    
    Get Selection From User    checkbox







page should contain luke
    Open Browser           http://localhost:3000/    chrome 
    Page Should Contain    Luke





# *** Keywords ***

# Turn Dark Mode On
