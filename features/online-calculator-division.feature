Feature: Online Calculator Feature Division operation

    Scenario: Test arithmetic division function between 2 numbers, 9 and 4
        Given I open a browser and open the online calculator
        When the online calculator is loaded, I press the key "9","/","4" and finally "="
        Then the online calculator will show the result of "2.25"

    Scenario: Test arithmetic division function between 2 places decimal numbers, 10.11 and 22.4
        Given I open a browser and open the online calculator
        When the online calculator is loaded, I press the key "10.1","/","22.4" and finally "="
        Then the online calculator will show the result of "0.45089286"

    Scenario: Test arithmetic division function between 2 places decimal numbers, 22 and 0.11
        Given I open a browser and open the online calculator
        When the online calculator is loaded, I press the key "22","/","0.11" and finally "="
        Then the online calculator will show the result of "200"

    Scenario: Test arithmetic division function between 2 negative numbers, -10 and -9
        Given I open a browser and open the online calculator
        When the online calculator is loaded, I press the key "-10","/","-9" and finally "="
        Then the online calculator will show the result of "-1"
    
    Scenario: Test arithmetic division function between 1 big numbers and 1 small number, 42123231231 and 1
        Given I open a browser and open the online calculator
        When the online calculator is loaded, I press the key "42123231231","/","1" and finally "="
        Then the online calculator will show the result of "421232312"

    Scenario: Test arithmetic division function between smaller decimal places, 0.0000001 and 0.000003
        Given I open a browser and open the online calculator
        When the online calculator is loaded, I press the key "0.0000001","/","0.000003" and finally "="
        Then the online calculator will show the result of "0.03333333"