- In this Recipe Zone website a nav bar having website name, home and blog link, and  also there is a conditional user profile picture when he or she is login to this website otherwise a login button showed in the nav.
- There is a banner and a Recipe categories and Latest Recipes section in the home page.
- There is also a dynamically showed Chefs section. The data of this section is coming from backend server. There is a view recipes button in each of the chef's card.
- When we click to this view recipes button it leads us to a new route which is a chef recipes page.
- In this page there is a banner having chef's information and another section of chef's recipes. In this section there is favorite button. when we click this button a toast message appear and the button disable.
- This Chefs recipes route is a private route that means no unauthorized person can view this route.
- If someone who is not logged in to this website try to visit this route he/she will lead to login page automatically.
- If someone is not register to this website he or she can't access to this private route page.
- There is some validation in register page like password must be at least six character long and email and password field can't be empty.
- If someone try to access chef's recipes route first he /she have to login and after login they automatically lead to chef's recipes route.
- We also showed a spinner every time data is in loading state.
- One can login through their google and github accout if they want.
- If the user email or password does not match then a alert message appear saying its a wrong email or password.
- There is also a blog route where some asked questions answered.
- The nav link in the header are active link. That means when we active to one page the link of this page remain active.
- When someone try to go to a wrong route a custome 404 or error page appear in front of him.
- In the chef section we also added Lazyload on each of the chef's picture.
- In this website there is also a footer.
- Client site: https://assignment-10-chef-recip-4e537.web.app/
- Server site: https://assignment-10-chef-recipe-hunter-server-tasneemnur.vercel.app/