/* feedreader.js
 * All of the tests that will be run against the application.
 */

//Ensure tests don't run until the DOM is ready.
$(function() {
    describe('RSS Feeds', function() {
        // Ensure allFeeds variable has been defined & that it's not empty
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

    describe('The menu', function() {
      const body = document.querySelector('body');

        // Ensure menu element is hidden by default
         it('is hidden by default', function() {
             expect(body.classList.contains('menu-hidden')).toBeTruthy();
         });

         // Ensures the menu changes visibility when the menu icon is clicked
          it('changes visibility when clicked', function() {
            const menuIcon = document.querySelector('.icon-list');

            // Does the menu display when clicked
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBeFalsy();

            // Does the menu hide when clicked again
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBeTruthy();
          });
    });

    describe('Initial entries', function() {
         // Make sure loadFeed function is called/completes its work
         beforeEach(function(done){
           loadFeed(0, done);
         });

         //Ensure there is at least a single .entry element within the .feed container
         it('have at least one element', function(done) {
            expect((document.querySelector('.feed').children).length).toBeGreaterThan(0);
            done();
         });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
