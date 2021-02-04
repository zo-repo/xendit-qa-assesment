Feature: Online Calculator Feature Divide 0 operation

    Scenario: Test Divide by Zero function
        Given I open a browser and open the online calculator
        When the online calculator is loaded, I press the key "9","/","0" and finally "="
        Then the online calculator will show the result of "Error"