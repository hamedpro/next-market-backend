Parse.Cloud.define('hello', req => {
  req.log.info(req);
  return 'Hi';
});

Parse.Cloud.define('helloAsyncFunction', async req => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  req.log.info(req);
  return 'Hi async';
});

Parse.Cloud.define('getRandomNames', async () => {
  const names = [
    'James', 'Robert', 'John', 'Michael', 'David', 'William', 'Richard', 'Joseph',
    'Thomas', 'Charles', 'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth',
    'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen'
  ];
  
  // Shuffle the array and take a random number of names (between 5 and 10)
  const shuffled = [...names].sort(() => 0.5 - Math.random());
  const count = Math.floor(Math.random() * 6) + 5; // Random number between 5 and 10
  
  return shuffled.slice(0, count);
});

Parse.Cloud.beforeSave('TestObject', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});
