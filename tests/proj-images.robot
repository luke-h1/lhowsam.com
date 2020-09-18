*** Settings ***
Library    OperatingSystem
Library    SeleniumLibrary



Suite Setup       Run Keywords
Suite Teardown    Run Keywords    Close Browser 


*** Variables ***
${URL}        https://luke-h-portfolio.luke-h1.vercel.app/projects.html
${BROWSER}    chrome
${JS}         window.scrollTo(0, 300)
${JS_2}       window.scrollTo(0, 1100)
${JS_3}       window.scrollTo(0, 1100)

#project Page Images
${PROFILE_IMAGE}      //*[@id="profile_pic"] 
${PROJECT_IMAGE_1}    xpath=/html/body/section[2]/div[1]/div/img
${PROJECT_IMAGE_2}    xpath=/html/body/section[2]/div[2]/div/img
${PROJECT_IMAGE_3}    xpath=/html/body/section[2]/div[3]/div/img
${PROJECT_IMAGE_4}    xpath=/html/body/section[2]/div[4]/div/img
${PROJECT_IMAGE_5}    xpath=/html/body/section[2]/div[5]/div/img
${PROJECT_IMAGE_6}    xpath=/html/body/section[2]/div[6]/div/img


*** Test Cases ***

check if all images are visible
    checkImages



*** Keywords ***
checkImages
    Open Browser                 ${URL}                ${BROWSER}
    Sleep                        1 
    Execute Javascript           ${JS}
    Sleep                        3 
    Element Should Be Visible    ${PROJECT_IMAGE_1}
    Element Should Be Visible    ${PROJECT_IMAGE_2}
    Sleep                        1 
    Execute Javascript           ${JS_2}
    Sleep                        3 
    Element Should Be Visible    ${PROJECT_IMAGE_3}
    Element Should Be Visible    ${PROJECT_IMAGE_4}
    Sleep                        2 
    Execute Javascript           ${JS_3} 
    Element Should Be Visible    ${PROJECT_IMAGE_5}
    Element Should Be Visible    ${PROJECT_IMAGE_6}


