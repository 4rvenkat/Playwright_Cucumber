Feature: login Feature
  
  @smoke
   Scenario Outline: login with valid credentials
    Given i open the application "https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html"
    When i enter "<userName>" and "<passWord>"
    Then i click on login button
    
    Examples:
    | userName | passWord |
    | SenthilSmartQAHub  | demo |
    | DebitUser | demo |
    | CreditUser | demo |