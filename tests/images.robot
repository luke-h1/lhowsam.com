*** Settings ***
Library    OperatingSystem
Library    SeleniumLibrary



Suite Setup       Run Keywords
Suite Teardown    Run Keywords    Close Browser 


*** Variables ***
${URL}        https://luke-h-portfolio.luke-h1.vercel.app/index.html
${BROWSER}    chrome
${JS}         window.scrollTo(0, 1100)
${JS_2}       window.scrollTo(0, 1300)
#Home Page Images
${PROFILE_IMAGE}      //*[@id="profile_pic"] 
${PROJECT_IMAGE_1}    xpath=/html/body/section[3]/div[2]/img
${PROJECT_IMAGE_2}    xpath=/html/body/section[3]/div[3]/img
${PROJECT_IMAGE_3}    xpath=/html/body/section[3]/div[4]/img



*** Test Cases ***

check if all images are visible
    checkImages



*** Keywords ***
checkImages
    Open Browser                 ${URL}                ${BROWSER}
    Sleep                        1 
    Element Should Be Visible    ${PROFILE_IMAGE}
    Sleep                        1 
    Execute Javascript           ${JS}
    Sleep                        3 
    Element Should Be Visible    ${PROJECT_IMAGE_1}

    Execute Javascript           ${JS_2}
    Sleep                        3 
    Element Should Be Visible    ${PROJECT_IMAGE_2}
    Element Should Be Visible    ${PROJECT_IMAGE_3}

