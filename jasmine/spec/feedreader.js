/* feedreader.js
 * All of the tests that will be run against the application.
 */

//Ensure tests don't run until the DOM is ready.
$(function() {
    // Test suite on the allFeeds variable in the application
    describe('RSS Feeds', function() {
        // Make sure allFeeds variable has been defined & that it's not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Ensure each feed has a URL defined & that the URL is not empty
         it('have URLs defined', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
            });
         });


        // Ensure each feed has a name defined & that the name is not empty
         it('have names defined', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.name).toBeDefined();
              expect(feed.name.length).not.toBe(0);
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
