Installation guide
1. Install NodeJS
2. Install playwright (npm init playwright@latest) / typescript

Run guide
1. Run - npx playwright test
2. To view results - npx playwright show-report

Test Scenarios
1. Verify that the user can navigate to the main page
2. Verify that the user can complete the cost quote flow while selecting all the options
3. Verify that the user can complete the cost quote flow with only required options selection
4. Verify that while the user is navigating through the cost quote flow the step counter is updated accordingly
5. Verify that when using out of area zip code the user is notified and he can enter his email for future notifications
6. Verify that user is notified when zip code is not entered
7. Verify that user is notified when a invalid zip code is entered

Top 5 Selected tests
    Test 2-6(including) - because form is covered from a main user experience and flow

Found Defects
    Step counter does not update accordingly to user progression (test #4 fails)

Ideas of improvement
1. add tags
2. expand coverage
3. cover more than form (images and content)
4. depending if form duplication is wanted or not, expand selector building to better cover this instead of using .nth(index)

Other
1. If form duplication is not intended then a bug should be raised for form duplication
2. If form duplication is intended then sync between form1 and form2 progression should be verified