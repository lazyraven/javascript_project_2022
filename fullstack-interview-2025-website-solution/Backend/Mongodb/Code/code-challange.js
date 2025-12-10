// Challenge 1 – Insert Users //✅ Task - Create a users collection and insert 3 users.
// 💼 Scenario - App registration feature
// Query
db.users.insertMany([
  { name: "Nisha", age: 23, city: "Pune" },
  { name: "Rahul", age: 25, city: "Mumbai" },
  { name: "Aarti", age: 22, city: "Delhi" },
]);
// 🗣 Spoken Reply - “I insert multiple documents using insertMany.

// Challenge 2 – Find Users by City // ✅ Task - Get all users who live in Mumbai.
// Query
db.users.find({ city: "Mumbai" });
// 🗣 Reply - “I use find() with a condition filter.”

// Challenge 3 – Find Users Above Age 22 // ✅ Task - Fetch users older than 22.
db.users.find({ age: { $gt: 22 } });
// 🗣 Reply - “I apply the $gt operator for greater than filtering.”

// Challenge 4 – Update One User // ✅ Task Change Rahul's city to Bangalore.
db.users.updateOne({ name: "Rahul" }, { $set: { city: "Bangalore" } });
// 🗣 Reply - “I locate the document and use $set to update a field.

// Challenge 5 – Increase Age by 1 //✅ Task - Increase ages of all users by 1 year.
db.users.updateMany({}, { $inc: { age: 1 } });
// 🗣 Reply - “I use updateMany with $inc operator.”

// Challenge 6 – Delete One User // ✅ Task - Delete the user named Aarti.
db.users.deleteOne({ name: "Aarti" });
// 🗣 Reply - “I remove a record using deleteOne.”

// Challenge 7 – Add an Index // ✅ Task - Create index on name field for faster search.
db.users.createIndex({ name: 1 });
// 🗣 Reply - “Indexes improve read performance, especially on large collections.”

// Challenge 8 – Group Users by City // ✅ Task - Count number of users per city.
db.users.aggregate([
  {
    $group: {
      _id: "$city",
      totalUsers: { $sum: 1 },
    },
  },
]);
// 🗣 Reply- “I use aggregation with $group to summarize data.”

// Challenge 9 – Join 2 Collections (Lookup) // ✅ Task - Join orders to users.
// 💼 Scenario - Users have orders – show user info with orders.
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails",
    },
  },
]);
// 🗣 Reply - “MongoDB uses $lookup as an alternative to joins.”

// Challenge 10 – Pagination ✅ Task - Return page 2 with 5 users per page.
db.users.find().skip(5).limit(5);
// 🗣 Reply - “I paginate results using skip & limit.”

// Challenge 11 – Sort by Age (Descending) // ✅ Task - Sort users by age.
db.users.find().sort({ age: -1 });
// 🗣 Reply - “Sort with -1 for descending order.”

// Challenge 12 – Find Only Specific Fields // ✅ Task - Return only name & city.
db.users.find({}, { name: 1, city: 1, _id: 0 });
// 🗣 Reply - “Projection limits what fields are returned.”

// 🟡 REAL INTERVIEW CHALLENGE PROMPTS

// 🔹 Task 1 - Get all users aged between 20–25.
db.users.find({ age: { $gte: 20, $lte: 25 } });

// 🔹 Task 2 - Find user names starting with “N”.
db.users.find({ name: /^N/ });

// 🔹 Task 3 - Delete users from Delhi.
db.users.deleteMany({ city: "Delhi" });

// 🔹 Task 4 - Count total users in the database.
db.users.countDocuments();

// 🔹 Task 5 - Show top 3 oldest users.
db.users.find().sort({ age: -1 }).limit(3);

// 🔵 PRACTICE INTERVIEW SCRIPT
// Interviewer - “How do you filter documents by age in MongoDB?”

// You - “We use the find method with conditional operators like $gt, $lt.”

db.users.find({ age: { $gt: 22 } });
