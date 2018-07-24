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


  describe('The Menu', function() {
    const body = document.querySelector('body');
    const menuIcon = document.querySelector('.icon-list');

    // Ensure menu element is defined & hidden by default
    it('is hidden by default', function() {
      // Error handling for undefined variables
      expect(document.querySelector('.menu-icon-link')).toBeDefined();
      expect(menuIcon).toBeDefined();
      expect(body.classList.contains('menu-hidden')).toBeDefined();
      // Make sure menu is hidden by default
      expect(body.classList.contains('menu-hidden')).toBeTruthy();
    });

    // Ensures the menu changes visibility when the menu icon is clicked
    it('changes visibility when clicked', function() {
      // Does the menu display when clicked
      menuIcon.click();
      expect(body.classList.contains('menu-hidden')).toBeFalsy();

      // Does the menu hide when clicked again
      menuIcon.click();
      expect(body.classList.contains('menu-hidden')).toBeTruthy();
    });
  });

  describe('Initial Entries', function() {
    // Make sure loadFeed function is called/completes its work
    beforeEach(function(done){
      loadFeed(0, done);
    });

    //Ensure there is at least one .entry element within the .feed container
    it('have at least one element', function(done) {
      // Error handling for out-of-bound array access
      expect(allFeeds[0]).toBeDefined();
      // Error handling for undefined variables
      expect(document.querySelector('.feed').children).toBeDefined();
      // Make sure there is an entry
      expect((document.querySelector('.feed').children).length).toBeGreaterThan(0);
      done();
    });
  });


  describe('New Feed Selection', function() {
    let firstFeedContent;
    let secondFeedContent;

    // Make sure loadFeed function is called/completes its work
    beforeEach(function(done){
      // Load and save the first feed's content
      loadFeed(0, function() {
        firstFeedContent = document.querySelector('.feed').innerHTML;
        // Load and save the second feed's content
        loadFeed(1, function() {
          secondFeedContent = document.querySelector('.feed').innerHTML;
          done();
        });
      });
    });

    //Ensures when a new feed is loaded that the content actually changes
    it('content actually changes', function(done) {
      // Error handling for out-of-bound array access
      expect(allFeeds[0]).toBeDefined();
      expect(allFeeds[1]).toBeDefined();
      // Error handling for undefined variables
      expect(firstFeedContent).toBeDefined();
      expect(secondFeedContent).toBeDefined();
      // Make sure content is not the same
      expect(firstFeedContent).not.toBe(secondFeedContent);
      done();
    });
  });
}());
