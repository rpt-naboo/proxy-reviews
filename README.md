# proxy-reviews
A naive load balancer proxy for the reviews service. Iterates over a provided array of server addresses.

To use:
- Create a servers.js file in the server folder, using the template in servers.example.js. Fill out the array with the urls of your servers.
- Run server/index.js.
- That's it.

Code referenced from: https://www.lunchbadger.com/build-load-balancer-express/