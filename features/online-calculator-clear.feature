Feature: Online Calculator Feature Clear screen operation

    Scenario: Test Clear function
        Given I open a browser and open the online calculator
        When the online calculator is loaded, I press the key "9","+","4" and finally "C"
        Then the online calculator will show the result of "0"